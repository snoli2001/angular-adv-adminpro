import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  progress1: number = 25;
  progress2: number = 35;

  get getPercentage1() {
    return `${this.progress1}%`
  }

  get getPercentage2() {
    return `${this.progress2}%`
  }

  ChildrenValueChanged( value: number) {
    console.log('Hey!!!', value)
  }


}
