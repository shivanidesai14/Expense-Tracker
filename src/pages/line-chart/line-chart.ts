import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { GraphPage } from "../graph/graph";
import { Storage } from '@ionic/storage';
import { LinechartdbProvider } from "../../providers/linechartdb/linechartdb";
import { linechart } from "../../shared/linechart";

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
public arr:any[]=[];
   charts: string = "pie";
  isAndroid: boolean = false;
testing:String='';
fk_user_email:string='';
public eamt :any = [];

j:number=0;

  ionViewWillEnter(){
this.testing = "pie";
  }
  @ViewChild('lineCanvas') lineCanvas;

  lineChart :any;
  n:number=1000;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public storage:Storage,public _data:LinechartdbProvider) {
  }

   ionViewDidLoad() {
    
    this.defineChartData();
     this.lineChart = this.getLineChart();
    
  }
  defineChartData()
  {
  }
  
 getChart(context, chartType, data, options?) {
  return new Chart(context, {

    type: chartType,
    data: data,
    options: options

  });
}


getLineChart() {
  
  this.storage.get('name').then((val)=>{
    console.log( val);
  this.fk_user_email=val;
   this._data.getexpforline(this.fk_user_email).subscribe(
     (data:any)=>{


       while(this.j<data.length)
       {
         this.arr[this.j]=new linechart(null,null);
       this.arr[this.j].exp_amt=data[this.j]["sum(expense_amt)"];
        this.arr[this.j].exp_month=data[this.j].exp_month;
       this.j++;
    }
    //  let k:any;
    //  for(k in this.arr.values)
    //  {
    //     this.eamt.push(this.arr[k].exp_amt);
    //  }
    
    // console.log(this.eamt);
    this.arr.map(item => {
      return {
          exp_amt: item.exp_amt,
         // exp_month: item.exp_month
      }
  }).forEach(item => this.eamt.push(item.exp_amt));
  
     });
     console.log(this.eamt);
     
  });
  
  

  var data = {

    
  
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"],
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
        data:this.eamt.values,
         spanGaps: false,
      }
     
    ]
  };

  return this.getChart(this.lineCanvas.nativeElement, "line", data);
}


onClickClose()
{
  this.navCtrl.pop();
}
}
