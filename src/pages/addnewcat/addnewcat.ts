import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,ViewController,Navbar,LoadingController,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { category } from "../../shared/category";
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";
import { SelectcatPage } from "../selectcat/selectcat";
import { SelectParCatPage } from "../select-par-cat/select-par-cat";
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
  cicon_image:string="../assets/icon/Letter c.ico";
  paicon_image:string="../assets/icon/Letter P.ico";
  fk_user_email:string="";

  pcat_name:string="";
  picon_image:string="";

  sub_cat_id:number;
  sub_cat_name:string="";
  fk_cat_id:number;
  icon_image:string="";
  s_fk_user_email:string="";
  url:string='../assets/userimgs/sign-question-icon.png';
  constructor(public storage:Storage,public _data:CategorydbProvider,public _data1:SubcategorydbProvider,
    public to:ToastController,public lo:LoadingController,public navCtrl: NavController,
     public navParams: NavParams,
    public viewctrl:ViewController) {
  }

  ionViewDidLoad() {

    this.storage.set('img',this.url);
    this.storage.set('na','');
    console.log('ionViewDidLoad AddnewcatPage');

    

  }
  ionViewDidEnter() {
   
    this.storage.get('na').then((val) => {
           console.log( val);
           this.pcat_name=val;
        });
          this.storage.get('img').then((val) => {
           console.log( val);
           this.picon_image=val;
        });
}
  parCat()
  {
    this.navCtrl.push(SelectParCatPage);
  }
  oneCatAdd()
  {
    this.storage.get('name').then((val)=>{
      console.log( val);
      this.fk_user_email=val;
    if(this.pcat_name=="")
    {
   
  
      
        let l1=this.lo.create({
          content:"loading"
        });
        l1.present();
        let t1=this.to.create({
          message:"Added..",
          duration:3000,
          position:"bottom"
        });
        this._data.addCategories(new category(this.cat_id,this.cat_name,this.paicon_image,this.fk_user_email)).subscribe(
  
            (data:any)=>{
              t1.present();
              this.viewctrl.dismiss(data);
              //this.navCtrl.push(SelectcatPage);
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
          

  }
  else{
   
  
      this.storage.get('id').then((val)=>{
        console.log( val);
        this.fk_cat_id=val;
    
        let l1=this.lo.create({
          content:"loading"
        });
        l1.present();
        let t1=this.to.create({
          message:"Added..",
          duration:3000,
          position:"bottom"
        });
        this._data1.addScategories(new subcategory(this.sub_cat_id,this.cat_name,this.fk_cat_id,this.cicon_image,this.fk_user_email)).subscribe(
  
            (data:any)=>{
              t1.present();
              this.viewctrl.dismiss(data);
              //this.navCtrl.push(SelectcatPage);
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
  );
}

} 