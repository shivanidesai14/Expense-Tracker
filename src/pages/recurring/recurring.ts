import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrencyPipe } from '@angular/common';
import { Platform } from 'ionic-angular';

/**
 * Generated class for the RecurringPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recurring',
  templateUrl: 'recurring.html',
})
export class RecurringPage {
a: number = 0.259;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public event = {
   month: '2017-01-01',
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecurringPage');
  }

}
