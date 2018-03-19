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
    this.fk_user_email=localStorage.getItem('name');
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
    


    onClick(item)
  {
   
      localStorage.setItem('id',item.cat_id);
      localStorage.setItem('na',item.cat_name);
      localStorage.setItem('img',item.cicon_image);

        
    this.navCtrl.pop();
  }
}
