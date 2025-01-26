import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CmDocument} from '../../models/cm-document.model';
import {PassDataService} from '../../services/pass-data.service';

@Component({
  selector: 'app-job-site-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './job-site-frame.component.html',
  styleUrl: './job-site-frame.component.css'
})
export class JobSiteFrameComponent {
  tab_label : string = 'CREFIX APP';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  job_site_address_label: string = 'Adresse';
  address_value: string = "";
  city_label: string = 'Stadt';
  city_value: string = "";
  zip_code_label: string = 'ZIP Code';
  zip_code_value: string = "";
  country_label: string = 'Land';
  country_value: string = "";

  cmDocumentData: CmDocument = new CmDocument();

  updateCmDocument() {
    this.passDataService.setCmDocumentObject(this.cmDocumentData);
  }

  constructor(private router: Router, private passDataService: PassDataService) {
    this.passDataService.getCmDocument.subscribe((cmDocument=>
        this.cmDocumentData = cmDocument

    ));
    console.log(this.cmDocumentData);
  }


  saveJobSiteData() {
    this.cmDocumentData.address = this.address_value;
    this.cmDocumentData.city = this.city_value;
    this.cmDocumentData.zip = this.zip_code_value;
    this.cmDocumentData.country = this.country_value;
    console.log(this.cmDocumentData);
    this.updateCmDocument();

    this.router.navigate(['/documents-frame']);
  }

  returnOnePage() {
    this.router.navigate(['/user-data-frame']);
  }
}
