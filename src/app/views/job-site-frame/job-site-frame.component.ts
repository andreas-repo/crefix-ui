import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
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
  tab_label : string = '';
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

  iCmDocumentJsonData: ICmDocumentJson = new CmDocumentJson();
  dataService: DataService;
  id: string | null;

  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCmDocumentById(this.id).subscribe((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });
  }


  async saveJobSiteData() {
    this.iCmDocumentJsonData.address = this.address_value;
    this.iCmDocumentJsonData.city = this.city_value;
    this.iCmDocumentJsonData.zip = this.zip_code_value;
    this.iCmDocumentJsonData.country = this.country_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData))).then((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log("Received return data from /updateCmDocument: " + JSON.stringify(this.iCmDocumentJsonData));
    });

    await this.router.navigate(['/measurement-one-frame', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/user-data-frame']);
  }
}
