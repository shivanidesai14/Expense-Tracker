import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Navbar,LoadingController,ToastController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
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
  @ViewChild('navbar') navBar: Navbar;
  dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();
expense_amt:number=0;
expense_id:number;
fk_user_email:string='';
fk_scat_id:any;
colour_name:string="white";
spends_notes:string='';
tmp_msg:string="this is one time exp";
exp_note:string;
sub_cat_name:string='';
icon_image:string='';
flag:boolean=false;
no:number=1;
spend: FormGroup;
fl:boolean=false;
tmp_month:any;
month:any;
year:any;
url:string='../assets/userimgs/sign-question-icon.png';

  constructor(public storage:Storage,public _data:SpendsdbProvider,
  public lo:LoadingController,public to:ToastController,
  public navCtrl: NavController, public navParams: NavParams) {
  }
ionViewDidEnter() {
   
            this.sub_cat_name=localStorage.getItem('na');
        
         
            this.icon_image=localStorage.getItem('img');
         
}
 
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad OnetimePage');
   
     
        localStorage.setItem('img',this.url);
        localStorage.setItem('na','');
         this.navBar.backButtonClick = () => {
          this.navCtrl.push(SpendsPage);
      };
}
   public event = {
       finalDate:this.dt+"-"+this.x+"-"+this.y,
   month: '2017-01-01',
   
  }
  onCLickT()
  {
    this.navCtrl.push(SpendsPage);
  }
  oneTimeSpendAdd()
  {
     this.exp_note=this.tmp_msg +" "+ this.spends_notes;
      let t1=this.to.create({
        message:"Field must not be empty",
        duration:4000,
        position:"bottom"
      });
     
    
    
     if(this.event.finalDate=="")
     {
       t1.present();
     }
     else if(this.sub_cat_name=="")
     {
       t1.present();
     }
     else if(this.expense_amt==0)
     {
          t1.present();
     }
     else
     {
      this.tmp_month = this.event.finalDate.substr(5, 8);
      this.month = this.tmp_month.substr(0, 2);

      this.year = this.event.finalDate.substr(0, 4);
            this.fk_scat_id=localStorage.getItem('id');
            this.fk_user_email=localStorage.getItem('name');
    

      let l1=this.lo.create({
        content:"loading",
        
      });
      l1.present();
      let t1=this.to.create({
        message:"Added..",
        duration:3000,
        position:"bottom"
      });
     
      this._data.addSpends(new Spends(this.expense_id,this.fk_user_email,this.fk_scat_id,this.event.finalDate,this.expense_amt,this.colour_name,this.exp_note,this.month,this.year)).subscribe(

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
