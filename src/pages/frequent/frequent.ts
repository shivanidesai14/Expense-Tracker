import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
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
icon_image:string="";
flag:boolean=false;
no:number=1;
spend: FormGroup;
  constructor(public storage:Storage,public _data:SpendsdbProvider,public lo:LoadingController,public to:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit() {

this.spend = new FormGroup({
amt: new FormControl('', [Validators.required]),

});

}
ionViewDidEnter() {
   
     this.storage.get('na').then((val) => {
            console.log( val);
            this.sub_cat_name=val;
         });
           this.storage.get('img').then((val) => {
            console.log( val);
            this.icon_image=val;
         });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad FrequentPage');
      
        this.storage.set('img','');
         this.storage.set('na','');
         
      
        if(this.icon_image=='')
         {
            this.icon_image='../assets/userimgs/sign-question-icon.png';
         }
  }
   public event = {

      finalDate:this.dt+"-"+this.x+"-"+this.y,
  
   
}
oncheck()
{
  this.expense_amt=this.exp_amt*1;
  
}
oncheck1()
{
   this.expense_amt=this.exp_amt*2;
  
}
onCLick(no)
{
  if(this.no==1)
  {
  this.flag=true;
  this.no=0;
}
else
{
  this.flag=false;
  this.no=1;
}
}

 onFrequentAdd()
  {
     
   
      let t1=this.to.create({
        message:"Date must not be empty",
        duration:4000,
        position:"bottom"
      });
      let t2=this.to.create({
        message:"Select category first",
        duration:4000,
        position:"bottom"
      });
      
    
     if(this.event.finalDate=="")
     {
       t1.present();
     }
     else if(this.sub_cat_name=="")
     {
       t2.present();
     }
     else
     {
     this.storage.get('id').then((val) => {
            console.log( val);
            this.fk_scat_id=val;
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
          });
  }
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
