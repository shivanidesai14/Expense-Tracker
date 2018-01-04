import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { GraphPage } from "../graph/graph";

/**
 * Generated class for the LineChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-line-chart',
  templateUrl: 'line-chart.html',
})
export class LineChartPage {

   charts: string = "pie";
  isAndroid: boolean = false;
testing:String='';
  ionViewWillEnter(){
this.testing = "pie";
  }
@ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  barChart: any;
  doughnutChart: any;
  lineChart :any;
  n:number=1000;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   ionViewDidLoad() {
    this.barChart = this.getBarChart(); 
    this.doughnutChart = this.getDoughnutChart();   
    this.lineChart = this.getLineChart();
  }
  
 getChart(context, chartType, data, options?) {
  return new Chart(context, {

    type: chartType,
    data: data,
    options: options
  });
}
getBarChart() {
 
  let data = {
    labels: ["Red", "Brown", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '$ of Expenses',
      data: [100, 150, 220, 400, 600, 500 , 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(244, 164, 96, 0.8)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(244, 164, 96, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  };

  let options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
}

//return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
}
getDoughnutChart() {
  let data = {
    labels: ["Red", "Brown", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(244, 164, 96, 0.8)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      hoverBackgroundColor: ["#FF6384", "#551a8b", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56"]
    }]
  };

 // return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
}
getLineChart() {
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
      {
        label: "Initial Dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 32],
        spanGaps: false,
      }
     
    ]
  };

  return this.getChart(this.lineCanvas.nativeElement, "line", data);
}


onClickClose()
{
  this.navCtrl.pop(GraphPage);
}
}
