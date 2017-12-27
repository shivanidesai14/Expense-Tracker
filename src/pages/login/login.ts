import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { SignupPage } from "../signup/signup";
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
  constructor(public _data:LogindbProvider,public navCtrl: NavController, public navParams: NavParams) {
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
   // alert(this.email);
    //alert(this.pass);
   /* if(this.email=="")
    {
        alert("E-mail id must not be empty")
    }
    else if(this.pass=="")
    {
      alert("Password must not be empty");
    }
    else
    {*/
    let item=new Users(this.id,this.email,this.name,this.mobno,this.img,this.pass,this.dpass);
    this._data.getUserByLogin(item).subscribe(
      (data)=>{
        if(data=="")
        {
        alert("Username and Password are incorrect");
        }
        else{
          this.navCtrl.push(HomePage);
        }
      },
      function(e)
      {
        alert(e);
      }
    );
  }
 // }
 
}
