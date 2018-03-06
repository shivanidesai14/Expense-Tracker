import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,PopoverController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { BarChartPage } from "../bar-chart/bar-chart";
import { LineChartPage } from "../line-chart/line-chart";
import { PopoverMenuPage } from "../popover-menu/popover-menu";

/**
 * Generated class for the GraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {
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
  constructor(public modalctrl:ModalController,platform: Platform,
    public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
      this.isAndroid = platform.is('android');
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
openPopoverMenu(myEvent) {
  let popover = this.popoverCtrl.create(PopoverMenuPage);
  popover.present({
    ev: myEvent
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
    labels: ["Red", "Brown", "Blue", "Yellow", "Green", "Purple", "Orange","Dark Orange","Mehndi","Dark Green","Sea Blue","light green","light purple"],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3 ,6 ,3 ,5 ,8 , 4, 9 ,6],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(244, 164, 96, 0.8)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',

        'rgba( 255, 227, 191, 0.5)',
        'rgba( 237, 234, 139, 0.5)',
        'rgba( 139, 237, 163, 0.5)',
        'rgba( 159, 201, 249, 0.4)',
        'rgba( 255, 150, 81, 0.5)',
        'rgba( 31, 165, 163, 0.3)',

       
      ],
      hoverBackgroundColor: ["#FF6384", "#551a8b", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56","#ff8f00","#ddd70b","#0fc43c","#97efe5","#eff9ca","#efa0ff"]
    }]
  };

  return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
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

  //return this.getChart(this.lineCanvas.nativeElement, "line", data);
}
onClickBar()
{
  this.navCtrl.push(BarChartPage);
}
onClickLine()
{
   this.navCtrl.push(LineChartPage);
}
}

   
