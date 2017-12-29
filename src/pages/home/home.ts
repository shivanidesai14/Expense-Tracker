import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { SpendsPage } from "../spends/spends";
import { NewnotePage } from "../newnote/newnote";
import { GraphPage } from "../graph/graph";
import { EdocumentPage} from "../edocument/edocument";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public popoverCtrl: PopoverController,public navCtrl: NavController) {

  }
openPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  onClick()
  {
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
this.navCtrl.push(EdocumentPage);
  
  }
}
