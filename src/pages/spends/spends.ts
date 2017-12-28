import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController,PopoverController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { RecurringPage } from "../recurring/recurring";
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { PopoverSpendPage } from "../popover-spend/popover-spend";
/**
 * Generated class for the SpendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spends',
  templateUrl: 'spends.html',
})
export class SpendsPage {
    dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
arr:Spends[]=[];
arr1:Spends[]=[];
 txtsearch:string="";


spends: string = "date";
  isAndroid: boolean = false;
testing:String='';
  ionViewWillEnter(){
this.testing = "date";

}
  constructor(public popoverCtrl: PopoverController,public _data:SpendsdbProvider,public load:LoadingController,public to:ToastController,platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsPage');

    let l1=this.load.create({

    content:"Loading..."
  });
  l1.present();
    this._data.getALlSpends().subscribe(

        (data:Spends[])=>{
          this.arr=data;
        },
        function(e)
        {
          alert(e);
        },
        function()
        {
          l1.dismiss();
        }

    );

  }
  public event = {
   finalDate:this.y+"-"+this.x+"-"+this.dt,
   
  // month: '2017-01-01',
   
}
/*search()
{
 /* if(event)
  {
    //this.arr=this.arr.filter((x)=>x.expense_date.match())
  }
  /*else
  {
    this.arr=this.arr1;
  }*/
//}
onClickRec()
{
  this.navCtrl.push(RecurringPage);
}
onClickFreq()
{
  this.navCtrl.push(FrequentPage);
}
onClickOne()
{
   this.navCtrl.push(OnetimePage);
}
search()
{
  if(this.txtsearch!='')
  {
    this.arr=this.arr.filter((x)=>x.colour_name.startsWith(this.txtsearch))
  }
  else
  {
    this.arr=this.arr1;
  }
}
openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverSpendPage);
    popover.present({
      ev: myEvent
    });
  }


}
