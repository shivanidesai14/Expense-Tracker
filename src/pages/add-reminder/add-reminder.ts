import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Reminder } from "../../shared/reminder";
import { ReminderdbProvider} from "../../providers/reminderdb/reminderdb";
import { ReminderPage } from "../reminder/reminder";
import { Storage } from '@ionic/storage';
import { Calendar } from '@ionic-native/calendar';
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
  title:string="";
  location:string="";
  startDate:any;
  endDate:any;
  notes:string="";
  i:number;
  valuee : number;  
    fk_user_email:string="";
  rem_id:number;
  arr:Reminder[]=[];
  mon:any;
  constructor(public storage:Storage,private calendar: Calendar,
    public _data:ReminderdbProvider,public lo:LoadingController,public to:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReminderPage');
  }
  public event = {
    finalDate: this.y +"/"+this.x+"/"+ this.dt,

  }

  oneReminderAdd()
  {
    this.startDate = new Date(this.event.finalDate);
this.endDate= new Date(this.event.finalDate);
    let t2=this.to.create({
      message:"Fields Must Not be empty..",
      duration:2000,
      position:"bottom"
    });
    if(this.title=="" || this.event.finalDate=="")
    {
        t2.present();
    }
    else
    {

      this.fk_user_email=localStorage.getItem('name');
      let l1=this.lo.create({
        
        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:300,
      });
      l1.present();
      let t1=this.to.create({
        message:"Added..",
        duration:3000,
        position:"bottom"
      });
      this._data.addReminder(new Reminder(this.rem_id,this.fk_user_email,this.event.finalDate,this.title,this.notes)).subscribe(

          (data:any)=>{
            
             this.calendar.createCalendar('MyCalendar').then(
              (msg) => { console.log(msg); },
              (err) => { console.log(err); }
        
            );
            if(this.valuee==1)
            {
              this.calendar.createEvent(this.title, this.location, this.notes, this.startDate, this.endDate).then(
                (value: any) => {
                  t1.present();
                  this.navCtrl.push(ReminderPage);
                 
                }
              );
            }
            else{
                this.mon=(this.event.finalDate.substr(5,2));
                 alert(this.mon);
                this.i=this.mon;
                while(this.i<13)
                {
                  //alert("welcome");
                  this.calendar.createEvent(this.title, this.location, this.notes, this.startDate, this.endDate).then(
                    (value: any) => {
                 
                       
                    }
                  );
                  if(this.i==12){
                    t1.present();
                   this.navCtrl.push(ReminderPage);
                    }    
                 
                  this.x=(+(this.x)+(+(1)));
                  this.event.finalDate=this.y +"/"+this.x+"/"+ this.dt;
                   alert(this.startDate);
                  this.startDate = new Date(this.event.finalDate);
                   this.endDate= new Date(this.event.finalDate);
                   alert(this.startDate);
                   this.i++;
                }
            }
            
        
           
          },
          function(e)
          {
            alert(e);
          },
          function()
          {
            
          }
      )
         
  }
      
  }
}
