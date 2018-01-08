import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { subcategory } from "../../shared/subcategory";
import { SubcategorydbProvider } from "../../providers/subcategorydb/subcategorydb";



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
arr:subcategory[]=[];
cat_id:number;
  constructor(
    public _data2:SubcategorydbProvider,
    public storage:Storage,
    public load:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewCategorySpendsPage');

     this.cat_id=this.navParams.get('id');
     alert(this.cat_id);



      let l1=this.load.create({
    
        content:"Loading..."
      });
      l1.present();
        this._data2.getScategoriesById(this.cat_id).subscribe(
    
            (data2:subcategory[])=>{
              this.arr=data2;
              
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
