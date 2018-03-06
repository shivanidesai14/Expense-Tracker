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
 cnt:number=0;

  a: number = 0.259;
  ab: number = 0;
  dt: any = new Date().getDate();

  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  clr1: string = "#1976d2";
  clr2: string = "#1976d2";
  clr3: string = "#1976d2";
  clr4: string = "#1976d2";
  clr5: string = "#1976d2";
  clr6: string = "grey";
  clr7: string = "grey";
 
  expense_id: number;
  fk_user_email: string = '';
  fk_scat_id: number;
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

    this.storage.get('na').then((val) => {
      console.log(val);
      this.sub_cat_name = val;
    });
    this.storage.get('img').then((val) => {
      console.log(val);
      this.icon_image = val;
    });
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
    this.storage.set('img', this.url);
    this.storage.set('na', '');
    this.navBar.backButtonClick = () => {
      this.navCtrl.push(SpendsPage);
  };
 
  }
  recurringNote() {
    this.navCtrl.push(AddnewnotePage);
  }
  onclickM() {

    if (this.clr1 == "#1976d2") {
      this.clr1 = "grey";
      this.mon = "";
    }
    else {
      this.clr1 = "#1976d2";
      this.mon = "Mon";



    }

  }
  onclickTu() {
    if (this.clr2 == "#1976d2") {
      this.clr2 = "grey";
      this.tue = "";
    }
    else {
      this.clr2 = "#1976d2";
      this.tue = "Tue";

    }

  }
  onclickW() {
    if (this.clr3 == "#1976d2") {
      this.clr3 = "grey";
      this.wed = "";
    }
    else {
      this.clr3 = "#1976d2";
      this.wed = "Wed";

    }




  }
  onclickTh() {
    if (this.clr4 == "#1976d2") {
      this.clr4 = "grey";
      this.thu = "";
    }
    else {
      this.clr4 = "#1976d2";
      this.thu = "Thu"

    }
  }

  onclickF() {
    if (this.clr5 == "#1976d2") {
      this.clr5 = "grey";
      this.fri = "";
    }
    else {
      this.clr5 = "#1976d2";
      this.fri = "Fri"

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
      alert(this.sun)
    }
  }
   hello:string;
  Recurringadd() {
    this.date = this.event.finalDate.substr(8, 11);
    //alert(this.date);

    this.mo = this.event.finalDate.substr(5, 8);
    this.month = this.mo.substr(0, 2);


    this.tmp_mo = this.event.finalDate.substr(5, 8);
    this.tmp_mom = this.tmp_mo.substr(0, 2);
    this.tmp_mom=this.tmp_mom-1;
    

    this.yr = this.event.finalDate.substr(0, 4);
    //alert(this.yr);




    this.tmp = new Date(this.yr, this.month, 0);
    //alert(this.tmp);


    this.year = this.tmp + "";
    this.day = this.year.substr(0, 3);
   // alert(this.day);
    this.year1 = this.year.substr(8, 9);
    this.year2 = this.year1.substr(0, 2);
    //alert(this.year2);



    /*this.sday=this.days.substr(8,9);
    this.sdayfinal=this.sday.substr(0,2);
    alert(this.sdayfinal);*/

    for (this.i = this.date; this.i <= this.year2; this.i++) {
      //alert(this.i)
      //alert(this.month);
      
      this.newdate = new Date(this.yr,this.tmp_mom, this.i);

      //alert(this.newdate);
      this.days = this.newdate + "";
      this.sdayname = this.days.substr(0, 3);
      //alert(this.sdayname);
      if (this.sdayname == this.mon)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.tue)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.wed)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.thu)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.fri)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.sat)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      if (this.sdayname == this.sun)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      this.sdayname="";
            /*if (this.sdayname == this.mon)
       {
        
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
        //alert(this.exp_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.mon) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
      }
      else if (this.sdayname == this.mon || this.sdayname == this.wed) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.mon || this.sdayname == this.thu) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.mon || this.sdayname == this.fri) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.mon || this.sdayname == this.sat) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.mon || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.wed) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.thu) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.fri) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.sat) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      }
      else if (this.sdayname == this.tue || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.wed || this.sdayname == this.thu) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.wed || this.sdayname == this.fri) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.wed || this.sdayname == this.sat) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.wed || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.thu || this.sdayname == this.fri) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.thu || this.sdayname == this.sat) 
      {

          this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.thu || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.fri || this.sdayname == this.sat) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.fri || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }
      else if (this.sdayname == this.sat || this.sdayname == this.sun) 
      {

        this.exp_amt = (+this.exp_amt) + (+this.expense_amt); 
      }

     else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
     }
     else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.thu)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
     }
     else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.fri)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
     }
     else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.sat)
     {
      this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
     
    }
    else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.sun)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
     }
     else if (this.sdayname == this.mon || this.sdayname== this.thu || this.sdayname==this.wed)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
     }
     else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.wed)
     {
      this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
     
    }
    else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.wed)
    {
     this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
    
   }
   else if (this.sdayname == this.mon || this.sdayname== this.sun || this.sdayname==this.wed)
   {
    this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
   
    }
    else if (this.sdayname == this.mon || this.sdayname== this.thu || this.sdayname==this.fri)
    {
     this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
    
     }
     else if (this.sdayname == this.mon || this.sdayname== this.thu || this.sdayname==this.sat)
     {
      this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
     
      }
      else if (this.sdayname == this.mon || this.sdayname== this.thu || this.sdayname==this.sun)
      {
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
       }
       else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.tue)
       {
        this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
       
        }
        else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.thu)
        {
         this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
        
         }
         else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.sat)
         {
          this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
         
          }
          else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.sat)
          {
           this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
          
          }
          else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.tue)
          {
           this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
          
           }
           else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.wed)
           {
            this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
           
            }
            else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.thu)
            {
             this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
            
             }
             else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.fri)
             {
              this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
             
              }
              else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.sun)
              {
               this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
              
               }
              

    else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.thu)
    {
     this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
    
   }
   else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.fri)
   {
    this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
   
  }
  else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.sat)
  {
   this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
  
 }
 else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.sun)
 {
  this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
 
}
else if (this.sdayname == this.tue || this.sdayname== this.thu || this.sdayname==this.fri)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.tue || this.sdayname== this.thu || this.sdayname==this.sat)
{
this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.tue || this.sdayname== this.thu || this.sdayname==this.sun)
{
this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.tue || this.sdayname== this.fri || this.sdayname==this.sat)
{
this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.tue || this.sdayname== this.fri || this.sdayname==this.sun)
{
this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.tue || this.sdayname== this.sat || this.sdayname==this.sun)
{
this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.fri)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.sat)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.sun)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.wed || this.sdayname== this.fri || this.sdayname==this.sat)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.wed || this.sdayname== this.fri || this.sdayname==this.sun)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.thu || this.sdayname== this.fri || this.sdayname==this.sat)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.fri || this.sdayname== this.thu || this.sdayname==this.sun)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.thu || this.sdayname== this.sat || this.sdayname==this.sun)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.fri || this.sdayname== this.sat || this.sdayname==this.sun)
{
 this.exp_amt = (+this.exp_amt) + (+this.expense_amt);

}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.fri)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.fri || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.sat || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.sun || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.fri || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.sat || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.sun || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.fri || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sat || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sun || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.fri || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.fri || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.thu || this.sdayname== this.fri || this.sdayname==this.sat || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.fri)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.thu || this.sdayname==this.fri || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.tue || this.sdayname== this.wed || this.sdayname==this.thu || this.sdayname==this.fri || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.fri || this.sdayname==this.sat || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.thu || this.sdayname== this.fri || this.sdayname==this.sat || this.sdayname==this.sun || this.sdayname==this.mon)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.fri || this.sdayname== this.sat || this.sdayname==this.sun || this.sdayname==this.mon || this.sdayname==this.tue)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sat || this.sdayname== this.sun || this.sdayname==this.mon || this.sdayname==this.tue || this.sdayname==this.wed)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sun || this.sdayname== this.mon || this.sdayname==this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.fri || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.mon || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.fri || this.sdayname==this.sun)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sun || this.sdayname== this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.fri || this.sdayname==this.sat)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.wed || this.sdayname== this.thu || this.sdayname==this.fri || this.sdayname==this.sat || this.sdayname==this.sun || this.sdayname==this.mon)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.thu || this.sdayname== this.fri || this.sdayname==this.sat || this.sdayname==this.sun || this.sdayname==this.mon || this.sdayname==this.tue)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.fri || this.sdayname== this.sat || this.sdayname==this.sun || this.sdayname==this.mon || this.sdayname==this.tue || this.sdayname==this.wed)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sat || this.sdayname== this.sun || this.sdayname==this.mon || this.sdayname==this.tue || this.sdayname==this.wed || this.sdayname==this.thu)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sun || this.sdayname== this.mon || this.sdayname==this.tue || this.sdayname==this.wed || this.sdayname==this.thu || this.sdayname==this.fri)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if (this.sdayname == this.sun || this.sdayname == this.tue || this.sdayname == this.wed || this.sdayname == this.thu || this.sdayname == this.fri || this.sdayname == this.sat || this.sdayname == this.mon)
{
       this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
      
}
else if(this.sdayname == this.sat || this.sdayname==this.sun)
{
  this.exp_amt = (+this.exp_amt) + (+this.expense_amt);
}*/
    }
  
    this.exp_note = this.tmp_msg + " " + this.spends_notes;
    let t1 = this.to.create({
      message: "Field must not be empty",
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
    else {

      this.storage.get('id').then((val) => {
        console.log(val);
        this.fk_scat_id = val;
        this.storage.get('name').then((val) => {
          console.log(val);
          this.fk_user_email = val;


          let l1 = this.lo.create({
            content: "loading"
          });
          l1.present();
          let t1 = this.to.create({
            message: "Added..",
            duration: 3000,
            position: "bottom"
          });
          this._data.addSpends(new Spends(this.expense_id, this.fk_user_email, this.fk_scat_id, this.event.finalDate, this.exp_amt, this.colour_name, this.exp_note)).subscribe(

            (data: any) => {
              t1.present();
              this.navCtrl.push(SpendsPage);
            },
            function (e) {
              alert(e);
            },
            function () {
              l1.dismiss();
            }
          )
        });
      });
    }










  }
  onClickCategory() {
    this.navCtrl.push(SelectcatPage);
  }

}