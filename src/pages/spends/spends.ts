import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, PopoverController,AlertController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { RecurringPage } from "../recurring/recurring";
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
import { SpendsSubcat } from "../../shared/spendsSubcat"
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { PopoverSpendPage } from "../popover-spend/popover-spend";
import { Storage } from '@ionic/storage';
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
  txtsearch: string = "";
  fk_user_email: string = '';
item:Spends[]=[];

  spends: string = "date";
  isAndroid: boolean = false;
  testing: String = '';
  tot:number;
  ionViewWillEnter() {
    this.testing = "date";

  }
  constructor(public storage: Storage, public popoverCtrl: PopoverController,
   public _data: SpendsdbProvider, public load: LoadingController, public to: ToastController,
    platform: Platform, public navCtrl: NavController, public navParams: NavParams,
    public alert:AlertController ) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsPage');
    this.storage.get('name').then((val) => {
      console.log(val);
      this.fk_user_email = val;
      let l1 = this.load.create({

        content: "Loading..."
      });
      l1.present();
      this._data.getALlSpendsById(this.fk_user_email).subscribe(

        (data: SpendsSubcat[]) => {
          this.arr = data;
          this.arr1 = data;
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }

      );

    });

  }

  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

    // month: '2017-01-01',

  }
 
  onClickRec() {
    this.navCtrl.push(RecurringPage);
  }
  onClickFreq() {
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
  openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverSpendPage);
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
onDelSpends(item)
{
   let t1=this.to.create({
      message:"Deleted..",
      duration:3000
   });
   let l1=this.load.create({
      content:"deleting..."
   });
   l1.present();
   this._data.deleteSpends(item).subscribe(
      (data:any)=>{
        t1.present();
        this.arr.splice(this.arr.indexOf(item),1);
      },
      function(err)
      {
        alert(err);
      },
      function()
      {
        l1.dismiss();
      }

   );
}
  showPrompt() {
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
            
            this.onDelSpends(this.item);
          }
        }
      ]
    });
    prompt.present();
  }
}
