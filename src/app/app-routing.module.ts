import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

//Modules
import {PagesRoutingModule} from "./pages/pages.routing";
import {AuthRoutingModule} from "./auth/auth.routing";
import {NopagefoundComponent} from "./nopagefound/nopagefound.component";


const routes: Routes = [
  // path: '/dashboard' PagesRouting
  // path: '/grafica1' PagesRouting
  // path: '/progress' PagesRouting

  // path: '/auth' AuthRouting
  // path: '/login' AuthRouting

  {path: '**', component: NopagefoundComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
