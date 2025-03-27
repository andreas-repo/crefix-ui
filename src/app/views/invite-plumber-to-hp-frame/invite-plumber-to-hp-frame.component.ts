import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {CmDosageConfirmationJson, IDosageConfirmationFormJson} from '../../models/dosage-confirmation-form.model';
import {EmailRequestJson} from '../../models/email-request.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-invite-plumber-to-hp-frame',
  imports: [],
  templateUrl: './invite-plumber-to-hp-frame.component.html',
  styleUrl: './invite-plumber-to-hp-frame.component.css'
})
export class InvitePlumberToHpFrameComponent {
  tab_label: string = '';
  plumber_email_value: string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Einladung senden';

  dataService: DataService;
  iDosageConfirmationFormJsonData: IDosageConfirmationFormJson = new CmDosageConfirmationJson();
  emailRequest: EmailRequestJson = new EmailRequestJson();
  id: string = '';
  private route: ActivatedRoute;
  private router: Router;

  constructor(route: ActivatedRoute, router: Router, dataService: DataService) {
    this.router = router;
    this.route = route;
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.dataService.getDcFormById(this.id).subscribe((data: IDosageConfirmationFormJson) => {
      this.iDosageConfirmationFormJsonData = data;
      this.plumber_email_value = this.iDosageConfirmationFormJsonData.plumberEmail;
      console.log(this.iDosageConfirmationFormJsonData);
    });
  }

  returnOnePage() {
    this.router.navigate(['/dc-form-technical-data-frame', this.id]);
  }

  async saveAndExecuteInvite() {
    this.emailRequest = new EmailRequestJson();
    this.emailRequest.to = this.plumber_email_value;
    this.emailRequest.dosageConfirmationId = this.iDosageConfirmationFormJsonData.id;
    console.log(this.emailRequest);

    await firstValueFrom(this.dataService.sendHeatingProtocolConfirmationInvitation(JSON.stringify(this.emailRequest)));

    //redirect after finished to crefix homepage
    this.redirectToExternalSite();
  }

  redirectToExternalSite() {
    window.location.href = 'https://www.crefix-gmbh.at';
  }
}
