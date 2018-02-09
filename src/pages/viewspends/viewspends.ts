import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Navbar,FabContainer, ToastController, PopoverController, AlertController } from 'ionic-angular';
import { SpendsPage } from "../spends/spends";
import { SpendsSubcat } from "../../shared/spendsSubcat";
import { SpendsdbProvider} from "../../providers/spendsdb/spendsdb";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ViewspendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewspends',
  templateUrl: 'viewspends.html',
})
export class ViewspendsPage {
  @ViewChild('navbar') navBar: Navbar;
exp_id:number;
fk_user_email:string="";
arr:SpendsSubcat[]=[];
  constructor(public storage: Storage,public _data:SpendsdbProvider,public navCtrl: NavController,
     public navParams: NavParams,public load: LoadingController, public to: ToastController,  public alert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewspendsPage');
    this.exp_id=this.navParams.get('id');
   
      let l1 = this.load.create({

        content: "Loading..."
      });
      l1.present();
      this._data.getExpenseById(this.exp_id).subscribe(

        (data: SpendsSubcat[]) => {
          this.arr = data;
         
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }

      );

      this.navBar.backButtonClick = () => {
        this.navCtrl.push(SpendsPage);
    };
    
    
  }
  onDelSpends(item) {
    let t1 = this.to.create({
      message: "Deleted..",
      duration: 3000
    });
    let l1 = this.load.create({
      content: "deleting..."
    });
    l1.present();
    this._data.deleteSpends(item).subscribe(
      (data: any) => {
        t1.present();
        this.arr.splice(this.arr.indexOf(item), 1);
        this.navCtrl.push(SpendsPage);
      },
      function (err) {
        alert(err);
      },
      function () {
        l1.dismiss();
      }

    );
  }
  showPrompt(item)
  {
    let prompt = this.alert.create({
      title: 'Delete Spend',
      message: "Are you sure you want to delete this spend???",
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
            
            this.onDelSpends(item);
          }
        }
      ]
    });
    prompt.present();
  }
}
