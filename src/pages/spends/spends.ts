import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, FabContainer, ToastController, PopoverController, AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { RecurringPage } from "../recurring/recurring";
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
import { SpendsSubcat } from "../../shared/spendsSubcat"
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { SubcatexpdbProvider } from "../../providers/subcatexpdb/subcatexpdb";
import { PopoverSpendPage } from "../popover-spend/popover-spend";
import { PopoverMenuPage } from "../popover-menu/popover-menu";
import { ViewspendsPage } from "../viewspends/viewspends";
import { TotalSpendsPage } from "../total-spends/total-spends";
import { PopoverSpend1Page } from "../popover-spend1/popover-spend1";
import { Storage } from '@ionic/storage';
import { Item } from 'ionic-angular/components/item/item';


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

  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  arr: SpendsSubcat[] = [];
  arr1: SpendsSubcat[] = [];
  fk_user_email: string = '';
  item: Spends[] = [];
  sumexp: number = 0;
  spends: string = "date";
  isAndroid: boolean = false;
  testing: String = '';
  tot: number;
  txtsearch:string="";
  cflag:any;
  color:string;
  flag:number=0;

  constructor(public storage: Storage, public popoverCtrl: PopoverController,
    public _data: SpendsdbProvider,public data:SubcatexpdbProvider, public load: LoadingController, public to: ToastController,
    platform: Platform, public navCtrl: NavController, public navParams: NavParams,
    public alert: AlertController, public fab: FabContainer) {
    this.isAndroid = platform.is('android');

  }
  ionViewWillEnter() {
    this.testing = "date";


  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsPage');
   
      this.cflag=localStorage.getItem('colorflag');
      localStorage.setItem('colorflag','null');
      if(this.cflag>0)
      {
          this.color=localStorage.getItem('colorname');
          localStorage.setItem('colorname','null');
            this.fk_user_email=localStorage.getItem('name');

            let item=new SpendsSubcat(0,this.fk_user_email,0,"",0,this.color,"","","");

          let l1=this.load.create({
                 content : "Loading .."
        });
        l1.present();
          this.data.getExpenseByColor(item).subscribe(
      
              (data:SpendsSubcat[])=>{    
                this.arr=data;
                this.spends="color";
                for (var i = 0; i < this.arr.length; i++) {
                  this.sumexp = this.sumexp + this.arr[i].expense_amt;
                }
                if(this.arr.length>0)
                {
                  this.flag=1;
                }
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
      else
      {
        this.fk_user_email=localStorage.getItem('name');
      let l1 = this.load.create({

        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:2000
      });
      l1.present();
      this._data.getALlSpendsById(this.fk_user_email).subscribe(

        (data: SpendsSubcat[]) => {
          this.arr = data;
          this.arr1 = data;
          for (var i = 0; i < this.arr.length; i++) {
            this.sumexp = this.sumexp + this.arr[i].expense_amt;
          }
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }

      );

    

  }

  }

  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

    // month: '2017-01-01',

  }
  onClickdesc(eid) {
    this.navCtrl.push(ViewspendsPage, {
      id: eid
    })


  }
 
  onClickRec(fab: FabContainer) {
    this.fab.close();
    this.navCtrl.push(RecurringPage);
  }
  onClickFreq(fab: FabContainer) {
    this.navCtrl.push(FrequentPage);
  }
  onClickOne() {
    this.navCtrl.push(OnetimePage);
  }
  search() {
    if (this.txtsearch != '') {
      this.arr = this.arr.filter((x) => x.colour_name.startsWith(this.txtsearch))
    }
    else {
      this.arr = this.arr1;
    }
  }
  openPopover(myEvent, id1: any) {
    localStorage.setItem('spendsid', id1);
    let popover = this.popoverCtrl.create(PopoverSpendPage);
    popover.present({
      ev: myEvent
    });
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
  openPopover1(myEvent) {
  
    let popover = this.popoverCtrl.create(PopoverSpend1Page);
    popover.present({
      ev: myEvent
    });
  }

  searchByDate() {

    if (this.event.finalDate != '') {
  
      this.arr = this.arr1.filter((x) => x.expense_date.match(this.event.finalDate))
    }
    else {
      this.arr = this.arr1;
    }
  }
  onDelSpends(item) {
    let t1 = this.to.create({
      message: "Deleted..",
      duration: 3000
    });
    let l1 = this.load.create({
      content: "deleting..."
    });
    l1.present();
    this._data.deleteSpends(item).subscribe(
      (data: any) => {
        t1.present();
        this.arr.splice(this.arr.indexOf(item), 1);
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );
  }
  showPrompt(item)
  {
    let prompt = this.alert.create({
      title: 'Delete Spend',
      message: "Are you sure you want to delete this spend???",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: data => {
            
            this.onDelSpends(item);
          }
        }
      ]
    });
    prompt.present();
  }
  totSpendByCat() {
    this.navCtrl.push(TotalSpendsPage);
  }
}