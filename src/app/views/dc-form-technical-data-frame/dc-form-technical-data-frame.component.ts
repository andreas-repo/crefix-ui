import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DataService} from '../../services/data.service';
import {CmDosageConfirmationJson, IDosageConfirmationFormJson} from '../../models/dosage-confirmation-form.model';
import {ActivatedRoute, Router} from '@angular/router';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-dc-form-technical-data-frame',
  imports: [
    FormsModule
  ],
  templateUrl: './dc-form-technical-data-frame.component.html',
  styleUrl: './dc-form-technical-data-frame.component.css'
})
export class DcFormTechnicalDataFrameComponent {
  forward_button_label: string = "Weiter";
  back_button_label: string = 'Zurück';
  tab_label: string = '';
  screed_construction_from: string = 'Estrichbauarbeiten geplant vom:';
  screed_construction_from_value: string = '';
  screed_construction_until: string = 'Estrichbauarbeiten geplant bis:';
  screed_construction_until_value: string = '';
  screed_area_label: string = 'Estrichfläche:';
  screed_area_value: string = '';
  screed_strength_label: string = 'Estrichfestigkeit:';
  screed_strength_value: string = '';
  has_underfloor_heating_label: string = 'Hat Fußbodenheizung:';
  isChecked: boolean = false;
  measurement_point_label: string = 'Messpunkt';
  isMeasurementPointChecked: boolean = false;
  producer_of_cement_label: string = 'Zementerzeuger:';
  producer_of_cement_value: string = '';
  sand_grading_line_label: string = 'Korngrößen des verwendeten Sandes:';
  sand_grading_line_value: string = '';
  crefix_product_amount_per_mix_label: string = 'Crefix Produkt/Menge pro Mischung:';
  crefix_product_amount_per_mix_value: string = '';

  dataService: DataService;
  iDosageConfirmationFormJsonData: IDosageConfirmationFormJson = new CmDosageConfirmationJson();
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
      console.log(this.iDosageConfirmationFormJsonData);
    });
  }

  returnOnePage() {
    this.router.navigate(['/dc-form-executing-company-frame', this.id]);
  }

  async saveTechnicalData() {
    this.iDosageConfirmationFormJsonData.screedConstructionFrom = this.screed_construction_from_value;
    this.iDosageConfirmationFormJsonData.screedConstructionUntil = this.screed_construction_until_value;
    this.iDosageConfirmationFormJsonData.screedConstructionArea = this.screed_area_value;
    this.iDosageConfirmationFormJsonData.screedConstructionThickness = this.screed_strength_value;
    this.iDosageConfirmationFormJsonData.hasUnderfloorHeating = this.isChecked;
    this.iDosageConfirmationFormJsonData.measurementPoint = this.isMeasurementPointChecked; //TODO error while matching from angular to database, boolean values wont be saved corectly
    this.iDosageConfirmationFormJsonData.producerOfCement = this.producer_of_cement_value;
    this.iDosageConfirmationFormJsonData.sandGradingLine = this.sand_grading_line_value;
    this.iDosageConfirmationFormJsonData.crefixProductAmountPerMix = this.crefix_product_amount_per_mix_value;

    await firstValueFrom(this.dataService.updateDcForm(this.iDosageConfirmationFormJsonData.id, JSON.stringify(this.iDosageConfirmationFormJsonData)));
    console.log("Saved technical data: " + JSON.stringify(this.iDosageConfirmationFormJsonData));

    if(this.isChecked) {
      console.log("Has underfloor heating and must follow to the heatup form");
    } else {
      await this.router.navigate(['/finished-dc-form', this.iDosageConfirmationFormJsonData.id]);
    }

    //await this.router.navigate(['/finished-dc-form', this.iDosageConfirmationFormJsonData.id]);
  }
}
