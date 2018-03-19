import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController,PopoverController,ActionSheetController,Platform} from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { Notes } from "../../shared/notes";
import { NotesdbProvider } from "../../providers/notesdb/notesdb";
import { PopoverNotePage } from "../popover-note/popover-note";
import { PopoverNote1pagePage } from "../popover-note1page/popover-note1page";
import { EditnotesPage } from "../editnotes/editnotes";
import { PopoverMenuPage } from "../popover-menu/popover-menu";

/**
 * Generated class for the NewnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newnote',
  templateUrl: 'newnote.html',
})
export class NewnotePage {

  constructor(public storage:Storage,public popoverCtrl: PopoverController,public load:LoadingController,
    public to:ToastController ,public _data:NotesdbProvider,public navCtrl: NavController, public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController,private socialSharing: SocialSharing,public platform: Platform) {
  }
 arr:Notes[]=[];
 arr1:Notes[]=[];
fk_user_email:string='';
 txtsearch:string="";
 cflag:any;
 color:string;
 flag:number=0;
  ionViewDidLoad() {

    console.log('ionViewDidLoad NewnotePage');
   
      this.cflag=localStorage.getItem('colorflag');
      localStorage.setItem('colorflag','null');
      if(this.cflag>0)
      {
        
          this.color=localStorage.getItem('colorname');
          localStorage.setItem('colorname','null');
          this.fk_user_email=localStorage.getItem('name');

            let item=new Notes(0,this.fk_user_email,'','',this.color);

          let l1=this.load.create({
      
            spinner:"hide",
            content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
            cssClass:"loader",
            duration:2000
        });
        l1.present();
          this._data.getNoteByColor(item).subscribe(
      
              (data:Notes[])=>{       
                this.arr=data;
                if(this.arr.length>0)
                {
                  this.flag=1;
                }
              },
              function(e)
              {
                alert(e);
              },
              function()
              {
                l1.dismiss();
              }
      
          );
         
       
       
        
      }
      else
      {
      
          this.fk_user_email=localStorage.getItem('name');
      
         
        
       let l1=this.load.create({
      
        
        spinner:"hide",
        content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
        cssClass:"loader",
        duration:2000
        });
        l1.present();
          this._data.getNotesById(this.fk_user_email).subscribe(
      
              (data:Notes[])=>{
               
                this.arr=data;
                this.flag=1;
              },
              function(e)
              {
                alert(e);
              },
              function()
              {
                l1.dismiss();
              }
      
          );
          
      }
    
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
  onclick()
  {
    this.navCtrl.push(AddnewnotePage);
  }

  onDel(item)
{
   let t1=this.to.create({
      message:"Deleted..",
      duration:3000
   });
   let l1=this.load.create({
      content:"deleting..."
   });
   l1.present();
   this._data.deleteNotes(item).subscribe(
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
search()
{
  if(this.txtsearch!='')
  {
    this.arr=this.arr.filter((x)=>x.colour_name.startsWith(this.txtsearch))
  }
  else
  {
    this.arr=this.arr1;
  }
}
openPopover(myEvent,id1:any) {
  localStorage.setItem('noteid',id1);
    let popover = this.popoverCtrl.create(PopoverNotePage);
    popover.present({
      ev: myEvent
    });
  }

  openPopover1(myEvent) {
  
    let popover = this.popoverCtrl.create(PopoverNote1pagePage);
    popover.present({
      ev: myEvent
    });
  }

  onEditNote(item)
  {
    this.storage.set('notes_desc',this.arr);
      this.navCtrl.push(EditnotesPage,{
        id : item.notes_id,
        notes_desc:item.notes_desc
      });
  }
   openMenu(item:string) {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Twitter',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            this.otherShare(item);
            
          }
        },
        {
          text: 'Whatsapp',
          icon: !this.platform.is('ios') ? 'logo-whatsapp' : null,
          handler: () => {
           this.whatsappShare(item);
          }
        },
        {
          text: 'Email',
          icon: !this.platform.is('ios') ? 'mail' : null,
          handler: () => {
            this.emailShare(item);
          }
        },
        {
          text: 'Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
           this.facebookShare(item);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', 
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            this.navCtrl.push(NewnotePage);
          }
        }
      ]
    });
    actionSheet.present();
  }
  emailShare(item){
    this.socialSharing.shareViaEmail('Hello', 'testing', ['exptracker8@gmail.com']).then(() => {
      
    }).catch(() => {
      
    });
  }
  whatsappShare(item){
  
    this.socialSharing.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  item /* url */)
     
  }
  facebookShare(item){
    this.socialSharing.shareViaFacebook("Message via FaceBook",null /*Image*/,item)
    
  }
 
  otherShare(item){
    this.socialSharing.share("Genral message",null/*Subject*/,null/*File*/,item);
   
  }
}
