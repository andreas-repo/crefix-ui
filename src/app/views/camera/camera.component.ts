import {Component, Output, EventEmitter} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WebcamImage, WebcamModule} from 'ngx-webcam';
import {ActivatedRoute,} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-camera',
  imports: [
    WebcamModule,
    NgIf,
  ],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
  permissionStatus: string = "";
  camData: any = null;
  capturedImage: string = '';
  @Output() capturedImageBase64: any = new EventEmitter<string>();
  trigger: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
    this.checkPermissions()
  }

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  checkPermissions() {
    navigator.mediaDevices.getUserMedia({video: {width:400,height:400}}).then((response) => {
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
    console.log("Captured image in child before sent to parent: " + this.capturedImage);
    this.capturedImageBase64.emit(this.capturedImage);
  }

  captureImage() {
    this.trigger.next();
  }
}
