import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
/**
 * Generated class for the FrequentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frequent',
  templateUrl: 'frequent.html',
})
export class FrequentPage {
 dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequentPage');
  }
   public event = {

      finalDate:this.y+"-"+this.x+"-"+this.dt,
  // month: '2017-01-01',
   
  }
  frequentNotes()
  {
      this.navCtrl.push(AddnewnotePage);
  }

}
