import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Reminder } from "../../shared/reminder";
import { ReminderdbProvider} from "../../providers/reminderdb/reminderdb";
import { ReminderPage } from "../reminder/reminder";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-reminder',
  templateUrl: 'add-reminder.html',
})
export class AddReminderPage {
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  rem_title:string="";
  rem_desc:string="";
  fk_user_email:string="";
  rem_id:number;
  arr:Reminder[]=[];
  constructor(public storage:Storage,public _data:ReminderdbProvider,public lo:LoadingController,public to:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }
  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

  }

  oneReminderAdd()
  {
    let t2=this.to.create({
      message:"Fields Must Not be empty..",
      duration:3000,
      position:"bottom"
    });
    if(this.rem_title=="" || this.event.finalDate=="")
    {
        t2.present();
    }
    else
    {
      this.fk_user_email=localStorage.getItem('name');
      let l1=this.lo.create({
        content:"loading"
      });
      l1.present();
      let t1=this.to.create({
        message:"Added..",
        duration:3000,
        position:"bottom"
      });
      this._data.addReminder(new Reminder(this.rem_id,this.fk_user_email,this.event.finalDate,this.rem_title,this.rem_desc)).subscribe(

          (data:any)=>{
            t1.present();
            this.navCtrl.push(ReminderPage);
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
}
