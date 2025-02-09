import { Routes } from '@angular/router';
import {UserDataFrameComponent} from './views/user-data-frame/user-data-frame.component';
import {PageNotFoundComponent} from './views/errors/page-not-found/page-not-found.component';
import {JobSiteFrameComponent} from './views/job-site-frame/job-site-frame.component';
import {MeasurementOneFrameComponent} from './views/measurement-one-frame/measurement-one-frame.component';
import {MeasurementTwoFrameComponent} from './views/measurement-two-frame/measurement-two-frame.component';
import {MeasurementThreeFrameComponent} from './views/measurement-three-frame/measurement-three-frame.component';
import {MeasurementFourFrameComponent} from './views/measurement-four-frame/measurement-four-frame.component';
import {
  MeasurementOneImageFrameComponent
} from './views/measurement-one-frame/measurement-one-image-frame/measurement-one-image-frame.component';
import {
  MeasurementTwoImageFrameComponent
} from './views/measurement-two-frame/measurement-two-image-frame/measurement-two-image-frame.component';
import {
  MeasurementThreeImageFrameComponent
} from './views/measurement-three-frame/measurement-three-image-frame/measurement-three-image-frame.component';
import {
  MeasurementFourImageFrameComponent
} from './views/measurement-four-frame/measurement-four-image-frame/measurement-four-image-frame.component';
import {IdentificationIdFrameComponent} from './views/identification-id-frame/identification-id-frame.component';
import {ScreedDetailsFrameComponent} from './views/screed-details-frame/screed-details-frame.component';

export const routes: Routes = [
  {path: 'user-data-frame', component: UserDataFrameComponent},
  {path: 'job-site-frame/:id', component: JobSiteFrameComponent},
  {path: 'identification-id-frame/:id', component: IdentificationIdFrameComponent},
  {path: 'measurement-one-frame/:id', component: MeasurementOneFrameComponent},
  {path: 'measurement-one-image-frame/:id', component: MeasurementOneImageFrameComponent},
  {path: 'measurement-two-frame/:id', component: MeasurementTwoFrameComponent},
  {path: 'measurement-two-image-frame/:id', component: MeasurementTwoImageFrameComponent},
  {path: 'measurement-three-frame/:id', component: MeasurementThreeFrameComponent},
  {path: 'measurement-three-image-frame/:id', component: MeasurementThreeImageFrameComponent},
  {path: 'measurement-four-frame/:id', component: MeasurementFourFrameComponent},
  {path: 'measurement-four-image-frame/:id', component: MeasurementFourImageFrameComponent},
  {path: 'screed-details-frame/:id', component: ScreedDetailsFrameComponent},
  {path: '', redirectTo: '/user-data-frame', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];
