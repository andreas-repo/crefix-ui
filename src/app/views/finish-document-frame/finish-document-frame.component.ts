import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-finish-document-frame',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './finish-document-frame.component.html',
  styleUrl: './finish-document-frame.component.css'
})
export class FinishDocumentFrameComponent {
  tab_label : string = '';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Abschließen';

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


  async finishDocument() {

    //TODO: Imnplement the send mail endpoint

    await this.router.navigate(['/', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/screed-details-frame']);
  }
}
