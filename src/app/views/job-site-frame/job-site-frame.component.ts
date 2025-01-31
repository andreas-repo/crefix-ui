import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CmDocument} from '../../models/cm-document.model';
import {PassDataService} from '../../services/pass-data.service';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {firstValueFrom} from 'rxjs';

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
  dataService: DataService;
  id: string | null;

  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCmDocumentById(this.id).subscribe((data: CmDocument) => {
      this.cmDocumentData = data;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.cmDocumentData));
    });
  }


  async saveJobSiteData() {
    this.cmDocumentData.address = this.address_value;
    this.cmDocumentData.city = this.city_value;
    this.cmDocumentData.zip = this.zip_code_value;
    this.cmDocumentData.country = this.country_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.cmDocumentData.id.toString(), JSON.stringify(this.cmDocumentData)));
    console.log("Saved job site data: " + JSON.stringify(this.cmDocumentData));

    await this.router.navigate(['/measurement-one-frame', this.cmDocumentData.id]);
  }

  returnOnePage() {
    this.router.navigate(['/user-data-frame']);
  }
}
