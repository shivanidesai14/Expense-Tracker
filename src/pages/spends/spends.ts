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
pet: string = "puppies";
  isAndroid: boolean = false;
testing:String='';
  ionViewWillEnter(){
this.testing = "puppies";

}
  constructor(platform: Platform,public navCtrl: NavController, public navParams: NavParams) {
      this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsPage');
  }
  public event = {
   month: '2017-01-01',
   
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
