import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { GraphPage } from "../graph/graph";
/**
 * Generated class for the BarChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bar-chart',
  templateUrl: 'bar-chart.html',
})
export class BarChartPage {
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

return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
}
onClickClose()
{
  this.navCtrl.pop();
}
}
