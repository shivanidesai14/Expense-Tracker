import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Spends } from "../../shared/spends";
import { SpendsdbProvider } from "../../providers/spendsdb/spendsdb";
import { Storage } from '@ionic/storage';
import { SpendsPage } from "../spends/spends";

/**
 * Generated class for the PopoverSpendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover-spend',
  templateUrl: 'popover-spend.html',
})
export class PopoverSpendPage {
arr:Spends[]=[];
sexpense_id:number;
sfk_user_email:string='';
sfk_scat_id:number;
sexpense_date:string='';
sexpense_amt:number;
scolour_name:string='';
sexp_note:string='';
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public storage:Storage,public _data1:SpendsdbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverSpendPage');
  }
 close() {
    this.viewCtrl.dismiss();
  }
 onClickRed()
  {
   
    this.storage.get('spendsid').then((val) => {
      console.log( val);
      this.sexpense_id=val;
    
    this._data1.getSpendsById(this.sexpense_id).subscribe(

      (data:Spends[])=>{
      
         this.arr=data;
           this.scolour_name="white";
         this.sexp_note=this.arr[0].exp_note;
         this.sfk_scat_id=this.arr[0].fk_scat_id;
         this.sexpense_date=this.arr[0].expense_date
         this.sexpense_amt=this.arr[0].expense_amt;
         this.sfk_user_email=this.arr[0].fk_user_email;
        
        let item=new Spends(this.sexpense_id,this.sfk_user_email,this.sfk_scat_id,this.sexpense_date,this.sexpense_amt,this.scolour_name,this.sexp_note);
        this._data1.editSpends(item).subscribe(

          (data:Spends[])=>{
         
           this.navCtrl.push(SpendsPage);
       }
  
        )
       }
    )

    });
    
  }
     onClickYellow()
  {
   
    this.storage.get('spendsid').then((val) => {
      console.log( val);
      this.sexpense_id=val;
    
    this._data1.getSpendsById(this.sexpense_id).subscribe(

      (data:Spends[])=>{
      
         this.arr=data;
           this.scolour_name="orange";
         this.sexp_note=this.arr[0].exp_note;
         this.sfk_scat_id=this.arr[0].fk_scat_id;
         this.sexpense_date=this.arr[0].expense_date
         this.sexpense_amt=this.arr[0].expense_amt;
         this.sfk_user_email=this.arr[0].fk_user_email;
        
        let item=new Spends(this.sexpense_id,this.sfk_user_email,this.sfk_scat_id,this.sexpense_date,this.sexpense_amt,this.scolour_name,this.sexp_note);
        this._data1.editSpends(item).subscribe(

          (data:Spends[])=>{
         
           this.navCtrl.push(SpendsPage);
       }
  
        )
       }
    )

    });
    
  }
  onClickGreen()
  {
    this.storage.get('spendsid').then((val) => {
      console.log( val);
      this.sexpense_id=val;
    
    this._data1.getSpendsById(this.sexpense_id).subscribe(

      (data:Spends[])=>{
      
         this.arr=data;
           this.scolour_name="lightgreen";
         this.sexp_note=this.arr[0].exp_note;
         this.sfk_scat_id=this.arr[0].fk_scat_id;
         this.sexpense_date=this.arr[0].expense_date
         this.sexpense_amt=this.arr[0].expense_amt;
         this.sfk_user_email=this.arr[0].fk_user_email;
        
        let item=new Spends(this.sexpense_id,this.sfk_user_email,this.sfk_scat_id,this.sexpense_date,this.sexpense_amt,this.scolour_name,this.sexp_note);
        this._data1.editSpends(item).subscribe(

          (data:Spends[])=>{
         
           this.navCtrl.push(SpendsPage);
       }
  
        )
       }
    )

    });
  }
  onClickBrown()
  {
    this.storage.get('spendsid').then((val) => {
      console.log( val);
      this.sexpense_id=val;
    
    this._data1.getSpendsById(this.sexpense_id).subscribe(

      (data:Spends[])=>{
      
         this.arr=data;
           this.scolour_name="lightcoral";
         this.sexp_note=this.arr[0].exp_note;
         this.sfk_scat_id=this.arr[0].fk_scat_id;
         this.sexpense_date=this.arr[0].expense_date
         this.sexpense_amt=this.arr[0].expense_amt;
         this.sfk_user_email=this.arr[0].fk_user_email;
        
        let item=new Spends(this.sexpense_id,this.sfk_user_email,this.sfk_scat_id,this.sexpense_date,this.sexpense_amt,this.scolour_name,this.sexp_note);
        this._data1.editSpends(item).subscribe(

          (data:Spends[])=>{
         
           this.navCtrl.push(SpendsPage);
       }
  
        )
       }
    )

    });
  }
  onClickBlack()
  {
    this.storage.get('spendsid').then((val) => {
      console.log( val);
      this.sexpense_id=val;
    
    this._data1.getSpendsById(this.sexpense_id).subscribe(

      (data:Spends[])=>{
      
         this.arr=data;
           this.scolour_name="darkturquoise";
         this.sexp_note=this.arr[0].exp_note;
         this.sfk_scat_id=this.arr[0].fk_scat_id;
         this.sexpense_date=this.arr[0].expense_date
         this.sexpense_amt=this.arr[0].expense_amt;
         this.sfk_user_email=this.arr[0].fk_user_email;
        
        let item=new Spends(this.sexpense_id,this.sfk_user_email,this.sfk_scat_id,this.sexpense_date,this.sexpense_amt,this.scolour_name,this.sexp_note);
        this._data1.editSpends(item).subscribe(

          (data:Spends[])=>{
         
           this.navCtrl.push(SpendsPage);
       }
  
        )
       }
    )

    });
  }
}
