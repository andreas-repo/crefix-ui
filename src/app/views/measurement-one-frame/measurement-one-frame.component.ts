import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CmDocumentJson, ICmDocumentJson} from '../../models/cm-document.model';
import {IMeasurementJson, MeasurementJson} from '../../models/measurement.model';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {firstValueFrom} from 'rxjs';
import {
  MatDatepickerModule
} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {CommonModule} from '@angular/common';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-measurement-one-frame',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './measurement-one-frame.component.html',
  styleUrl: './measurement-one-frame.component.css'
})
export class MeasurementOneFrameComponent {

  tab_label : string = 'Erster Messpunkt';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  floor_label: string = 'Stockwerk / Wohnung / Raum';
  floor_value: string = '';
  layed_at_label: string = 'Estrich/Schüttung verlegt am';
  selectedLayedAtDate: FormControl = new FormControl<string | null>(null);
  date_of_measurement_label: string = 'Datum-CM-Messung';
  selectedDateOfMeasurementDate: FormControl = new FormControl<string | null>(null);
  initial_weight_label: string = 'Einwaage 50g';
  initial_weight_value: string = "";
  pressure_gauge_display_label: string = 'Manometeranzeige in bar';
  pressure_gauge_display_value: string = "";
  cm_value_label: string = 'CM-Wert in CM%';
  cm_value: string = "";
  temperature_label: string = 'Temperatur in C°';
  temperature_value: string = "";
  humidity_label: string = 'Feuchtigkeit';
  humidity_value: string = "";
  surface_temperature_label: string = 'Oberflächentemperatur';
  surface_temperature_value: string = "";
  installation_thickness_label: string = 'Einbaudicke';
  installation_thickness_value: string = "";
  underfloor_heating_label: string = 'Bodenheizung';
  isUnderfloorHeatingChecked: boolean = false;
  ready_according_of_technical_datasheet_label: string = 'Belegreif lt. technischem Datenblatt Crefix';
  isReadyAccordingOfTechnicalDatasheetChecked: boolean = false;

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
      this.measurement_id = (<CmDocumentJson> data).measurementOneId;
      console.log("Received data from /getCmDocumentById: " + JSON.stringify(this.iCmDocumentJsonData));
    });
  }

  async saveMeasurementOneData() {
    console.log("Parsed request to CmDocument: " + <CmDocumentJson> this.iCmDocumentJsonData);

    console.log("Measurement ID: " + this.measurement_id);
    firstValueFrom(this.dataService.getMeasurementById(this.measurement_id)).then((data: IMeasurementJson) => {
      this.iMeasurementJsonData = <IMeasurementJson>data;
      console.log("Received data from /getMeasurementById for MEASUREMENT ONE: " + JSON.stringify(data));
    });

    this.iMeasurementJsonData.floor = this.floor_value;

    if (this.selectedLayedAtDate.value !== null) {
      this.iMeasurementJsonData.layedAt = this.selectedLayedAtDate.value;
    }

    if (this.selectedDateOfMeasurementDate.value !== null) {
      this.iMeasurementJsonData.dateOfMeasurement = this.selectedDateOfMeasurementDate.value;
    }

    this.iMeasurementJsonData.initialWeight = this.initial_weight_value;
    this.iMeasurementJsonData.pressureGaugeDisplay = this.pressure_gauge_display_value;
    this.iMeasurementJsonData.cmValue = this.cm_value;
    this.iMeasurementJsonData.temperature = this.temperature_value;
    this.iMeasurementJsonData.humidity = this.humidity_value;
    this.iMeasurementJsonData.surfaceTemperature = this.surface_temperature_value;
    this.iMeasurementJsonData.installationThickness = this.installation_thickness_value;
    this.iMeasurementJsonData.underfloorHeating = this.isUnderfloorHeatingChecked.toString();
    this.iMeasurementJsonData.readyAccordingOfTechnicalDatasheet = this.isReadyAccordingOfTechnicalDatasheetChecked.toString();

    this.dataService.updateMeasurementById(this.measurement_id, JSON.stringify(this.iMeasurementJsonData)).subscribe((measurement: IMeasurementJson) => {
      console.log("Received result data from /updateMeasurementById: " + JSON.stringify(measurement));
    });

    await this.router.navigate(['/measurement-one-image-frame', this.id]);
  }

  returnOnePage() {
    this.router.navigate(['/identification-id-frame', this.id]);
  }
}
