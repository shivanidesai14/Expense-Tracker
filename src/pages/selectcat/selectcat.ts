import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';

import { category } from "../../shared/category";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
import { Storage } from "@ionic/storage";

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
no2:number=0;
flag:number;
flag1:number;
  constructor(public _data1:CategorydbProvider,
    public _data2:SubcategorydbProvider,
    public storage:Storage,
    public load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.flag=this.navParams.get('num');
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
  onClick1(ite)
  {
    if(this.flag==1)
    {
    /*this.navCtrl.push(OnetimePage,{

        id : ite.sub_cat_id,
        name : ite.sub_cat_name

    })*/
      this.storage.set('id',ite.sub_cat_id);
       this.storage.set('na',ite.sub_cat_name);
         this.storage.set('img',ite.icon_image);

        
    this.navCtrl.pop(OnetimePage);
  }
  
 
  else if (this.flag==2)
  {
    this.storage.set('id',ite.sub_cat_id);
       this.storage.set('na',ite.sub_cat_name);
       this.storage.set('img',ite.icon_image);
        
    this.navCtrl.pop(FrequentPage);
    
  }
  } 

  
onClick(no:number){
  console.log('ionViewDidLoad SelectcatPage');
 this.no2=no;
  if(this.no1==false)
 {
  this.no1=true;
}
else
{
  this.no1=false;
}
  let l1=this.load.create({
    
        content:"Loading..."
      });
      l1.present();
        this._data2.getScategoriesById(no).subscribe(
    
            (data2:subcategory[])=>{
              this.arr2=data2;
              
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
