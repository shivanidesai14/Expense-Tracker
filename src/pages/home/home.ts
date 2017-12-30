import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { SpendsPage } from "../spends/spends";
import { NewnotePage } from "../newnote/newnote";
import { GraphPage } from "../graph/graph";
import { EdocumentPage} from "../edocument/edocument";
import { SelectcatPage } from "../selectcat/selectcat";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
eid:string='';
  constructor(public storage:Storage,public popoverCtrl: PopoverController,public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   this.storage.get('name').then((val)=>{
    console.log( val);
    this.eid=val;
   
  });

  }
openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  onClick()
  {
    alert(this.eid);
      this.navCtrl.push(SpendsPage);

  }
  onClickNote()
  {
       this.navCtrl.push(NewnotePage);
  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onCLickDocument()
  {
this.navCtrl.push(SelectcatPage);
  
  }
}
