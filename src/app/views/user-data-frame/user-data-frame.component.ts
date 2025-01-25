import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-data-frame',
  imports: [
  ],
  templateUrl: './user-data-frame.component.html',
  styleUrl: './user-data-frame.component.css'
})
export class UserDataFrameComponent {
  tab_label : string = 'CREFIX APP';
  back_button_label: string = 'Zurück';
  forward_button_label: string = 'Weiter';
  first_name_label: string = 'Vorname';
  @Input() first_name_value: string = "";
  last_name_label: string = 'Nachname';
  @Input() last_name_value: string = "";
  phone_label: string = 'Telefon';
  @Input() phone_value: string = "";
  email_label: string = 'Email';
  @Input() email_value: string = "";

  constructor(private router: Router) { }

  saveUserData() {
    this.router.navigate(['/job-site-frame']);
  }
}
