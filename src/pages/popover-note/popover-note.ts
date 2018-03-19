import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { NewnotePage } from "../newnote/newnote";
import { Storage } from '@ionic/storage';
import { NotesdbProvider } from "../../providers/notesdb/notesdb";
import { Notes } from "../../shared/notes";

/**
 * Generated class for the PopoverNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-note',
  templateUrl: 'popover-note.html',
})
export class PopoverNotePage {
  arr:Notes[]=[];
  nid:any=0;
  ndesc:string='';
  ndate:string='';
  ncolor:string='';
  nfk_user_mail:string='';

  constructor(public viewCtrl: ViewController,public navCtrl: NavController,
     public navParams: NavParams,public _data1:NotesdbProvider,
    public storage:Storage) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PopoverNotePage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
  onClickRed()
  {
   
  
      this.nid=localStorage.getItem('noteid');
    
    this._data1.getNoteDesc(this.nid).subscribe(

      (data:Notes[])=>{
      
         this.arr=data;
         this.ndesc=this.arr[0].notes_desc;
         this.ncolor="white";
         this.ndate=this.arr[0].notes_date;
         this.nfk_user_mail=this.arr[0].fk_user_email;
        
        let item=new Notes(this.nid,this.nfk_user_mail,this.ndesc,this.ndate,this.ncolor);
        this._data1.editNotes(item).subscribe(

          (data:Notes[])=>{
         
           this.navCtrl.push(NewnotePage);
       }
  
        )
       }
    )

    
    
  }
  
  onClickYellow()
  {
    
    this.nid=localStorage.getItem('noteid');
    
    this._data1.getNoteDesc(this.nid).subscribe(

      (data:Notes[])=>{
      
         this.arr=data;
         this.ndesc=this.arr[0].notes_desc;
         this.ncolor="orange";
         this.ndate=this.arr[0].notes_date;
         this.nfk_user_mail=this.arr[0].fk_user_email;
        
        let item=new Notes(this.nid,this.nfk_user_mail,this.ndesc,this.ndate,this.ncolor);
        this._data1.editNotes(item).subscribe(

          (data:Notes[])=>{
         
           this.navCtrl.push(NewnotePage);
       }
  
        )
       }
    )

    
  }
  onClickGreen()
  {

    this.nid=localStorage.getItem('noteid');
    
    this._data1.getNoteDesc(this.nid).subscribe(

      (data:Notes[])=>{
      
         this.arr=data;
         this.ndesc=this.arr[0].notes_desc;
         this.ncolor="lightgreen";
         this.ndate=this.arr[0].notes_date;
         this.nfk_user_mail=this.arr[0].fk_user_email;
        
        let item=new Notes(this.nid,this.nfk_user_mail,this.ndesc,this.ndate,this.ncolor);
        this._data1.editNotes(item).subscribe(

          (data:Notes[])=>{
         
           this.navCtrl.push(NewnotePage);
       }
  
        )
       }
    )

    
  }
  onClickBrown()
  {
    
    this.nid=localStorage.getItem('noteid');
    
    this._data1.getNoteDesc(this.nid).subscribe(

      (data:Notes[])=>{
      
         this.arr=data;
         this.ndesc=this.arr[0].notes_desc;
         this.ncolor="lightcoral";
         this.ndate=this.arr[0].notes_date;
         this.nfk_user_mail=this.arr[0].fk_user_email;
        
        let item=new Notes(this.nid,this.nfk_user_mail,this.ndesc,this.ndate,this.ncolor);
        this._data1.editNotes(item).subscribe(

          (data:Notes[])=>{
         
           this.navCtrl.push(NewnotePage);
       }
  
        )
       }
    )

    
  }
  onClickBlack()
  {
    
    this.nid=localStorage.getItem('noteid');
    
    this._data1.getNoteDesc(this.nid).subscribe(

      (data:Notes[])=>{
      
         this.arr=data;
         this.ndesc=this.arr[0].notes_desc;
         this.ncolor="darkturquoise";
         this.ndate=this.arr[0].notes_date;
         this.nfk_user_mail=this.arr[0].fk_user_email;
        
        let item=new Notes(this.nid,this.nfk_user_mail,this.ndesc,this.ndate,this.ncolor);
        this._data1.editNotes(item).subscribe(

          (data:Notes[])=>{
         
           this.navCtrl.push(NewnotePage);
       }
  
        )
       }
    )

  
  }

}
