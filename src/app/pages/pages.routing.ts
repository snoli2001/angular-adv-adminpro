import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {ProgressComponent} from "./progress/progress.component";
import {Grafica1Component} from "./grafica1/grafica1.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AccountSettingsComponent} from "./account-settings/account-settings.component";
import {PromisesComponent} from "./promises/promises.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data: {title: 'Dasboard'}},
      {path: 'progress', component: ProgressComponent, data: {title: 'ProgressBar'}},
      {path: 'grafica1', component: Grafica1Component, data: {title: 'Gráfica1'}},
      {path: 'account-settings', component: AccountSettingsComponent,data: {title: 'Ajustes de cuenta'} },
      {path: 'promises', component: PromisesComponent,data: {title: 'Promesas'} },
      {path: 'rxjs', component: RxjsComponent, data: {title: 'RxJx'}}
    ]
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
