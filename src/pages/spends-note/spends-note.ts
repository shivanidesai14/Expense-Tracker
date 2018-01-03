import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OnetimePage } from "../onetime/onetime";
import { FrequentPage } from "../frequent/frequent";
import { RecurringPage} from "../recurring/recurring";

/**
 * Generated class for the SpendsNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-spends-note',
  templateUrl: 'spends-note.html',
})
export class SpendsNotePage {
notes_desc:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpendsNotePage');
  }
  onAddNotes(notes_desc:string)
  {
    this.navCtrl.push(OnetimePage,{
          desc : notes_desc
    })
    alert(notes_desc);
  }

}
