import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css'
})
export class BackButtonComponent {
  @Input() hasIconEnd: boolean = false;
  @Input() hasIconStart: boolean = false;
  @Input() label: string = "Zurück";
  @Input() variant = "Primary";
  @Input() state = "Default";
  @Input() size = "Medium";
}
