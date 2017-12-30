import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { SignupPage } from "../signup/signup";
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";
import { Users } from "../../shared/users";
import { LogindbProvider } from "../../providers/logindb/logindb";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {

  user: FormGroup;
email:string='';
pass:string='';
id:number=0;
img:string='';
dpass:string='';
name:string='';
mobno:string='';
eid:string='';
  constructor(public storage:Storage,
    public _data:LogindbProvider,
    public navCtrl: NavController, public navParams: NavParams,public lo:LoadingController,public to:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  ngOnInit() {

this.user = new FormGroup({
email: new FormControl('', [Validators.required,Validators.email]),
password: new FormControl('', [Validators.required,Validators.minLength(5)]),
//mob: new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(10)])
});

}
  onLogin()
  {
   let t1=this.to.create({
        message:"Username & Password are incorrect",
        duration:3000,
        position:"bottom"
      });
    let item=new Users(this.id,this.email,this.name,this.mobno,this.img,this.pass,this.dpass);
    this._data.getUserByLogin(item).subscribe(
      (data)=>{
        if(data=="")
        {
          t1.present();
        }
        else{
          this.storage.set('name',this.email);
          this.storage.get('name').then((val) => {
            console.log( val);
            this.eid=val;
          //  alert(this.eid);
          });
      
          this.navCtrl.push(HomePage);
        }
      },
      function(e)
      {
        alert(e);
      }
    );
  }

 
}
