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
  this.fk_user_email=localStorage.getItem('name');
        let l1 = this.load.create({

          spinner:"hide",
          content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
          cssClass:"loader",
          duration:1000,
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

  




       
  }
}
    