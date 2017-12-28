import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { CategoryPage } from "../category/category";
/**
 * Generated class for the OnetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onetime',
  templateUrl: 'onetime.html',
})
export class OnetimePage {
  dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnetimePage');
  }
   public event = {
      finalDate:this.y+"-"+this.x+"-"+this.dt,
   month: '2017-01-01',
   
  }
  onetimeNote()
  {
      this.navCtrl.push(AddnewnotePage);
  }
   onClickCategory()
  {
    this.navCtrl.push(CategoryPage);
  }

}
