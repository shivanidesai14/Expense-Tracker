import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ToastController,LoadingController,AlertController } from 'ionic-angular';
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
     public _data:EdocumentdbProvider,public load:LoadingController,
      public alert: AlertController,public to:ToastController) {
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdocumentPage');
    this.fk_user_email=localStorage.getItem('name');
      let l1 = this.load.create({

        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
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

  onDelEdoc(item)
  {
    let t1 = this.to.create({
      message: "Deleted..",
      duration: 3000
    });
    let l1 = this.load.create({
      spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:300
    });
    l1.present();
    this._data.deleteEdoc(item).subscribe(
      (data: any) => {
        t1.present();
        
      },
      function (err) {
        alert(err);
      },
      function () {
       
      }

    );
  }
  showPrompt(item)
  {
    let prompt = this.alert.create({
      title: 'Delete Spend',
      message: "Are you sure you want to delete this Document???",
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
            
            this.onDelEdoc(item);
          }
        }
      ]
    });
    prompt.present();
  }
}



