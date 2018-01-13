import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PopoverSpendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-spend',
  templateUrl: 'popover-spend.html',
})
export class PopoverSpendPage {
arr:Spends[]=[];
expense_id:number;
fk_user_email:string='';
fk_scat_id:number;
expense_date:string='';
expense_amt:number;
colour_name:string='';
exp_note:string='';
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public storage:Storage,public _data1:SpendsdbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverSpendPage');
  }
 close() {
    this.viewCtrl.dismiss();
  }
 
}
