import {Component, Input} from '@angular/core';
import {Color, Label, MultiDataSet} from "ng2-charts";

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title: string = 'title';
// Doughnut

  @Input('labels') public doughnutChartLabels: Label[] = ['Sales1', 'Sales2', 'Sales3'];

  @Input('data') public doughnutChartData: MultiDataSet = [
    [700, 250, 50]
  ];

  public colors: Color[] = [
    {backgroundColor: ['#8dc66a','rgba(246,151,96,0.99)','#deb357']}
  ]


}
