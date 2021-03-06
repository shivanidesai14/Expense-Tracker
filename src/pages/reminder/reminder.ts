import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController,PopoverController,ActionSheetController,Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ReminderdbProvider } from "../../providers/reminderdb/reminderdb";
import { Reminder } from "../../shared/reminder";
import { AddReminderPage } from '../add-reminder/add-reminder';
import { EditreminderPage } from "../editreminder/editreminder";
import { PopoverMenuPage } from "../popover-menu/popover-menu";
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the ReminderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reminder',
  templateUrl: 'reminder.html',
})
export class ReminderPage {
 
  constructor(public storage:Storage,public popoverCtrl: PopoverController,
public load:LoadingController,
    public to:ToastController ,public _data:ReminderdbProvider,
    public navCtrl: NavController, public navParams: NavParams,
    private calendar: Calendar,) {
  }
  fk_user_email:string="";
  arr:Reminder[]=[];
  arr1:Reminder[]=[];
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  location:string="";
  title:string="";
  notes:string="";
  startDate:any;
  endDate:any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReminderPage');
    this.fk_user_email=localStorage.getItem('name');
      let l1 = this.load.create({

        
        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:2000
      });
      l1.present();
      this._data.getRemindersById(this.fk_user_email).subscribe(

        (data: Reminder[]) => {
          this.arr = data;
         
        },
        function (e) {
          alert(e);
        },
        function () {
          l1.dismiss();
        }

      );

      
  }
  
  public event = {
    
    finalDate: this.y + "-" + this.x + "-" + this.dt,

    // month: '2017-01-01',

  }
 
  onclick()
  {
    this.navCtrl.push(AddReminderPage);
  }

  onRemDel(item)
  {
    let t1=this.to.create({
      message:"Deleted..",
      duration:2000
   });
   let l1=this.load.create({
      content:"deleting...",
      duration:300
   });
   l1.present();
   this._data.deleteReminder(item).subscribe(
      (data:any)=>{
        this.title=item.rem_title;
       
        this.notes=item.rem_desc;
        this.startDate=new Date(item.rem_date);
        alert(this.startDate);
        this.endDate=new Date(item.endDate);
        this.calendar.deleteEvent(this.title,this.location,this.notes,this.startDate, this.endDate).then(
          (value: any) => {
            t1.present();
            this.navCtrl.push(ReminderPage);
           
          }
        );
      

        t1.present();
        this.arr.splice(this.arr.indexOf(item),1);
      },
      function(err)
      {
        alert(err);
      },
      function()
      {
        
      }

   );
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
  
  onEditReminder(item)
  {
    
      this.navCtrl.push(EditreminderPage,{
        id : item.rem_id,
        date : item.rem_date,
        title : item.rem_title,
        desc:item.rem_desc,
      });
  }
}
