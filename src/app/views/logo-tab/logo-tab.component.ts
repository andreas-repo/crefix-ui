import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-logo-tab',
  imports: [],
  templateUrl: './logo-tab.component.html',
  styleUrl: './logo-tab.component.css'
})
export class LogoTabComponent {
  @Input() label: string = "Crefix Logo";
  @Input() state = "Default";
  @Input() active = "Off";
}
