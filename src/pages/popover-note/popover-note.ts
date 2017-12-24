import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { NewnotePage } from "../newnote/newnote";
import { NotesdbProvider } from "../../providers/notesdb/notesdb";
import { Notes } from "../../shared/notes";
/**
 * Generated class for the PopoverNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-note',
  templateUrl: 'popover-note.html',
})
export class PopoverNotePage {
  arr:Notes[]=[];
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverNotePage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
 /* onClickRed(item)
  {
    if(item.colour_name=="white")
    {
    item.colour_name='red';
    
     }
  else
  {
   item.colour_name='white';
  }
  }*/

}
