import {Component, Input} from '@angular/core';
import {CameraComponent} from '../camera/camera.component';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Measurement} from '../../models/measurement.model';

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
  measurement_id: string | null;
  measurementData: Measurement = new Measurement();
  forward_button_label: string = 'Save';
  back_button_label: string = 'Back';


  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.measurement_id = this.route.snapshot.paramMap.get('id');
    this.dataService.getMeasurementById(this.measurement_id).subscribe((data: Measurement) => {
      this.measurementData = data;
      console.log("Received data from /getMeasurementById: " + JSON.stringify(data));
      console.log("Measurement ID: " + this.measurement_id);
    });
  }

  saveCapturedBase64Image(image: string) {
    this.capturedImageBase64 = image;
    console.log("Captured image: " + this.capturedImageBase64);
  }

  saveCapturedImage() {
    this.measurementData.pictureBase64 = this.capturedImageBase64;
    this.dataService.updateMeasurementById(<string>this.measurementData.id, JSON.stringify(this.measurementData));
    console.log("Saved measurement data: " + JSON.stringify(this.measurementData));

    this.router.navigate(['/', this.measurement_id]);
  }

  returnOnePage() {

  }
}
