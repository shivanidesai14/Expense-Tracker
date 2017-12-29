import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  } from "module";

/**
 * Generated class for the EdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edocument',
  templateUrl: 'edocument.html',
})
export class EdocumentPage {
hi:string="";
flag:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdocumentPage');
  }
onClickMe()
{
  if(this.flag==0)
  {
  this.hi="hello";
  this.flag=1;
}
else
{
  this.hi="";
  this.flag=0;
}
}
}
