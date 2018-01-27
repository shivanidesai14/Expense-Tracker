import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Users } from "../../shared/users";
import { Signup1dbProvider } from "../../providers/signup1db/signup1db";
import { HomePage } from "../home/home";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit {

user: FormGroup;

  uid:number=0;
  umail:string='';
  upass:string='';
  uname:string='';
  umobno:string='';
  uimg:string='../assets/userimgs/defaultimg.png';
  udpass:string='';
  constructor(public storage:Storage,public _data:Signup1dbProvider,
    public navCtrl: NavController, public navParams: NavParams,public lo:LoadingController,public to:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup1()
  {
    let t2=this.to.create({
      message:"Fields must not be empty",
      duration:3000,
      position:"bottom"
    });
    if(this.umail=="") 
    {
        t2.present();
    }
    else if(this.upass=="")
    {
      t2.present();
    }
    else if(this.uname=="")
    {
      t2.present();
    }
    else if(this.umobno=="")
    {
      t2.present();
    }
    else
    {
     let l1=this.lo.create({
        content:"loading"
      });
      l1.present();
      let t1=this.to.create({
        message:"Sign-up Successfully..",
        duration:3000,
        position:"bottom"
      });
  let item=new Users(this.uid,this.umail,this.uname,this.umobno,this.uimg,this.upass,this.udpass);
  this._data.addUsers(item).subscribe(
    (data)=>{
       t1.present();
       this.storage.set('uname',this.uname);
       this.storage.set('uno',this.umobno);
      this.navCtrl.push(HomePage);
    },
    function(e)
    {
      alert(e);
    },
    function()
    {
      l1.dismiss();
    }
  );
}
}
 ngOnInit() {

this.user = new FormGroup({
email: new FormControl('', [Validators.required,Validators.email]),
password: new FormControl('', [Validators.required,Validators.minLength(5)]),
mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)]),
name: new FormControl('', [Validators.required])
});

}

}
