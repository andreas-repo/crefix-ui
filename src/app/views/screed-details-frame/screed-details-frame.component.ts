import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {firstValueFrom} from 'rxjs';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';

@Component({
  selector: 'app-screed-details-frame',
  imports: [
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect
  ],
  templateUrl: './screed-details-frame.component.html',
  styleUrl: './screed-details-frame.component.css'
})
export class ScreedDetailsFrameComponent {
  tab_label : string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  crefix_type_label: string = 'Crefix Type';
  crefix_type_value: string = '';
  dosage_label: string = 'Dosierung in ml';
  dosage_value: string = '';
  product_type_label: string = 'Zementsorte/Bindemittelsorte';
  product_type_value: string = '';
  product_mix_ration_label: string = 'Zement/Bindemittel in kg pro Mischung';
  product_mix_ration_value: string = '';
  user_note_label: string = 'Bemerkungen';
  user_note_value: string = '';

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

  async saveScreedDetails() {
    this.iCmDocumentJsonData.crefixType = this.crefix_type_value;
    this.iCmDocumentJsonData.dosage = this.dosage_value;
    this.iCmDocumentJsonData.productType = this.product_type_value;
    this.iCmDocumentJsonData.productMixRation = this.product_mix_ration_value;
    this.iCmDocumentJsonData.userNote = this.user_note_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.iCmDocumentJsonData.id, JSON.stringify(this.iCmDocumentJsonData)));
    console.log("Saved screed details data: " + JSON.stringify(this.iCmDocumentJsonData));

    await this.router.navigate(['/finish-document-frame', this.iCmDocumentJsonData.id]);
  }

  returnOnePage() {
    this.router.navigate(['/measurement-four-image-frame', this.iCmDocumentJsonData.id]);
  }
}
