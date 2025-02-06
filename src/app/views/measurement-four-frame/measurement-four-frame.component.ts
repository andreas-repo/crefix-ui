import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {firstValueFrom} from 'rxjs';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {IMeasurementJson, MeasurementJson} from '../../models/measurement.model';

@Component({
  selector: 'app-measurement-four-frame',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './measurement-four-frame.component.html',
  styleUrl: './measurement-four-frame.component.css'
})
export class MeasurementFourFrameComponent {
  tab_label : string = 'Vierter Messpunkt';
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

  iCmDocumentJsonData: CmDocumentJson = new CmDocumentJson();
  iMeasurementJsonData: IMeasurementJson = new MeasurementJson();
  dataService: DataService;
  id: string = '';
  measurement_id: string = '';

  constructor(private route: ActivatedRoute, private router: Router, dataService: DataService) {
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');

    firstValueFrom(this.dataService.getCmDocumentById(this.id)).then((data: ICmDocumentJson) => {
      this.iCmDocumentJsonData = <CmDocumentJson> data;
      this.measurement_id = (<CmDocumentJson> data).measurementFourId;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });
  }

  async saveMeasurementFourData() {
    console.log("Parsed request to CmDocument: " + <CmDocumentJson> this.iCmDocumentJsonData);

    console.log("Measurement ID: " + this.measurement_id);
    firstValueFrom(this.dataService.getMeasurementById(this.measurement_id)).then((data: IMeasurementJson) => {
      this.iMeasurementJsonData = <IMeasurementJson>data;
      console.log("Received data from /getMeasurementById for MEASUREMENT FOUR: " + JSON.stringify(data));
    });

    this.iMeasurementJsonData.floor = this.floor_value;
    this.iMeasurementJsonData.layedAt = this.layed_at_value;
    this.iMeasurementJsonData.dateOfMeasurement = this.date_of_measurement_value;
    this.iMeasurementJsonData.initialWeight = this.initial_weight_value;
    this.iMeasurementJsonData.pressureGaugeDisplay = this.pressure_gauge_display_value;
    this.iMeasurementJsonData.cmValue = this.cm_value;
    this.iMeasurementJsonData.temperature = this.temperature_value;
    this.iMeasurementJsonData.humidity = this.humidity_value;
    this.iMeasurementJsonData.surfaceTemperature = this.surface_temperature_value;
    this.iMeasurementJsonData.installationThickness = this.installation_thickness_value;
    this.iMeasurementJsonData.underfloorHeating = this.underfloor_heating_value;
    this.iMeasurementJsonData.readyAccordingOfTechnicalDatasheet = this.ready_according_of_technical_datasheet_value;

    this.dataService.updateMeasurementById(this.measurement_id, JSON.stringify(this.iMeasurementJsonData)).subscribe((measurement: IMeasurementJson) => {
      console.log("Received result data from /updateMeasurementById: " + JSON.stringify(measurement));
    });

    await this.router.navigate(['/measurement-four-image-frame', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/measurement-three-image-frame', this.id]);
  }
}
