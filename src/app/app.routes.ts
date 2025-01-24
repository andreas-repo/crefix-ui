import { Routes } from '@angular/router';
import {UserDataFrameComponent} from './views/user-data-frame/user-data-frame.component';
import {PageNotFoundComponent} from './views/errors/page-not-found/page-not-found.component';
import {JobSiteFrameComponent} from './views/job-site-frame/job-site-frame.component';

export const routes: Routes = [
  {path: 'user-data-frame', component: UserDataFrameComponent},
  {path: 'job-site-frame', component: JobSiteFrameComponent},
  {path: '', redirectTo: '/user-data-frame', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];
