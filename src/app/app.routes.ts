import { Routes } from '@angular/router';
import {UserDataFrameComponent} from './views/user-data-frame/user-data-frame.component';
import {PageNotFoundComponent} from './views/errors/page-not-found/page-not-found.component';
import {JobSiteFrameComponent} from './views/job-site-frame/job-site-frame.component';
import {MeasurementOneFrameComponent} from './views/measurement-one-frame/measurement-one-frame.component';
import {MeasurementTwoFrameComponent} from './views/measurement-two-frame/measurement-two-frame.component';
import {MeasurementThreeFrameComponent} from './views/measurement-three-frame/measurement-three-frame.component';
import {MeasurementFourFrameComponent} from './views/measurement-four-frame/measurement-four-frame.component';
import {TakeImageFrameComponent} from './views/take-image-frame/take-image-frame.component';

export const routes: Routes = [
  {path: 'user-data-frame', component: UserDataFrameComponent},
  {path: 'job-site-frame/:id', component: JobSiteFrameComponent},
  {path: 'measurement-one-frame/:id', component: MeasurementOneFrameComponent},
  {path: 'measurement-two-frame/:id', component: MeasurementTwoFrameComponent},
  {path: 'measurement-three-frame/:id', component: MeasurementThreeFrameComponent},
  {path: 'measurement-four-frame/:id', component: MeasurementFourFrameComponent},
  {path: 'take-image-frame/:id', component: TakeImageFrameComponent},
  {path: '', redirectTo: '/user-data-frame', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];
