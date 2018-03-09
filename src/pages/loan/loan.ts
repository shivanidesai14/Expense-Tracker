import { LoandbProvider } from './../../providers/loandb/loandb';
import { CalculateLoanPage } from "../calculate-loan/calculate-loan";
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { loanclass } from "../../shared/loanclass";
import { Storage } from "@ionic/storage";


/**
 * Generated class for the LoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage()
@Component({
  selector: 'page-loan',
  templateUrl: 'loan.html',
})
export class LoanPage {
  isAndroid: boolean = false;
  arr: loanclass[] = [];

  fk_user_email:string="";
  loan_id: Number;
  loan_amt: Number;
  loan_yrs: Number;
  loan_rate: Number;
  loan_emi: Number=0;
  loan_date: string = new Date().toDateString();

  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  finalDate: any = this.y + "-" + this.x + "-" + this.dt;

  ionViewWillEnter() {

  }
  constructor(public load:LoadingController,public tos:ToastController,public data:LoandbProvider,public storage: Storage, platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoanPage');
  }



  onCalLoan() {
    this.storage.get('name').then((val)=>{
      console.log( val);
      this.fk_user_email=val;
   this.arr[0]=new loanclass(0,this.fk_user_email,this.loan_date,this.loan_amt,this.loan_rate,this.loan_yrs,this.loan_emi);
   //this.navCtrl.push(CalculateLoanPage,{'arr':this.arr});
   /*this.navCtrl.push(CalculateLoanPage,{
        amt : this.loan_amt,
        years : this.loan_yrs,
        rate : this.loan_rate,
        date : this.loan_date
   });*/
   this.storage.set('loandesc', this.arr);
   console.log(this.arr);
  
     let l1=this.load.create({
       content:"Loading"
     });
     l1.present();
     let t1=this.tos.create(
       {
       message:"Added",
       duration:3000,
       position:"bottom"
       }
     );
     this.data.addLoans(new loanclass(this.loan_id,this.fk_user_email,this.loan_date,this.loan_amt,this.loan_rate,this.loan_yrs,this.loan_emi)).subscribe((data:any)=>{
       t1.present();
       this.navCtrl.push(CalculateLoanPage,{
        amt : this.loan_amt,
        years : this.loan_yrs,
        rate : this.loan_rate,
        date : this.loan_date
   });
     }
     ,
   function(e)
 {
   alert(e);
 },
 function()
 {
   l1.dismiss();
 })
    });
   }

    
  }


