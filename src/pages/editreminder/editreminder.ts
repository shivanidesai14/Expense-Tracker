import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Reminder } from "../../shared/reminder";
import { ReminderdbProvider } from "../../providers/reminderdb/reminderdb";
import { ReminderPage } from "../reminder/reminder";

/**
 * Generated class for the EditreminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editreminder',
  templateUrl: 'editreminder.html',
})
export class EditreminderPage {

  constructor(public _data:ReminderdbProvider, public lo: LoadingController,
  public to: ToastController, public storage: Storage,
   public navCtrl: NavController, public navParams: NavParams) {
  }
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
id:number;
rem_date:string="";
rem_title:string="";
rem_desc:string="";
arr:Reminder[]=[];
rrem_date:string="";
rrem_title:string="";
rrem_desc:string="";
rfk_user_email:string="";
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditreminderPage');
    this.id=this.navParams.get('id');
    this.rem_title=this.navParams.get('title');
    this.rem_date=this.navParams.get('date');
    this.rem_desc=this.navParams.get('desc');
  }


  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

    // month: '2017-01-01',

  }
  onEditReminder(item)
  {
    
    this._data.getReminder(this.id).subscribe(
      
      (data:Reminder[])=>{
      
         this.arr=data;
        
         this.rfk_user_email=this.arr[0].fk_user_email;
     
        
        let item=new Reminder(this.id,this.rfk_user_email,this.event.finalDate,this.rem_title,this.rem_desc);
        this._data.updateReminder(item).subscribe(

          (data:Reminder[])=>{
         
           this.navCtrl.push(ReminderPage);
       }
  
        )
       }
    )

  
  }
}
