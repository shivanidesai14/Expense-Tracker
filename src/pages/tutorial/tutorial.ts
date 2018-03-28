import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  tabBarElement: any;
  splash = true;
  style:any="";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement= 'flex';
    }, 4000);
  }
  startApp() {
    this.navCtrl.push(LoginPage);
}

  }


