import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,PopoverController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Chart } from 'chart.js';
import { BarChartPage } from "../bar-chart/bar-chart";
import { LineChartPage } from "../line-chart/line-chart";
import { PopoverMenuPage } from "../popover-menu/popover-menu";
import { LinechartdbProvider } from "../../providers/linechartdb/linechartdb";
import { doughnutchart } from "../../shared/doughnutchart";
import { Storage } from '@ionic/storage';
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
 
  @ViewChild('doughnutCanvas') doughnutCanvas;
 
 
  doughnutChart: any;
 
  n:number=1000;
  strdata:string="";
  strlabel:string='';
  jsondata:any;
  jsonlabel:any;
  fk_user_email:string="";
  j:number=0;
  public arr:any[]=[];
  
  constructor(public modalctrl:ModalController,platform: Platform,
    public navCtrl: NavController, public navParams: NavParams,
     public popoverCtrl: PopoverController,public _data:LinechartdbProvider,
    public storage:Storage) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    this.strdata="[";
    this.strlabel='[';
      this.definechartdata();
 }
  definechartdata()
  {

    this.storage.get('name').then((val)=>{
      console.log( val);
    this.fk_user_email=val;
     this._data.getexps(this.fk_user_email,2).subscribe(
       (data:any)=>{
  
  
         while(this.j<data.length)
         {
           this.arr[this.j]=new doughnutchart(null,null);
           this.arr[this.j].cat_name=data[this.j].cat_name;
            this.arr[this.j].exp_amt=data[this.j]["sum(exp_tbl.expense_amt)"];

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
     
       this.doughnutChart = this.getDoughnutChart();   
         });   
    });
  

   
    
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
getDoughnutChart() {
  this.strdata=this.strdata+"]";
  this.strlabel=this.strlabel+"]";
  
  
    this.jsondata =  JSON.parse(this.strdata);
    this.jsonlabel =  JSON.parse(this.strlabel);

  let data = {
    labels:this.jsonlabel,
    datasets: [{
      label: 'Rs of Expenses',
      data: this.jsondata,
      backgroundColor:['rgba(255, 99, 132, 0.2)',
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
      hoverBackgroundColor: [
        "#FF6384", "#551a8b", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB", "#FFCE56","#ff8f00",
        "#ddd70b","#0fc43c","#97efe5","#eff9ca","#efa0ff"
      ],
    }]
  };

  return this.getChart(this.doughnutCanvas.nativeElement, "doughnut", data);
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

   
