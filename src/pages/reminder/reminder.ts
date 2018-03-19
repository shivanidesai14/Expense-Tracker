import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController,PopoverController,ActionSheetController,Platform} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ReminderdbProvider } from "../../providers/reminderdb/reminderdb";
import { Reminder } from "../../shared/reminder";
import { AddReminderPage } from '../add-reminder/add-reminder';
import { EditreminderPage } from "../editreminder/editreminder";
import { PopoverMenuPage } from "../popover-menu/popover-menu";
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
 
  constructor(public storage:Storage,public popoverCtrl: PopoverController,public load:LoadingController,
    public to:ToastController ,public _data:ReminderdbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
  fk_user_email:string="";
  arr:Reminder[]=[];
  arr1:Reminder[]=[];
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
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
      duration:3000
   });
   let l1=this.load.create({
      content:"deleting..."
   });
   l1.present();
   this._data.deleteReminder(item).subscribe(
      (data:any)=>{
        t1.present();
        this.arr.splice(this.arr.indexOf(item),1);
      },
      function(err)
      {
        alert(err);
      },
      function()
      {
        l1.dismiss();
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
