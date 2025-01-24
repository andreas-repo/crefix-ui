import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-field',
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {
  @Input() value: string = "";
  @Input() description: string = "Vorname";
  @Input() hasDescription: boolean = false;
  @Input() error: string = "Error";
  @Input() hasLabel: boolean = false;
  @Input() label: string = "Vorname";
  @Input() hasError: boolean = false;
  @Input() state = "Default";
  @Input() placeholder = "Placeholder";

}
