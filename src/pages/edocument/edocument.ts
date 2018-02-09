import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { PopoverMenuPage } from "../popover-menu/popover-menu";

/**
 * Generated class for the EdocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edocument',
  templateUrl: 'edocument.html',
})
export class EdocumentPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdocumentPage');
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
}
