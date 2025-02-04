import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CmDocument} from '../../models/cm-document.model';
import {Measurement} from '../../models/measurement.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PassDataService} from '../../services/pass-data.service';
import {DataService} from '../../services/data.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-measurement-one-frame',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './measurement-one-frame.component.html',
  styleUrl: './measurement-one-frame.component.css'
})
export class MeasurementOneFrameComponent {

  tab_label : string = 'Erster Messpunkt';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  floor_label: string = 'Stockwerk / Wohnung / Raum';
  floor_value: string = "";
  layed_at_label: string = 'Estrich/Schüttung verlegt am';
  layed_at_value: string = "";
  date_of_measurement_label: string = 'Datum-CM-Messung';
  date_of_measurement_value: string = "";
  initial_weight_label: string = 'Einwaage 50g';
  initial_weight_value: string = "";
  pressure_gauge_display_label: string = 'Manometeranzeige in bar';
  pressure_gauge_display_value: string = "";
  cm_value_label: string = 'CM-Wert in CM%';
  cm_value: string = "";
  temperature_label: string = 'Temperatur in bar';
  temperature_value: string = "";
  humidity_label: string = 'Feuchtigkeit in %';
  humidity_value: string = "";
  surface_temperature_label: string = 'Oberflächentemperatur in °C';
  surface_temperature_value: string = "";
  installation_thickness_label: string = 'Einbaudicke in mm';
  installation_thickness_value: string = "";
  underfloor_heating_label: string = 'Bodenheizung';
  underfloor_heating_value: string = "";
  ready_according_of_technical_datasheet_label: string = 'Belegreif lt. technischem Datenblatt Crefix';
  ready_according_of_technical_datasheet_value: string = "";

  cmDocumentData: CmDocument = new CmDocument();
  dataService: DataService;
  id: string | null;


  constructor(private route: ActivatedRoute, private router: Router, dataService: DataService) {
    this.dataService = dataService;
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getCmDocumentById(this.id).subscribe((data: CmDocument) => {
      this.cmDocumentData = data;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.cmDocumentData));
    });
  }

  async saveMeasurementOneData() {
    //this.cmDocumentData.measurements[0] = new Measurement();
    this.cmDocumentData.measurements[0].floor = this.floor_value;
    this.cmDocumentData.measurements[0].layedAt = this.layed_at_value;
    this.cmDocumentData.measurements[0].dateOfMeasurement = this.date_of_measurement_value;
    this.cmDocumentData.measurements[0].initialWeight = this.initial_weight_value;
    this.cmDocumentData.measurements[0].pressureGaugeDisplay = this.pressure_gauge_display_value;
    this.cmDocumentData.measurements[0].cmValue = this.cm_value;
    this.cmDocumentData.measurements[0].temperature = this.temperature_value;
    this.cmDocumentData.measurements[0].humidity = this.humidity_value;
    this.cmDocumentData.measurements[0].surfaceTemperature = this.surface_temperature_value;
    this.cmDocumentData.measurements[0].installationThickness = this.installation_thickness_value;
    this.cmDocumentData.measurements[0].underfloorHeating = this.underfloor_heating_value;
    this.cmDocumentData.measurements[0].readyAccordingOfTechnicalDatasheet = this.ready_according_of_technical_datasheet_value;

    await firstValueFrom(this.dataService.updateCmDocument(this.cmDocumentData.id.toString(), JSON.stringify(this.cmDocumentData)));

    await this.router.navigate(['/measurement-two-frame', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/job-site-frame', this.id]);
  }
}
