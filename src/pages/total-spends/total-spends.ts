import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { category } from "../../shared/category";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";
import { ViewCategorySpendsPage } from "../view-category-spends/view-category-spends";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the TotalSpendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-total-spends',
  templateUrl: 'total-spends.html',
})
export class TotalSpendsPage {
arr1:category[]=[];
  constructor( public storage:Storage,public load:LoadingController,public _data1:CategorydbProvider,
  public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalSpendsPage');
     let l1=this.load.create({
      
          content:"Loading..."
        });
        l1.present();
          this._data1.getAllCategories().subscribe(
      
              (data1:category[])=>{
                this.arr1=data1;
               // alert("successful");
              },
              function(e)
              {
                alert(e);
              },
              function()
              {
                l1.dismiss();
              }
      
          );
  }


}
