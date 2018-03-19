import { Component,ViewChild,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,Platform  } from 'ionic-angular';
import { PopoverMenuPage } from "../popover-menu/popover-menu";

import { ApiAiClient } from "api-ai-javascript";
import { ChatProvider,Message } from "../../providers/chat/chat";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  private readySource: string;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public popoverCtrl:PopoverController,
    public _data:ChatProvider, private platform: Platform) {
      const client = new ApiAiClient({accessToken:'7b2381e575db4bec82eadc5c831de503'});
      const promise= client.textRequest('Hello!')
      promise.then((response) => {console.log("Response: ",response);})
      .catch((error) => {console.log("Error", error);})
  }

  messages: Observable<Message[]>;
  strMsg:string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  ngOnInit() {
    // appends to array after each new message is added to feedSource
    this.messages = this._data.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }
  sendMessage()
  {
      this._data.talk(this.strMsg);
      this.strMsg = '';
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }

}
