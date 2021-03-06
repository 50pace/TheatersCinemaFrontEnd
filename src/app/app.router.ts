import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LogInFormComponentComponent} from './log-in-form-component/log-in-form-component.component';
import {RegisterFormComponentComponent} from './register-form-component/register-form-component.component';
import {CinemaTheaterComponentComponent} from './cinema-theater-component/cinema-theater-component.component';
import {RepertoryComponent} from './repertory/repertory.component';

export const router: Routes = [

  {path: '', redirectTo: 'home' , pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'log-in-form-component', component: LogInFormComponentComponent},
  {path: 'register-form-component', component: RegisterFormComponentComponent},
  {path: 'cinema-theater-component', component: CinemaTheaterComponentComponent}
  // {path: 'repertory', component: RepertoryComponent}


];

export  const routes: ModuleWithProviders = RouterModule.forRoot(router);
