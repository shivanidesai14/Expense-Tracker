import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProfilePage } from "../user-profile/user-profile";
import { LoginPage } from "../login/login";
import { HelpPage } from "../help/help";
import { GraphPage } from '../graph/graph';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }
  onClickUserProfile()
  {
      this.navCtrl.push(UserProfilePage);
  }
  onClickHelp()
  {
      this.navCtrl.push(HelpPage);
  }
  onlogout()
  {
    this.navCtrl.push(LoginPage);
  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
}
