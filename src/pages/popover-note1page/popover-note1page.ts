import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewnotePage } from "../newnote/newnote";
/**
 * Generated class for the PopoverNote1pagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-note1page',
  templateUrl: 'popover-note1page.html',
})
export class PopoverNote1pagePage {
flag:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverNote1pagePage');
  }
  onClickRed()
  {
    this.flag=1;
  //  alert(this.flag);
  this.storage.set('colorname',"black");
  this.storage.set('colorflag',this.flag);
  this.navCtrl.push(NewnotePage);
  }
  onClickYellow()
  {
    this.flag=2;
    this.storage.set('colorname',"orange");
  this.storage.set('colorflag',this.flag);
  this.navCtrl.push(NewnotePage);
   // alert(this.flag);
  }

  onClickGreen()
  {
    this.flag=3;
    this.storage.set('colorname',"lightgreen");    
  this.storage.set('colorflag',this.flag);
  this.navCtrl.push(NewnotePage);
  }

  onClickBrown()
  {
    this.flag=4;
    this.storage.set('colorname',"lightcoral");
  this.storage.set('colorflag',this.flag);
  this.navCtrl.push(NewnotePage);
  }

  onClickBlack()
  {
    this.flag=5;
    this.storage.set('colorname',"darkturquoise");
  this.storage.set('colorflag',this.flag);
  this.navCtrl.push(NewnotePage);
  }

}
