import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { GraphPage } from "../graph/graph";
import { LinechartdbProvider } from "../../providers/linechartdb/linechartdb";
import { barchart } from "../../shared/barchart";
import { Storage } from '@ionic/storage';
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
strdata:string="";
strlabel:string='';
public arr:any[]=[];
j:number=0;
jsondata:any;
jsonlabel:any;
fk_user_email:string="";
  ionViewWillEnter(){
this.testing = "pie";
  }
@ViewChild('barCanvas') barCanvas;
  barChart: any;
  n:number=1000;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public _data:LinechartdbProvider,public storage:Storage,public load : LoadingController) {
  }

   ionViewDidLoad() {
     
    this.strdata="[";
    this.strlabel='[';
    let l1 = this.load.create({

      spinner:"hide",
      content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
      cssClass:"loader",
      duration:1000
    });
    l1.present();
     this.definechartdata();
    
    }
    definechartdata()
    {
      
      this.fk_user_email=localStorage.getItem('name');
       this._data.getexpforbar(this.fk_user_email).subscribe(
         (data:any)=>{
    
    
          
           while(this.j<data.length)
           {
             this.arr[this.j]=new barchart(null,null);
            
              this.arr[this.j].exp_amt=data[this.j]["sum(exp_tbl.expense_amt)"];
            
              this.arr[this.j].cat_name=data[this.j].cat_name;
            if(this.j<data.length-1)
            {
            
             this.strdata=this.strdata + this.arr[this.j].exp_amt +"," ;
              this.strlabel=this.strlabel + '"' +this.arr[this.j].cat_name+'"'+',';
            }
            else
            {
           
              this.strdata=this.strdata + this.arr[this.j].exp_amt ;
              this.strlabel=this.strlabel+'"'+this.arr[this.j].cat_name+'"';
            }
          
  
           this.j++;
           
         }
      
         this.barChart = this.getBarChart(); 
           });   
      
   }
  
 getChart(context, chartType, data, options?) {
  return new Chart(context, {

    type: chartType,
    data: data,
    options: options
  });
}
getBarChart() {
  
  this.strdata=this.strdata+"]";
  this.strlabel=this.strlabel+"]";
  
  
    this.jsondata =  JSON.parse(this.strdata);
    this.jsonlabel =  JSON.parse(this.strlabel);
 
  let data = {
    labels:this.jsonlabel,
    datasets: [{
      label: '$ of Expenses',
      data: this.jsondata,
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
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(244, 164, 96, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba( 255, 227, 191, 1)',
        'rgba( 237, 234, 139, 1)',
        'rgba( 139, 237, 163, 1)',
        'rgba( 159, 201, 249,1)',
        'rgba( 255, 150, 81, 1)',
        'rgba( 31, 165, 163, 1)',
        
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
