import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
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
exp_id:number;
fk_user_email:string="";
arr:SpendsSubcat[]=[];
  constructor(public storage: Storage,public _data:SpendsdbProvider,public navCtrl: NavController, public navParams: NavParams,public load: LoadingController, public to: ToastController) {
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


    
    
  }

}
