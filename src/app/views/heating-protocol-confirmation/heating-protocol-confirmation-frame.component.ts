import {Component} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable,
  MatTableModule
} from '@angular/material/table';
import {HeatingProtocolDataSource} from '../../models/heating-protocol-datasource.model';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {CmDosageConfirmationJson, IDosageConfirmationFormJson} from '../../models/dosage-confirmation-form.model';
import {HeatingProtocolJson, IHeatingProtocolJson} from '../../models/heating-protocol.model';
import {firstValueFrom} from 'rxjs';

const DATA: HeatingProtocolDataSource[] = [
  {days: '1. Tag', flowTemperature: '20 °C', returnTemperature: '', date: '', time: ''},
  {days: '2. Tag', flowTemperature: '25 °C', returnTemperature: '', date: '', time: ''},
  {days: '3. Tag', flowTemperature: '30 °C', returnTemperature: '', date: '', time: ''},
  {days: '4.-8. Tage', flowTemperature: '40 °C', returnTemperature: '', date: '', time: ''},
  {days: '9. Tag', flowTemperature: '30 °C', returnTemperature: '', date: '', time: ''},
  {days: '10.-11. Tag', flowTemperature: '25 °C', returnTemperature: '', date: '', time: ''},
  {days: '12. Tag', flowTemperature: '20 °C', returnTemperature: '', date: '', time: ''},
  {days: '13. Tag', flowTemperature: 'CM-Messung bei 20 °C', returnTemperature: '', date: '', time: ''},
];

const USER_DATA = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];

const COLUMNS_SCHEMA = [
  {
    key: "days",
    type: "text",
    label: "Tage"
  },
  {
    key: "flowTemperature",
    type: "text",
    label: "Soll-Temperatur"
  },
  {
    key: "returnTemperature",
    type: "text",
    label: "Abgelesene Temperatur"
  },
  {
    key: "date",
    type: "text",
    label: "Datum"
  },
  {
    key: "time",
    type: "text",
    label: "Uhrzeit"
  },
  {
    key: "isEdit",
    type: "isEdit",
    label: ""
  }
]

@Component({
  selector: 'app-heating-protocol-confirmation-frame',
  imports: [
    FormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    NgForOf,
    MatFormField,
    MatInput,
    NgSwitch,
    MatButton,
    NgSwitchDefault,
    NgIf,
    NgSwitchCase,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './heating-protocol-confirmation-frame.component.html',
  styleUrl: './heating-protocol-confirmation-frame.component.css'
})
export class HeatingProtocolConfirmationFrameComponent {
  forward_button_label: string = "Weiter";
  back_button_label: string = 'Zurück';
  tab_label: string = '';
  screed_layer_label: string = 'Estrichleger';
  screed_layer_value: string = '';
  construction_project_label: string = 'Bauvorhaben';
  construction_project_value: string = '';
  executing_screed_layer_label: string = 'Estrich Einbau';
  executing_screed_layer_value: string = '';
  construction_section_label: string = 'Bauabschnitt';
  construction_section_value: string = '';
  displayedColumns: string[] = ['days', 'flowTemperature', 'returnTemperature', 'date', 'time', 'isEdit'];
  dataSource: any = DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  beginning_heating_protocol_label: string = 'Beginn Heizprotokoll';
  selectedFromDate: FormControl = new FormControl<string | null>(null);
  end_of_heating_protocol_label: string = 'Ende Heizprotokoll';
  selectedUntilDate: FormControl = new FormControl<string | null>(null);
  heater_fabricant_label: string = 'Heizgerätehersteller';
  heater_fabricant_value: string = '';
  area_was_free_label: string = 'Fussbodenfläche war frei von Materialien und Überdeckungen';
  isAreaFreeChecked: boolean = false;

  dataService: DataService;
  iHeatingProtocolConfirmationJson: IHeatingProtocolJson = new HeatingProtocolJson();
  id: string = '';
  private route: ActivatedRoute;
  private router: Router;

  constructor(route: ActivatedRoute, router: Router, dataService: DataService) {
    this.router = router;
    this.route = route;
    this.dataService = dataService;
    this.id = <string>this.route.snapshot.paramMap.get('id');
    this.dataService.createHeatingProtocol("{}").subscribe((data: IHeatingProtocolJson) => {
      this.iHeatingProtocolConfirmationJson = data;
      console.log(this.iHeatingProtocolConfirmationJson);
    });
  }



  returnOnePage() {
    this.router.navigate(['/dc-form-executing-company-frame', this.id]);
  }

  async saveHeatingProtocolConfirmationData() {
    this.iHeatingProtocolConfirmationJson.screedLayer = this.screed_layer_value;
    this.iHeatingProtocolConfirmationJson.constructionProject = this.construction_project_value;
    this.iHeatingProtocolConfirmationJson.screedLayerEmail = this.executing_screed_layer_value;
    this.iHeatingProtocolConfirmationJson.constructionSection = this.construction_section_value;
    if (this.selectedFromDate.value !== null) {
      this.iHeatingProtocolConfirmationJson.beginningOfHeating = this.selectedFromDate.value;
    }
    if (this.selectedUntilDate.value !== null) {
      this.iHeatingProtocolConfirmationJson.endOfHeating = this.selectedUntilDate.value;
    }
    this.iHeatingProtocolConfirmationJson.heaterManufacturer = this.heater_fabricant_value;
    this.iHeatingProtocolConfirmationJson.confirmationAreaWasFree = this.isAreaFreeChecked;
    this.iHeatingProtocolConfirmationJson.dayOneConfirmationValue = this.dataSource[0].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayOneValueReadingTime = this.dataSource[0].time;
    this.iHeatingProtocolConfirmationJson.dayTwoConfirmationValue = this.dataSource[1].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayTwoValueReadingTime = this.dataSource[1].time;
    this.iHeatingProtocolConfirmationJson.dayThreeConfirmationValue = this.dataSource[2].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayThreeValueReadingTime = this.dataSource[2].time;
    this.iHeatingProtocolConfirmationJson.dayFourToEightConfirmationValue = this.dataSource[3].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayFourToEightValueReadingTime = this.dataSource[3].time;
    this.iHeatingProtocolConfirmationJson.dayNineConfirmationValue = this.dataSource[4].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayNineValueReadingTime = this.dataSource[4].time;
    this.iHeatingProtocolConfirmationJson.dayTenToElevenConfirmationValue = this.dataSource[5].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayTenToElevenValueReadingTime = this.dataSource[5].time;
    this.iHeatingProtocolConfirmationJson.dayTwelveConfirmationValue = this.dataSource[6].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayTwelveValueReadingTime = this.dataSource[6].time;
    this.iHeatingProtocolConfirmationJson.dayThirteenConfirmationValue = this.dataSource[7].returnTemperature;
    this.iHeatingProtocolConfirmationJson.dayThirteenValueReadingTime = this.dataSource[7].time;

    await firstValueFrom(this.dataService.updateHeatingProtocol(this.iHeatingProtocolConfirmationJson.id, JSON.stringify(this.iHeatingProtocolConfirmationJson)));

    console.log("Saved heating protocol confirmation data: " + JSON.stringify(this.iHeatingProtocolConfirmationJson));

    await this.router.navigate(['/finished-dc-form', this.id]);
  }
}
