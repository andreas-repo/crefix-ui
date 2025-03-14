import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {CmDosageConfirmationJson, IDosageConfirmationFormJson} from '../../models/dosage-confirmation-form.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-dc-form-executing-company-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './dc-form-executing-company-frame.component.html',
  styleUrl: './dc-form-executing-company-frame.component.css'
})
export class DcFormExecutingCompanyFrameComponent {
  tab_label : string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  screed_company_label: string = 'Estrichfirma';
  screed_company_value: string = '';
  job_site_address_label: string = 'Adresse des Bauvorhabens';
  job_site_address_value: string = '';
  job_site_city_label: string = 'Stadt des Bauvorhabens';
  job_site_city_value: string = '';
  job_site_zip_label: string = 'PLZ des Bauvorhabens';
  job_site_zip_value: string =  '';
  job_site_country_label: string = 'Land des Bauvorhabens';
  job_site_country_value: any = '';
  contact_person_label: string = 'Ansprechpartner auf der Baustelle';
  contact_person_value: string = '';
  contact_person_phone_label: string = 'Telefonnummer des Ansprechpartners';
  contact_person_phone_value: string = '';
  contact_person_email_label: string = 'Email des Ansprechpartners';
  contact_person_email_value: string = '';
  date_of_measurement_label: string = 'Termin für die Messung';
  date_of_measurement_value: string = '';

  dataService: DataService;
  iDosageConfirmationFormJsonData: IDosageConfirmationFormJson = new CmDosageConfirmationJson();
  lat: string = '';
  lng: string = '';

  constructor(private router: Router, dataService: DataService) {
    this.dataService = dataService;
    this.dataService.initializeDcForm().subscribe((data: IDosageConfirmationFormJson) => {
      this.iDosageConfirmationFormJsonData = data;
      console.log(this.iDosageConfirmationFormJsonData);
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



  async saveExecutingCompanyData() {
    this.iDosageConfirmationFormJsonData.screedCompany = this.screed_company_value;
    this.iDosageConfirmationFormJsonData.jobSiteAddress = this.job_site_address_value;
    this.iDosageConfirmationFormJsonData.jobSiteCity = this.job_site_city_value;
    this.iDosageConfirmationFormJsonData.jobSiteZip = this.job_site_zip_value;
    this.iDosageConfirmationFormJsonData.jobSiteCountry = this.job_site_country_value;
    this.iDosageConfirmationFormJsonData.contactPerson = this.contact_person_value;
    this.iDosageConfirmationFormJsonData.contactPersonPhone = this.contact_person_phone_value;
    this.iDosageConfirmationFormJsonData.contactPersonEmail = this.contact_person_email_value;
    this.iDosageConfirmationFormJsonData.appointmentDate = this.date_of_measurement_value;

    await firstValueFrom(this.dataService.updateDcForm(this.iDosageConfirmationFormJsonData.id, JSON.stringify(this.iDosageConfirmationFormJsonData)));
    console.log("Saved executing company data: " + JSON.stringify(this.iDosageConfirmationFormJsonData));

    await this.router.navigate(['/dc-form-technical-data-frame', this.iDosageConfirmationFormJsonData.id]);
  }
}
