import {Component} from '@angular/core';
import {Router} from '@angular/router';
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

  constructor(private router: Router, dataService: DataService) {
      this.dataService = dataService;
      this.dataService.initializeDocument().subscribe((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log(this.iCmDocumentJsonData);

    });
  }

  async saveUserData() {
    this.iCmDocumentJsonData.firstname = this.first_name_value;
    this.iCmDocumentJsonData.lastname = this.last_name_value;
    this.iCmDocumentJsonData.phone = this.phone_value;
    this.iCmDocumentJsonData.email = this.email_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData)));
    console.log("Saved user data: " + JSON.stringify(this.iCmDocumentJsonData));

    await this.router.navigate(['/job-site-frame', this.iCmDocumentJsonData.id]);
  }
}
