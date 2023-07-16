import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ROUTE_CONST } from 'src/shared/const/route.const';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_CONST.DASHBOARD,
    pathMatch: 'full'
  },
  {
    path: ROUTE_CONST.DASHBOARD,
    component: DashboardComponent
  },
  {
    path: '**',
    redirectTo: ROUTE_CONST.DASHBOARD
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
