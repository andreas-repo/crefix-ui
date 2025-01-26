import {Component, Input} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {CmDocument} from '../../models/cm-document.model';
import {FormsModule} from '@angular/forms';
import {PassDataService} from '../../services/pass-data.service';

@Component({
  selector: 'app-user-data-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './user-data-frame.component.html',
  styleUrl: './user-data-frame.component.css'
})
export class UserDataFrameComponent {
  tab_label : string = 'CREFIX APP';
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

  saveUserData() {
    this.cmDocumentData.firstname = this.first_name_value;
    this.cmDocumentData.lastname = this.last_name_value;
    this.cmDocumentData.phone = this.phone_value;
    this.cmDocumentData.email = this.email_value;
    console.log(this.cmDocumentData);
    this.updateCmDocument();

    //remove passing of obj to the next page with navigation and change to a dedicated service
    this.router.navigate(['/job-site-frame']);
  }
}
