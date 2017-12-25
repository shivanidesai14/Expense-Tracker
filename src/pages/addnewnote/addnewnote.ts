import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Notes } from "../../shared/notes";
import { NotesdbProvider} from "../../providers/notesdb/notesdb";
import { NewnotePage } from "../newnote/newnote";

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
fk_user_email:string="shivanidesai402@gmail.com";
notes_desc:string;
notes_date:string=new Date().toDateString();
colour_name:string="white";
  constructor(public _data:NotesdbProvider,public lo:LoadingController,public to:ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewnotePage');
  }
   onAddNotes()
  {
      let l1=this.lo.create({
        content:"loading"
      });
      l1.present();
      let t1=this.to.create({
        message:"Added..",
        duration:3000,
        position:"bottom"
      });
      this._data.addNotes(new Notes(this.notes_id,this.fk_user_email,this.notes_desc,this.notes_date,this.colour_name)).subscribe(

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
            l1.dismiss();
          }
      )
  }
}
