import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpendsPage } from "../spends/spends";
import { GraphPage } from "../graph/graph";
import { EdocumentPage } from "../edocument/edocument";
import { UserProfilePage } from "../user-profile/user-profile";
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverMenuPage');
  }
  onClickSpend()
  {
   
      this.navCtrl.push(SpendsPage);

  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onCLickDocument()
  {
this.navCtrl.push(EdocumentPage);
  
  }
  onClickUserProfile()
  {
    this.navCtrl.push(UserProfilePage);
  
  }

}
