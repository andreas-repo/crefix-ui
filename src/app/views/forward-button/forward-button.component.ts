import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-forward-button',
  imports: [],
  templateUrl: './forward-button.component.html',
  styleUrl: './forward-button.component.css'
})
export class ForwardButtonComponent {
  @Input() hasIconEnd: boolean = false;
  @Input() hasIconStart: boolean = false;
  @Input() label: string = "Weiter";
  @Input() variant = "Primary";
  @Input() state = "Default";
  @Input() size = "Medium";
}
