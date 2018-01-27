import { LoanPage } from './../loan/loan';
import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { SpendsPage } from "../spends/spends";
import { NewnotePage } from "../newnote/newnote";
import { GraphPage } from "../graph/graph";
import { EdocumentPage} from "../edocument/edocument";
import { ReminderPage } from "../reminder/reminder";
import { Users } from "../../shared/users";
import { UserdbProvider } from "../../providers/userdb/userdb";

import { SelectcatPage } from "../selectcat/selectcat";
import { Storage } from '@ionic/storage';
import { importType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
eid:string='';
arr:Users[]=[];
fk_user_email:string;
  constructor(public storage:Storage,public popoverCtrl: PopoverController,
    public navCtrl: NavController,public data:UserdbProvider) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.storage.get('name').then((val) => {
      console.log(val);
      this.fk_user_email = val;
      this.data.getUsersById(this.fk_user_email).subscribe(

        (data: Users[]) => {
          this.arr = data;
          
        },
        function (e) {
          alert(e);
        },
        function () {
          
        }

      );

    });
    

  }
openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  onReminder()
  {
    this.navCtrl.push(ReminderPage)
  }
 
  onClick()
  {
   
      this.navCtrl.push(SpendsPage);

  }
  onClickNote()
  {
       this.navCtrl.push(NewnotePage);
  }
  onClickLoan()
  {
       this.navCtrl.push(LoanPage);
  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onCLickDocument()
  {
this.navCtrl.push(EdocumentPage);
  
  }
}
