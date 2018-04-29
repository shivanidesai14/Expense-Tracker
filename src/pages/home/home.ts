import { Component,ViewChild } from '@angular/core';
import {ElementRef,Renderer } from "@angular/core";
import { NavController,PopoverController,Content } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { SpendsPage } from "../spends/spends";
import { NewnotePage } from "../newnote/newnote";
import { GraphPage } from "../graph/graph";
import { EdocumentPage} from "../edocument/edocument";
import { ReminderPage } from "../reminder/reminder";
import { EdocpassPage } from "../edocpass/edocpass";
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
  @ViewChild(Content) content: Content;
  start = 0;
  threshold = 100;
  slideHeaderPrevious = 0;
eid:string='';
arr:Users[]=[];
fk_user_email:string;
ionScroll:any;
showheader:boolean;
hideheader:boolean;
headercontent:any;
user_name:string='';
  constructor(public storage:Storage,public popoverCtrl: PopoverController,
    public navCtrl: NavController,public data:UserdbProvider,
    public renderer: Renderer ,public myElement: ElementRef) {
      this.showheader =false;
      this.hideheader = true;

  }
  ionViewDidLoad() {
    
    console.log('ionViewDidLoad LoginPage');
      this.fk_user_email=localStorage.getItem('name');
  
      this.data.getUsersById(this.fk_user_email).subscribe(

        (data: Users[]) => {
          console.log(data);
          this.arr = data;
          this.user_name=data[0].user_name;
        },
        function (e) {
          alert(e);
        },
        function () {
          
        }
      
      );
    
        

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
       this.navCtrl.push(GraphPage);
  }
  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onCLickDocument()
  {
this.navCtrl.push(EdocpassPage);
  
  }
}
