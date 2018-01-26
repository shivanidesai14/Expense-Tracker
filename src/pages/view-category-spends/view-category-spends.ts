import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { subcatexp } from "../../shared/SubCatExpJoin";
import { SubcatexpdbProvider } from "../../providers/subcatexpdb/subcatexpdb";



/**
 * Generated class for the ViewCategorySpendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-category-spends',
  templateUrl: 'view-category-spends.html',
})
export class ViewCategorySpendsPage {
arr:subcatexp[]=[];
cat_id:number;
fk_user_email:string="";
sumexp:number=0;
  constructor(
    public _data:SubcatexpdbProvider,
    public storage:Storage,
    public load:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCategorySpendsPage');

  this.cat_id=this.navParams.get('cat_id');
       this.storage.get('name').then((val) => {
      console.log(val);
      this.fk_user_email = val;
        let l1 = this.load.create({

        content: "Loading..."
      });
      l1.present();
      let item=new subcatexp(0,"",this.cat_id,"","",0,"",0,"",0,"","",0,"","");
      this._data.getAllSubCatByJoin(this.fk_user_email,item).subscribe(

        (data: subcatexp[]) => {
          
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
}
    