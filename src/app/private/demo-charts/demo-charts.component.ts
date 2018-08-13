import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-demo-charts',
  templateUrl: './demo-charts.component.html',
  styleUrls: ['./demo-charts.component.css']
})
export class DemoChartsComponent implements OnInit {
  public chart: Chart = new Chart();

  constructor() {

  }

  ngOnInit() {

    // this.chart = new Chart({
    //   chart: {
    //     type: 'line'
    //   },
    //   title: {
    //     text: 'Linechart'
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   series: [
    //     {
    //       name: 'Line 1',
    //       data: [1, 2, 3]
    //     }
    //   ]
    // });
  }

}
