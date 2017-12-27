import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { RecurringPage } from "../recurring/recurring";
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
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


spends: string = "date";
  isAndroid: boolean = false;
testing:String='';
  ionViewWillEnter(){
this.testing = "date";

}
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsPage');
  }
  public event = {
  finalDate:this.y+"-"+this.x+"-"+this.dt,

  // month: '2017-01-01',
   
  }
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

}
