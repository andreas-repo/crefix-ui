import {Component} from '@angular/core';
import {CameraComponent} from '../../camera/camera.component';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../../services/data.service';
import {CmDocumentJson, ICmDocumentJson} from '../../../models/cm-document.model';
import {IMeasurementJson, MeasurementJson} from '../../../models/measurement.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-measurement-one-image-frame',
  imports: [
    CameraComponent
  ],
  templateUrl: './measurement-one-image-frame.component.html',
  styleUrl: './measurement-one-image-frame.component.css'
})
export class MeasurementOneImageFrameComponent {
  capturedImageBase64: string = '';
  dataService: DataService;
  id: string = '';
  measurement_id: string = '';
  iCmDocumentJsonData: ICmDocumentJson = new CmDocumentJson();
  iMeasurementJsonData: IMeasurementJson = new MeasurementJson();
  forward_button_label: string = 'Save';
  back_button_label: string = 'Back';


  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');

    firstValueFrom(this.dataService.getCmDocumentById(this.id)).then((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = <CmDocumentJson> data;
      this.measurement_id = (<CmDocumentJson> data).measurementOneId;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });
  }

  saveCapturedBase64Image(image: string) {
    this.capturedImageBase64 = image;
    console.log("Captured image: " + this.capturedImageBase64);
  }

  returnOnePage() {
    this.router.navigate(['/measurement-one-frame', this.measurement_id]);
  }

  async saveCapturedImage() {
    console.log("Parsed request to CmDocument: " + <CmDocumentJson> this.iCmDocumentJsonData);

    console.log("Measurement ID: " + this.measurement_id);
    await firstValueFrom(this.dataService.getMeasurementById(this.measurement_id)).then((data: IMeasurementJson) => {
      this.iMeasurementJsonData = <IMeasurementJson>data;
      console.log("Received data from /getMeasurementById for MEASUREMENT ONE: " + JSON.stringify(data));
    });

    this.iMeasurementJsonData.archivedFileId = this.archiveImageFile(this.capturedImageBase64);
    console.log("Captured image: " + this.iMeasurementJsonData.archivedFileId);

    this.dataService.updateMeasurementPictureById(this.measurement_id, JSON.stringify(this.iMeasurementJsonData)).subscribe((data: IMeasurementJson) => {
      console.log("Received data from /updateMeasurementById: " + JSON.stringify(data));
    });

    await this.router.navigate(['/measurement-two-frame', this.id]);
  }

  archiveImageFile(capturedImageBase64: string): string {
    console.log("Archived image!" + capturedImageBase64); //TODO impl archiveImageFile functionality
    return "captured_measurement_" + this.measurement_id;
  }
}
