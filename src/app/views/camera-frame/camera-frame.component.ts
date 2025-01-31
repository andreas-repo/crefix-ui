import { Component } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage, WebcamModule} from 'ngx-webcam';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-camera-frame',
  imports: [
    WebcamModule,
    NgIf
  ],
  templateUrl: './camera-frame.component.html',
  styleUrl: './camera-frame.component.css'
})
export class CameraFrameComponent {
  permissionStatus: string = "";
  camData: any = null;
  capturedImage: any = '';
  capturedImageBase64: any = '';
  trigger: Subject<void> = new Subject();


  constructor() {
    this.checkPermissions()
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  checkPermissions() {
    navigator.mediaDevices.getUserMedia({video: {width:500,height:500}}).then((response) => {
      this.permissionStatus = "granted";
      this.camData = response;
      console.log(this.camData);
    }).catch((error) => {
      this.permissionStatus = "denied";
      console.log("error", error);
    });
  }

  capture(event: WebcamImage) {
    console.log("event", event);
    this.capturedImage = event.imageAsDataUrl;
    this.capturedImage = event.imageAsBase64;
  }

  captureImage() {
    this.trigger.next();
  }
}
