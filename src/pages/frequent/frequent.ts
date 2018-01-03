import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { SelectcatPage } from "../selectcat/selectcat";
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { Storage } from '@ionic/storage';
import { SpendsPage } from "../spends/spends";

/**
 * Generated class for the FrequentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-frequent',
  templateUrl: 'frequent.html',
})
export class FrequentPage {
 dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
value:number=0;
exp_amt:number;
expense_id:number;
fk_user_email:string='';
fk_scat_id:number;
colour_name:string="white";
exp_note:string='this is demo for frequent expense';
spends_notes:string="";
expense_amt:number;
sub_cat_name:string="";
  constructor(public storage:Storage,public _data:SpendsdbProvider,public lo:LoadingController,public to:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequentPage');
      this.fk_scat_id=this.navParams.get('id');
    this.sub_cat_name=this.navParams.get('name');
  }
   public event = {

      finalDate:this.y+"-"+this.x+"-"+this.dt,
  // month: '2017-01-01',
   
}
oncheck()
{
  this.expense_amt=this.exp_amt*1;
  
}
oncheck1()
{
   this.expense_amt=this.exp_amt*2;
  
}

 onFrequentAdd()
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
      this._data.addSpends(new Spends(this.expense_id,this.fk_user_email,this.fk_scat_id,this.event.finalDate,this.expense_amt,this.colour_name,this.exp_note)).subscribe(

          (data:any)=>{
            t1.present();
            this.navCtrl.push(SpendsPage);
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


  frequentNotes()
  {
      this.navCtrl.push(AddnewnotePage);
  }
   onClickCategory()
  {
    this.navCtrl.push(SelectcatPage,{

          num : 2
    });
  }

}
