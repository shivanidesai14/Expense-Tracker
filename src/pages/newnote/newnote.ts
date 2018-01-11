import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController,PopoverController,ActionSheetController,Platform} from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { Notes } from "../../shared/notes";
import { NotesdbProvider } from "../../providers/notesdb/notesdb";
import { PopoverNotePage } from "../popover-note/popover-note";
import { PopoverNote1pagePage } from "../popover-note1page/popover-note1page";
import { EditnotesPage } from "../editnotes/editnotes";
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';
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
 cflag:number;
 color:string;
 flag:number=0;
  ionViewDidLoad() {

    console.log('ionViewDidLoad NewnotePage');
    this.storage.get('colorflag').then((val)=>{
      console.log(val);
      this.cflag=val;
    //  alert(this.cflag);
      this.storage.set('colorflag','null');
      if(this.cflag>0)
      {
        //alert('welcome to if');
        this.storage.get('colorname').then((val)=>{
          console.log( val);
          this.color=val;
          this.storage.set('colorname','null');
          this.storage.get('name').then((val)=>{
            console.log( val);
            this.fk_user_email=val;

            let item=new Notes(0,this.fk_user_email,'','',this.color);

          let l1=this.load.create({
      
          content:"Loading..."
        });
        l1.present();
          this._data.getNoteByColor(item).subscribe(
      
              (data:Notes[])=>{
       // alert('successful');       
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
          });
   
          })  
        
       
       
        
      }
      else
      {
      //  alert('welcome to else');
        this.storage.get('name').then((val)=>{
          console.log( val);
          this.fk_user_email=val;
      
         
        
       let l1=this.load.create({
      
          content:"Loading..."
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
          });
      }
    }
  )
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
  this.storage.set('noteid',id1);
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
   openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            this.otherShare();
            
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
           this.whatsappShare();
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            this.emailShare();
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
           this.facebookShare();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            actionSheet.dismiss();
          }
        }
      ]
    });
    actionSheet.present();
  }
  emailShare(){
    this.socialSharing.shareViaEmail('Hello', 'testing', ['jinalshah999@gmail.com']).then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  whatsappShare(){
    this.socialSharing.shareViaWhatsApp("Message via WhatsApp", null /*Image*/,  "https://shreejashah.wordpress.com/" /* url */)
     
  }
  facebookShare(){
    this.socialSharing.shareViaFacebook("Message via Twitter",null /*Image*/,"https://pointdeveloper.com")
    
  }
 
  otherShare(){
    this.socialSharing.share("Genral message",null/*Subject*/,null/*File*/,"https://shreejashah.wordprss.com");
   
  }
}
