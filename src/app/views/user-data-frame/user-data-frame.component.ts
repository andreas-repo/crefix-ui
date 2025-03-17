import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';

@Component({
  selector: 'app-user-data-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './user-data-frame.component.html',
  styleUrl: './user-data-frame.component.css'
})
export class UserDataFrameComponent {
  tab_label : string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  first_name_label: string = 'Vorname';
  first_name_value: string = '';
  last_name_label: string = 'Nachname';
  last_name_value: string = '';
  phone_label: string = 'Telefon';
  phone_value: string = '';
  email_label: string = 'Email';
  email_value: string = '';

  iCmDocumentJsonData: ICmDocumentJson = new CmDocumentJson();
  dataService: DataService;
  lat: string = '';
  lng: string = '';
  id: string = '';
  route: ActivatedRoute;

  constructor(route: ActivatedRoute, private router: Router, dataService: DataService) {
    this.route = route;
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.dataService.getCmDocumentById(this.id).subscribe((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });
  }

  public ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            console.log("Latitude: " + position.coords.latitude + " / " +
              "Longitude: " + position.coords.longitude);
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log("Latitude: " + this.lat);
            console.log("Longitude: " + this.lng);
          }
        },
        (error: any) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  async saveUserData() {
    this.iCmDocumentJsonData.firstname = this.first_name_value;
    this.iCmDocumentJsonData.lastname = this.last_name_value;
    this.iCmDocumentJsonData.phone = this.phone_value;
    this.iCmDocumentJsonData.email = this.email_value;

    this.iCmDocumentJsonData.locationLatitude = this.lat;
    this.iCmDocumentJsonData.locationLongitude = this.lng;

    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData)));
    console.log("Saved user data: " + JSON.stringify(this.iCmDocumentJsonData));

    await this.router.navigate(['/job-site-frame', this.iCmDocumentJsonData.id]);
  }
}
