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
  dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
clr1:string = "grey";
clr2:string = "grey";
clr3:string = "grey";
clr4:string = "grey";
clr5:string = "grey";
clr6:string = "grey";
clr7:string = "grey";
exp_amt:number=0;
expense_id:number;
fk_user_email:string='';
fk_scat_id:number;
colour_name:string="white";

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

  }
  recurringNote()
  {
      this.navCtrl.push(AddnewnotePage);
  }
  onclickM()
  {
    
    if(this.clr1=="grey")
    {
      this.clr1="#1976d2";
    }
    else
    {
       this.clr1= "grey";

    }
    
  }
  onclickTu()
  {
     if(this.clr2=="grey")
    {
      this.clr2="#1976d2";
    }
    else
    {
       this.clr2= "grey";

    }

  }
   onclickW()
  {
     if(this.clr3=="grey")
    {
      this.clr3="#1976d2";
    }
    else
    {
       this.clr3= "grey";

    }

    


  }
    onclickTh()
  {
     if(this.clr4=="grey")
    {
      this.clr4="#1976d2";
    }
    else
    {
       this.clr4= "grey";

    }

}

  onclickF()
  {
     if(this.clr5=="grey")
    {
      this.clr5="#1976d2";
    }
    else
    {
       this.clr5= "grey";

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
  onClickCategory()
  {
    this.navCtrl.push(SelectcatPage);
  }

}