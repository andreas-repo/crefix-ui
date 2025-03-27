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
    MatFormField,
    MatInput,
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
  beginning_heating_protocol_label: string = 'Beginn Heizprotokoll';
  selectedFromDate: FormControl = new FormControl<string | null>(null);
  end_of_heating_protocol_label: string = 'Ende Heizprotokoll';
  selectedUntilDate: FormControl = new FormControl<string | null>(null);
  heater_fabricant_label: string = 'Heizgerätehersteller';
  heater_fabricant_value: string = '';
  area_was_free_label: string = 'Fussbodenfläche war frei von Materialien und Überdeckungen';
  isAreaFreeChecked: boolean = false;
  day_one_value: string = '';
  day_one_date: string = '';
  day_two_value: string = '';
  day_two_date: string = '';
  day_three_value: string = '';
  day_three_date: string = '';
  day_four_to_eight_value: string = '';
  day_four_to_eight_date: string = '';
  day_nine_value: string = '';
  day_nine_date: string = '';
  day_ten_to_eleven_value: string = '';
  day_ten_to_eleven_date: string = '';
  day_twelve_value: string = '';
  day_twelve_date: string = '';
  day_thirteen_value: string = '';
  day_thirteen_date: string = '';

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
    this.iHeatingProtocolConfirmationJson.dayOneConfirmationValue = this.day_one_value;
    this.iHeatingProtocolConfirmationJson.dayOneValueReadingTime = this.day_one_date;
    this.iHeatingProtocolConfirmationJson.dayTwoConfirmationValue = this.day_two_value;
    this.iHeatingProtocolConfirmationJson.dayTwoValueReadingTime = this.day_two_date;
    this.iHeatingProtocolConfirmationJson.dayThreeConfirmationValue = this.day_three_value;
    this.iHeatingProtocolConfirmationJson.dayThreeValueReadingTime = this.day_three_date;
    this.iHeatingProtocolConfirmationJson.dayFourToEightConfirmationValue = this.day_four_to_eight_value;
    this.iHeatingProtocolConfirmationJson.dayFourToEightValueReadingTime = this.day_four_to_eight_date;
    this.iHeatingProtocolConfirmationJson.dayNineConfirmationValue = this.day_nine_value;
    this.iHeatingProtocolConfirmationJson.dayNineValueReadingTime = this.day_nine_date;
    this.iHeatingProtocolConfirmationJson.dayTenToElevenConfirmationValue = this.day_ten_to_eleven_value;
    this.iHeatingProtocolConfirmationJson.dayTenToElevenValueReadingTime = this.day_ten_to_eleven_date;
    this.iHeatingProtocolConfirmationJson.dayTwelveConfirmationValue = this.day_twelve_value;
    this.iHeatingProtocolConfirmationJson.dayTwelveValueReadingTime = this.day_twelve_date;
    this.iHeatingProtocolConfirmationJson.dayThirteenConfirmationValue = this.day_thirteen_value;
    this.iHeatingProtocolConfirmationJson.dayThirteenValueReadingTime = this.day_thirteen_date;

    await firstValueFrom(this.dataService.updateHeatingProtocol(this.iHeatingProtocolConfirmationJson.id, JSON.stringify(this.iHeatingProtocolConfirmationJson)));

    console.log("Saved heating protocol confirmation data: " + JSON.stringify(this.iHeatingProtocolConfirmationJson));

    await this.router.navigate(['/finished-dc-form', this.id]);
  }
}
