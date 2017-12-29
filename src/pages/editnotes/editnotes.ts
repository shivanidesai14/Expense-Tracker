import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Notes } from "../../shared/notes";
import { NotesdbProvider } from "../../providers/notesdb/notesdb";


/**
 * Generated class for the EditnotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editnotes',
  templateUrl: 'editnotes.html',
})
export class EditnotesPage {

  constructor(public _data: NotesdbProvider, public lo: LoadingController, public to: ToastController, public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }
  id: number;
  arr: Notes[] = [];
  notes_desc: string = "";
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditnotesPage');
    this.storage.get('notes_desc').then((val => {
      console.log(val)
    }));
    this.id = this.navParams.get('id');
    this.notes_desc = this.navParams.get('notes_desc');
   
  }
  onEditNotes(item) {

    

  }


}
