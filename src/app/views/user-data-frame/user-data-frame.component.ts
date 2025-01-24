import { Component } from '@angular/core';
import {LogoTabComponent} from '../logo-tab/logo-tab.component';
import {FormContactComponent} from '../form-contact/form-contact.component';
import {BackButtonComponent} from '../back-button/back-button.component';
import {ForwardButtonComponent} from '../forward-button/forward-button.component';
@Component({
  selector: 'app-user-data-frame',
  imports: [
    LogoTabComponent,
    FormContactComponent,
    BackButtonComponent,
    ForwardButtonComponent
  ],
  templateUrl: './user-data-frame.component.html',
  styleUrl: './user-data-frame.component.css'
})
export class UserDataFrameComponent {


}
