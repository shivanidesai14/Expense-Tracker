import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Notes } from "../../shared/notes";
import { NotesdbProvider} from "../../providers/notesdb/notesdb";
import { NewnotePage } from "../newnote/newnote";
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddnewnotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnewnote',
  templateUrl: 'addnewnote.html',
})
export class AddnewnotePage {
notes_id:number;
fk_user_email:string="";
notes_desc:string;
notes_date:string=new Date().toDateString();

dt:any=new Date().getDate();
x:any=new Date().getMonth();
y:any=new Date().getFullYear();


finalDate:any;

colour_name:string="white";
  constructor(public storage:Storage,public _data:NotesdbProvider,public lo:LoadingController,public to:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewnotePage');
    if(this.x==1 || this.x==2 || this.x==3 || this.x==4 || this.x==5 || this.x==6 || this.x==7 || this.x==8 || this.x== 9 || this.x==10 || this.x==11)
  {
    this.x=this.x+1;
  }
  else{
    this.x=1;
  }
  }
   
   onAddNotes()
  {
    if(this.x==1 || this.x==2 || this.x==3 || this.x==4 || this.x==5 || this.x==6 || this.x==7 || this.x==8 || this.x== 9)
    {
      this.finalDate=this.y+"-"+0+this.x+"-"+this.dt;
    }
    else
    {
      this.finalDate=this.y+"-"+this.x+"-"+this.dt;
    }
   
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
      this._data.addNotes(new Notes(this.notes_id,this.fk_user_email,this.notes_desc,this.finalDate,this.colour_name)).subscribe(

          (data:any)=>{
            t1.present();
            this.navCtrl.push(NewnotePage);
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
