import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CurrencyPipe } from '@angular/common';
import { Platform } from 'ionic-angular';
import { AddnewnotePage } from '../addnewnote/addnewnote';
import { SelectcatPage } from "../selectcat/selectcat";
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { SpendsPage } from "../spends/spends";
import { EdocumentPage } from "../edocument/edocument";
/**
 * Generated class for the RecurringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recurring',
  templateUrl: 'recurring.html',
})
export class RecurringPage {
  @ViewChild('navbar') navBar: Navbar;
  expense_amt:number = 0;
  exp_amt:number = 0;
 
  dt: any = new Date().getDate();

  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  clr1: string = "grey";
  clr2: string = "grey";
  clr3: string = "grey";
  clr4: string = "grey";
  clr5: string = "grey";
  clr6: string = "grey";
  clr7: string = "grey";
 
  expense_id: number;
  fk_user_email: string = '';
  fk_scat_id: any;
  colour_name: string = "white";
  date: any;
  mo: any;
  month: any;

  tmp_mo:any;
  tmp_mom:any;
  year: string;
  yr: any;
  day: string;
  days: string;
  tmp: any;//=new Date(this.y, this.x+1, 0);
  tmp1: any;
  year1: string = "";
  year2: string = "";
  mon: string = "";
  tue: string = "";
  wed: string = "";
  thu: string = "";
  fri: string = "";
  sat: string = "";
  sun: string = "";
  sday: string;
  sdayname: any;
  sdayfinal: string;
monthh:any;
  i: any;
  newdate: any;

  spends_notes: string = "";
  tmp_msg: string = 'this is demo for Recurring expense';

  exp_note: string;
  
  sub_cat_name: string = "";
  icon_image: string = "";
  flag: boolean = false;
  no: number = 1;

  arr: string[] = [];
  url: string = '../assets/userimgs/sign-question-icon.png';
  ionViewDidEnter() {

      this.sub_cat_name = localStorage.getItem('na');
  
      this.icon_image = localStorage.getItem('img');
    
  }

  constructor(public lo: LoadingController, public to: ToastController,
    public navCtrl: NavController, public storage: Storage,
    public _data: SpendsdbProvider, public navParams: NavParams) {
  }
  public event = {
    finalDate: this.dt + "-" + this.x + "-" + this.y,


    // month: '2017-01-01',

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringPage');
    localStorage.setItem('img', this.url);
    localStorage.setItem('na', '');
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(SpendsPage);
  };
 
  }
  recurringNote() {
    this.navCtrl.push(AddnewnotePage);
  }
  onclickM() {

    if (this.clr1 == "grey") {
      this.clr1 = "#1976d2";
      this.mon = "Mon";
    }
    else {
      this.clr1 = "grey";
      this.mon = "";



    }

  }
  onclickTu() {
    if (this.clr2 == "grey") {
      this.clr2 = "#1976d2";
      this.tue = "Tue";
    }
    else {
      this.clr2 = "grey";
      this.tue = "";

    }

  }
  onclickW() {
    if (this.clr3 == "grey") {
      this.clr3 = "#1976d2";
      this.wed = "Wed";
    }
    else {
      this.clr3 = "grey";
      this.wed = "";

    }




  }
  onclickTh() {
    if (this.clr4 == "grey") {
      this.clr4 = "#1976d2";
      this.thu = "Thu";
    }
    else {
      this.clr4 = "grey";
      this.thu = "";

    }
  }

  onclickF() {
    if (this.clr5 == "grey") {
      this.clr5 = "#1976d2";
      this.fri = "Fri"
    }
    else {
    this.clr5="grey";
    this.fri="";

    }

  }

  onclickSa() {
    if (this.clr6 == "grey") {
      this.clr6 = "#1976d2";
      this.sat = "Sat";
    }
    else {
      this.clr6 = "grey";
      this.sat = "";

    }


  }

  onclickSu() {
    if (this.clr7 == "grey") {
      this.clr7 = "#1976d2";
      this.sun = "Sun";
    }
    else {
      this.clr7 = "grey";
      this.sun = "";

    }
  }
   hello:string;
  Recurringadd() {
    this.date = this.event.finalDate.substr(8, 11);
   

    this.mo = this.event.finalDate.substr(5, 8);
    this.month = this.mo.substr(0, 2);




    this.tmp_mo = this.event.finalDate.substr(5, 8);
    this.tmp_mom = this.tmp_mo.substr(0, 2);
    this.monthh = this.tmp_mo.substr(0, 2);
    this.tmp_mom=this.tmp_mom-1;
    

    this.yr = this.event.finalDate.substr(0, 4);
 




    this.tmp = new Date(this.yr, this.month, 0);
    


    this.year = this.tmp + "";
    this.day = this.year.substr(0, 3);

    this.year1 = this.year.substr(8, 9);
    this.year2 = this.year1.substr(0, 2);

    for (this.i = this.date; this.i <= this.year2; this.i++) {
      
      this.newdate = new Date(this.yr,this.tmp_mom, this.i);
      this.days = this.newdate + "";
      this.sdayname = this.days.substr(0, 3);
      if (this.sdayname == this.mon)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
      }
      if (this.sdayname == this.tue)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
      }
      if (this.sdayname == this.wed)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
     
      }
      if (this.sdayname == this.thu)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
     
      }
      if (this.sdayname == this.fri)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
      }
      if (this.sdayname == this.sat)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
      
      }
      if (this.sdayname == this.sun)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
      }
      this.sdayname="";
          
    }
  
    this.exp_note = this.tmp_msg + " " + this.spends_notes;
    let t1 = this.to.create({
      message: "Field must not be empty",
      duration: 4000,
      position: "bottom"
    });
    let t2 = this.to.create({
      message: "Must select the days",
      duration: 4000,
      position: "bottom"
    });



    if (this.event.finalDate == "") {
      t1.present();
    }
    else if (this.sub_cat_name == "") {
      t1.present();
    }
    else if (this.expense_amt == 0) {
      t1.present();
    }
    else if(this.mon=="" && this.tue=="" && this.wed=="" && this.thu=="" && this.fri=="" && this.sat=="" &&  this.sun=="")
    {
      t2.present();
    }
    else {

        this.fk_scat_id = localStorage.getItem('id');
        this.fk_user_email=localStorage.getItem('name');


          let l1 = this.lo.create({
            spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:500,
          });
          l1.present();
          let t1 = this.to.create({
            message: "Added..",
            duration: 3000,
            position: "bottom"
          });
          this._data.addSpends(new Spends(this.expense_id, this.fk_user_email, this.fk_scat_id, this.event.finalDate, this.exp_amt, this.colour_name, this.exp_note,this.monthh,this.yr)).subscribe(

            (data: any) => {
              t1.present();
           
            },
            function (e) {
              alert(e);
            },
            function () {
             
            }
          )
          this.navCtrl.push(SpendsPage);
    }
 }
  onClickCategory() {
    this.navCtrl.push(SelectcatPage);
  }

}