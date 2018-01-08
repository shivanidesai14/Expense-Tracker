import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CurrencyPipe } from '@angular/common';
import { Platform } from 'ionic-angular';
import {AddnewnotePage} from '../addnewnote/addnewnote';
import { SelectcatPage } from "../selectcat/selectcat";

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
a: number = 0.259;
ab:number=0;
  dt:any=new Date().getDate();
  
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
clr1:string = "#1976d2";
clr2:string = "#1976d2";
clr3:string = "#1976d2";
clr4:string = "#1976d2";
clr5:string = "#1976d2";
clr6:string = "grey";
clr7:string = "grey";
exp_amt:number=0;
expense_id:number;
fk_user_email:string='';
fk_scat_id:number;
colour_name:string="white";
date:any;
mo:any;
month:any;
year:string;
yr:any;
tmp:any;//=new Date(this.y, this.x+1, 0);
year1:string="";




spends_notes:string="";
tmp_msg:string='this is demo for frequent expense';

exp_note:string;
expense_amt:number=0;
sub_cat_name:string="";
icon_image:string="";
flag:boolean=false;
no:number=1;


url:string='../assets/userimgs/sign-question-icon.png';
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

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
  }
  public event = {
      finalDate:this.dt+"-"+this.x+"-"+this.y,

    
  // month: '2017-01-01',
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringPage');
      this.storage.set('img',this.url);
         this.storage.set('na','');
       // alert(this.tmp);
  }
  recurringNote()
  {
      this.navCtrl.push(AddnewnotePage);
  }
  onclickM()
  {
    
    if(this.clr1=="#1976d2")
    {
      this.clr1="grey";
    }
    else
    {
       this.clr1= "#1976d2";

    }
    
  }
  onclickTu()
  {
      if(this.clr2=="#1976d2")
    {
      this.clr2="grey";
    }
    else
    {
       this.clr2= "#1976d2";

    }

  }
   onclickW()
  {
      if(this.clr3=="#1976d2")
    {
      this.clr3="grey";
    }
    else
    {
       this.clr3= "#1976d2";

    }

    


  }
    onclickTh()
  {
     if(this.clr4=="#1976d2")
    {
      this.clr4="grey";
    }
    else
    {
       this.clr4= "#1976d2";

    }
}

  onclickF()
  {
    if(this.clr5=="#1976d2")
    {
      this.clr5="grey";
    }
    else
    {
       this.clr5= "#1976d2";

    }

}

  onclickSa()
  {
     if(this.clr6=="grey")
    {
      this.clr6="#1976d2";
    }
    else
    {
       this.clr6= "grey";

    }


}

  onclickSu()
  {
     if(this.clr7=="grey")
    {
      this.clr7="#1976d2";
    }
    else
    {
       this.clr7= "grey";

    }
  }
  Recurringadd()
  {
    this.date=this.event.finalDate.substr(8,11);
    alert(this.date);
    this.mo=this.event.finalDate.substr(5,8);
    this.month=this.mo.substr(0,2);
    alert(this.month);

    this.yr=this.event.finalDate.substr(0,4);
    alert(this.yr);

   this.tmp=new Date(this.yr,this.month,0);
    alert(this.tmp);
    
    this.year=this.tmp+"";
    this.year1=this.year.substr(7,10);
    alert(this.year1);

  



       
    
  }
  onClickCategory()
  {
    this.navCtrl.push(SelectcatPage);
  }

}