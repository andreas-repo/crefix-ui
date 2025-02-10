import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-identification-id-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './identification-id-frame.component.html',
  styleUrl: './identification-id-frame.component.css'
})
export class IdentificationIdFrameComponent {
  tab_label : string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';

  iCmDocumentJsonData: ICmDocumentJson = new CmDocumentJson();
  dataService: DataService;
  id: string | null;

  identification_id_value: string = "";

  constructor(private router: Router, private route: ActivatedRoute, dataService: DataService) {
    this.dataService = dataService;
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCmDocumentById(this.id).subscribe((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });

    this.makeid(10);
  }

  async saveIdentificationIdData() {
    this.iCmDocumentJsonData.documentId = this.identification_id_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData))).then((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = data;
      console.log("Received return data from /updateCmDocument: " + JSON.stringify(this.iCmDocumentJsonData));
    });

    await this.router.navigate(['/measurement-one-frame', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/job-site-frame', this.id]);
  }

  makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&?';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    this.identification_id_value = result;
  }
}
