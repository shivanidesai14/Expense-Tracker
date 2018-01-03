import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
  }
fk_user_email:string='';
  ionViewDidLoad() {
     this.storage.get('name').then((val)=>{
    console.log( val);
    this.fk_user_email=val;
     });
    console.log('ionViewDidLoad UserProfilePage');
  }

}
