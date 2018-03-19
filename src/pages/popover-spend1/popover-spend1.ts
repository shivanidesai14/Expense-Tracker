import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SpendsPage } from "../spends/spends";

/**
 * Generated class for the PopoverSpend1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-spend1',
  templateUrl: 'popover-spend1.html',
})
export class PopoverSpend1Page {
  flag:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:Storage) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverSpend1Page');
  }
  onClickRed()
  {
    this.flag=1;
  //  alert(this.flag);
  localStorage.setItem('colorname',"black");
  localStorage.setItem('colorflag',this.flag);
  this.navCtrl.push(SpendsPage);
  }
  onClickYellow()
  {
    this.flag=2;
    localStorage.setItem('colorname',"orange");
    localStorage.setItem('colorflag',this.flag);
  this.navCtrl.push(SpendsPage);
   // alert(this.flag);
  }

  onClickGreen()
  {
    this.flag=3;
    localStorage.setItem('colorname',"lightgreen");    
    localStorage.setItem('colorflag',this.flag);
  this.navCtrl.push(SpendsPage);
  }

  onClickBrown()
  {
    this.flag=4;
    localStorage.setItem('colorname',"lightcoral");
    localStorage.setItem('colorflag',this.flag);
  this.navCtrl.push(SpendsPage);
  }

  onClickBlack()
  {
    this.flag=5;
    localStorage.setItem('colorname',"darkturquoise");
    localStorage.setItem('colorflag',this.flag);
  this.navCtrl.push(SpendsPage);
  }
}
