import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { category } from "../../shared/category";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";
import { ViewCategorySpendsPage } from "../view-category-spends/view-category-spends";
import { subcatexp } from "../../shared/SubCatExpJoin";
import { SubcatexpdbProvider } from "../../providers/subcatexpdb/subcatexpdb";
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
arr:subcatexp[]=[];
  constructor( public storage:Storage,public load:LoadingController,public _data1:CategorydbProvider,
  public navCtrl: NavController, public navParams: NavParams,public data:SubcatexpdbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TotalSpendsPage');
     let l1=this.load.create({
      
      spinner:"hide",
      content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
      cssClass:"loader",
      duration:1000,
        });
        l1.present();
          this._data1.getAllCategories().subscribe(


              (data1:category[])=>{
                this.arr1=data1;

                      
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
onClick(id:number)
{
  this.navCtrl.push(ViewCategorySpendsPage,{
    'cat_id':id
  })
}

}
