import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-demo-charts',
  templateUrl: './demo-charts.component.html',
  styleUrls: ['./demo-charts.component.scss']
})
export class DemoChartsComponent implements OnInit {
  public linechart = new Chart();
  public barchart = new Chart();

  constructor() {
    this.initiateLineChart();
    this.initiateBarChart();
  }

  ngOnInit() {
    setInterval(() => {
      this.add();
    },500);
  }

  add() {
    this.linechart.addPoint(Math.floor(Math.random() * 10));
  }

  initiateLineChart() {
    this.linechart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Line Chart'
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
    });
  }

  initiateBarChart() {
    this.barchart = new Chart({
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Bar Chart'
      },
      series: [
        {
          name: 'Line 1',
          data: [1, 2, 3]
        }
      ]
    });
  }

}
