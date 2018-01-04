import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { SelectcatPage } from "../selectcat/selectcat";
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { Storage } from '@ionic/storage';
import { SpendsPage } from "../spends/spends";
import { SpendsNotePage } from "../spends-note/spends-note";

/**
 * Generated class for the OnetimePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-onetime',
  templateUrl: 'onetime.html',
})
export class OnetimePage {
  dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
expense_amt:number;
expense_id:number;
fk_user_email:string='';
fk_scat_id:number;
colour_name:string="white";
spends_notes:string='';
msg:string="this is one time exp";
exp_note:string=this.msg;
sub_cat_name:string='';
icon_image:string='';
flag:boolean=false;
no:number=1;
spend: FormGroup;

  constructor(public storage:Storage,public _data:SpendsdbProvider,
  public lo:LoadingController,public to:ToastController,
  public navCtrl: NavController, public navParams: NavParams) {
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
 ngOnInit() {

this.spend = new FormGroup({
amt: new FormControl('', [Validators.required]),

});

}
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad OnetimePage');
   
     
        this.storage.set('img','');
         this.storage.set('na','');
         
      
        if(this.icon_image=='')
         {
            this.icon_image='../assets/userimgs/sign-question-icon.png';
         }
        
  }
   public event = {
       finalDate:this.dt+"-"+this.x+"-"+this.y,
   month: '2017-01-01',
   
  }
  oneTimeSpendAdd()
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

  onetimeNote()
  {
      this.navCtrl.push(SpendsNotePage);
  }
   onClickCategory()
  {
    this.navCtrl.push(SelectcatPage,{

        num : 1
    });
  }
   

}
