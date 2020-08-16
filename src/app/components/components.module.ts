import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementerComponent } from './incrementer/incrementer.component';
import {FormsModule} from "@angular/forms";
import { DonutComponent } from './donut/donut.component';
import {ChartsModule} from "ng2-charts";


@NgModule({
  declarations: [
    IncrementerComponent,
    DonutComponent
  ],
  exports: [
    IncrementerComponent,
    DonutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
