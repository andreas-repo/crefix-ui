import {Component} from '@angular/core';
import {CameraComponent} from '../camera/camera.component';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IMeasurementJson, MeasurementJson} from '../../models/measurement.model';

@Component({
  selector: 'app-take-image-frame',
  imports: [
    CameraComponent
  ],
  templateUrl: './take-image-frame.component.html',
  styleUrl: './take-image-frame.component.css'
})
export class TakeImageFrameComponent {

  capturedImageBase64: string = '';

  dataService: DataService;
  measurement_id: string;
  iMeasurementJsonData: IMeasurementJson = new MeasurementJson();
  forward_button_label: string = 'Save';
  back_button_label: string = 'Back';


  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.measurement_id = <string>this.route.snapshot.paramMap.get('id');
    this.dataService.getMeasurementById(this.measurement_id).subscribe((data: IMeasurementJson) => {
      this.iMeasurementJsonData = data;
      console.log("Received data from /getMeasurementById: " + JSON.stringify(this.iMeasurementJsonData));
      console.log("Measurement ID: " + this.measurement_id);
    });
  }

  saveCapturedBase64Image(image: string) {
    this.capturedImageBase64 = image;
    console.log("Captured image: " + this.capturedImageBase64);
  }

  async saveCapturedImage() {
    this.iMeasurementJsonData.archivedFileId = this.archiveImageFile(this.capturedImageBase64);
    console.log("Captured image: " + this.iMeasurementJsonData.archivedFileId);
    this.dataService.updateMeasurementPictureById(this.iMeasurementJsonData.id, JSON.stringify(this.iMeasurementJsonData)).subscribe((data: IMeasurementJson) => {
      this.iMeasurementJsonData = data;
      console.log("Received data from /updateMeasurementById: " + JSON.stringify(data));
    });

    await this.router.navigate(['/', this.measurement_id]);
  }

  archiveImageFile(capturedImageBase64: string): string {
    console.log("Archived image!" + capturedImageBase64); //TODO impl archiveImageFile
    return "captured_measurement_" + this.measurement_id;
  }


  returnOnePage() {

  }
}
