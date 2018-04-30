import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpendsPage } from "../spends/spends";
import { GraphPage } from "../graph/graph";
import { EdocumentPage } from "../edocument/edocument";
import { UserProfilePage } from "../user-profile/user-profile";
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { HelpPage } from "../help/help";
import { NewnotePage } from "../newnote/newnote";
import { Storage } from '@ionic/storage';
import { EdocpassPage } from '../edocpass/edocpass';
/**
 * Generated class for the PopoverMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-menu',
  templateUrl: 'popover-menu.html',
})
export class PopoverMenuPage {

  constructor(public storage:Storage,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverMenuPage');
  }
  onClickSpend()
  {
   
      this.navCtrl.push(SpendsPage);

  }
  onClickHelp()
  {
    this.navCtrl.push(HelpPage);
  }
  onClickHome()
  {
      this.navCtrl.push(HomePage);
  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onCLickDocument()
  {
this.navCtrl.push(EdocpassPage);
  
  }
  onClickUserProfile()
  {
    this.navCtrl.push(UserProfilePage);
  
  }
  onClickNotes()
  {
    this.navCtrl.push(NewnotePage);
  }
  onlogout()
  {
    localStorage.clear();
    localStorage.removeItem('name');
    localStorage.removeItem('pass');
    this.navCtrl.push(LoginPage);
  }
 
}
