import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,Navbar,LoadingController,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { category } from "../../shared/category";
import { SelectcatPage } from "../selectcat/selectcat";
import { CategorydbProvider } from "../../providers/categorydb/categorydb";



/**
 * Generated class for the AddnewcatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnewcat',
  templateUrl: 'addnewcat.html',
})
export class AddnewcatPage {
  cat_name:string="";
  par_cat_name:string="";
  cat_id:number;
  cicon_image:string="../assets/icon/breakfast.ico";
  fk_user_email:string="";
  constructor(public storage:Storage,public _data:CategorydbProvider,public to:ToastController,public lo:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewcatPage');

    

  }
  oneCatAdd()
  {
    if(this.par_cat_name=="")
    {
    this.storage.get('name').then((val)=>{
      console.log( val);
      this.fk_user_email=val;
  
        let l1=this.lo.create({
          content:"loading"
        });
        l1.present();
        let t1=this.to.create({
          message:"Added..",
          duration:3000,
          position:"bottom"
        });
        this._data.addCategories(new category(this.cat_id,this.cat_name,this.cicon_image,this.fk_user_email)).subscribe(
  
            (data:any)=>{
              t1.present();
              this.navCtrl.push(SelectcatPage);
            },
            function(e)
            {
              alert(e);
            },
            function()
            {
              l1.dismiss();
            }
        )
           });

  }
}
}
