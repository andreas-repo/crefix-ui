import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-job-site-frame',
  imports: [],
  templateUrl: './job-site-frame.component.html',
  styleUrl: './job-site-frame.component.css'
})
export class JobSiteFrameComponent {
  tab_label : string = 'CREFIX APP';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  job_site_address_label: string = 'Adresse';
  @Input() address_value: string = "";
  city_label: string = 'Stadt';
  @Input() city_value: string = "";
  zip_code_label: string = 'ZIP Code';
  @Input() zip_code_value: string = "";
  country_label: string = 'Land';
  @Input() country_value: string = "";

  constructor(private router: Router) { }


  saveJobSiteData() {
    this.router.navigate(['/documents-frame']);
  }

  returnOnePage() {
    this.router.navigate(['/user-data-frame']);
  }
}
