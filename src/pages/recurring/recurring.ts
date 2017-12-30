import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public event = {
     finalDate:this.y+"-"+this.x+"-"+this.dt,
  // month: '2017-01-01',
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringPage');
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