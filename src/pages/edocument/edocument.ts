import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ToastController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Edocument } from "../../shared/edoc";
import { PopoverMenuPage } from "../popover-menu/popover-menu";
import { AddedocumentPage } from '../addedocument/addedocument';
import { EdocumentdbProvider } from "../../providers/edocumentdb/edocumentdb";

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
fk_user_email:string;
arr:Edocument[]=[];
  constructor(public navCtrl: NavController,public storage:Storage,
     public navParams: NavParams,public popoverCtrl: PopoverController,
     public _data:EdocumentdbProvider,public load:LoadingController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdocumentPage');
    this.storage.get('name').then((val) => {
      console.log(val);
      this.fk_user_email = val;
      let l1 = this.load.create({

        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/45.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:2000
      });
      l1.present();
      this._data.getEdocById(this.fk_user_email).subscribe(

        (data: Edocument[]) => {
          this.arr = data;
      
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
 
onclickAddDoc()
{
  this.navCtrl.push(AddedocumentPage);
}
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
}
