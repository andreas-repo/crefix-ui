import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {CmDosageConfirmationJson, IDosageConfirmationFormJson} from '../../models/dosage-confirmation-form.model';
import {ActivatedRoute, Router} from '@angular/router';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {EmailRequestJson, IEmailRequestJson} from '../../models/email-request.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-finished-dc-form',
  imports: [
    FormsModule
  ],
  templateUrl: './finished-dc-form.component.html',
  styleUrl: './finished-dc-form.component.css'
})
export class FinishedDcFormComponent {
  tab_label: string = '';
  back_button_label: string = ' Zurück';
  forward_button_label: string = 'Abschließen';

  dataService: DataService;
  iDosageConfirmationFormJsonData: IDosageConfirmationFormJson = new CmDosageConfirmationJson();
  iCmDocumentJsonData: ICmDocumentJson = new CmDocumentJson();
  id: string = '';
  cmDocumentId: string = '';
  emailRequest: EmailRequestJson = new EmailRequestJson();
  private router: Router;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute, router: Router, dataService: DataService) {
    this.route = route;
    this.router = router;
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.dataService.getDcFormById(this.id).subscribe((data: IDosageConfirmationFormJson) => {
      this.iDosageConfirmationFormJsonData = data;
      console.log(this.iDosageConfirmationFormJsonData);
    });
  }

  async saveAndExecuteInvite() {
    await firstValueFrom(this.dataService.initializeDocument()).then((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      this.cmDocumentId = this.iCmDocumentJsonData.id;
    })

    this.iCmDocumentJsonData = this.mapValuesFromDcFormToCmDocumentJson(this.iDosageConfirmationFormJsonData, this.iCmDocumentJsonData);
    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData)));

    this.emailRequest = new EmailRequestJson();
    this.emailRequest.to = this.iDosageConfirmationFormJsonData.contactPersonEmail;
    this.emailRequest.dosageConfirmationId = this.iDosageConfirmationFormJsonData.id;
    this.emailRequest.cmDocumentId = this.cmDocumentId;
    console.log(this.emailRequest);

    await firstValueFrom(this.dataService.sendCmDocumentInvitation(JSON.stringify(this.emailRequest)));

    //redirect after finished to crefix homepage
    this.redirectToExternalSite();
  }

  returnOnePage() {
    this.router.navigate(['/dc-form-technical-data-frame', this.id]);
  }

  redirectToExternalSite() {
    window.location.href = 'https://www.crefix-gmbh.at';
  }

  private mapValuesFromDcFormToCmDocumentJson(iDosageConfirmationFormJsonData: IDosageConfirmationFormJson, iCmDocumentJson: ICmDocumentJson) {
    iCmDocumentJson.email = iDosageConfirmationFormJsonData.contactPersonEmail;
    iCmDocumentJson.phone = iDosageConfirmationFormJsonData.contactPersonPhone;

    const nameParts = iDosageConfirmationFormJsonData.contactPerson.split(' ');
    iCmDocumentJson.firstname = nameParts[0];
    iCmDocumentJson.lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    return iCmDocumentJson;
  }
}
