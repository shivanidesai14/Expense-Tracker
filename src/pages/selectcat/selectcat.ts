import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';

import { category } from "../../shared/category";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";

/**
 * Generated class for the SelectcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectcat',
  templateUrl: 'selectcat.html',
})
export class SelectcatPage {

arr1:category[]=[];
arr2:subcategory[]=[];
no1:boolean=false;
no:number=0;
  constructor(public _data1:CategorydbProvider,
    public _data2:SubcategorydbProvider,
    public load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

 /* ionViewDidLoad() {
    console.log('ionViewDidLoad SelectcatPage');
    let l1=this.load.create({
      
          content:"Loading..."
        });
        l1.present();
          this._data.getCatSubcat().subscribe(
      
              (data:catscat[])=>{
                this.arr=data;
                alert("successful");
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
      
  }*/
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SelectcatPage');
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
onClick(no:number){
  console.log('ionViewDidLoad SelectcatPage');
  this.no1=true;
  let l1=this.load.create({
    
        content:"Loading..."
      });
      l1.present();
        this._data2.getScategoriesById(no).subscribe(
    
            (data2:subcategory[])=>{
              this.arr2=data2;
              this.no+=this.no;
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
