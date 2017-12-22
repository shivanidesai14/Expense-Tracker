import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController,ToastController} from 'ionic-angular';
import { AddnewnotePage } from "../addnewnote/addnewnote";
import { Notes } from "../../shared/notes";
import { NotesdbProvider } from "../../providers/notesdb/notesdb";

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

  constructor(public load:LoadingController,public to:ToastController ,public _data:NotesdbProvider,public navCtrl: NavController, public navParams: NavParams) {
  }
 arr:Notes[]=[];
  ionViewDidLoad() {
   // console.log('ionViewDidLoad NewnotePage');
 let l1=this.load.create({

    content:"Loading..."
  });
  l1.present();
    this._data.getAllNotes().subscribe(

        (data:Notes[])=>{
          this.arr=data;
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
  onclick()
  {
    this.navCtrl.push(AddnewnotePage);
  }
  onDel(item)
{
   let t1=this.to.create({

    message:"Note deleted",
    position:"bottom",
    duration:3000
  });
  t1.present();
  this.arr.splice(this.arr.indexOf(item),1);
}


}
