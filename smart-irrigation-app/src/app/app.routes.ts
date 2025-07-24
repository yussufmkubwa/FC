import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { Dashboard } from './dashboard/dashboard';
import { Login } from './login/login';
import { Reports } from './reports/reports';
import { Monitoring } from './monitoring/monitoring';
import { Irrigation } from './irrigation/irrigation';
import { Settings } from './settings/settings';
import { Notifications } from './notifications/notifications';

// Fafanua njia za programu
export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Njia ya mwanzo itaelekeza kwenye ukurasa wa login
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'monitoring', component: Monitoring },
  { path: 'irrigation', component: Irrigation },
  { path: 'settings', component: Settings },
  { path: 'notifications', component: Notifications },
  { path: 'reports', component: Reports },
  { path: '**', redirectTo: '/login' } // Rudisha kwenye login kwa njia zisizojulikana
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Sanidi routing kwa programu kuu
  exports: [RouterModule] // Hamisha RouterModule ili iweze kutumika kwingine
})
export class AppRoutingModule { }