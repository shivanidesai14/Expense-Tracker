import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { category } from "../../shared/category";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";

/**
 * Generated class for the SelectParCatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-par-cat',
  templateUrl: 'select-par-cat.html',
})
export class SelectParCatPage {
  arr1:category[]=[];
  fk_user_email:string="";
  constructor(public storage:Storage,public load:LoadingController,public _data1:CategorydbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad SelectParCatPage');
    this.storage.get('name').then((val)=>{
      console.log( val);
      this.fk_user_email=val;
    let l1=this.load.create({
      
      content:"Loading..."
    });
    l1.present();
      this._data1.getCategoriesById(this.fk_user_email).subscribe(


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
    )};


    onClick(item)
  {
   
      this.storage.set('id',item.cat_id);
       this.storage.set('na',item.cat_name);
         this.storage.set('img',item.cicon_image);

        
    this.navCtrl.pop();
  }
}
