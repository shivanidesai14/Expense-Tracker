import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController,AlertController } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { SignupPage } from "../signup/signup";
import { Storage } from '@ionic/storage';
import { HomePage } from "../home/home";
import { Users } from "../../shared/users";
import { LogindbProvider } from "../../providers/logindb/logindb";
import { UserdbProvider } from "../../providers/userdb/userdb";
import { email } from "../../shared/Email";
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
msg:string;
  constructor(public storage:Storage,
    public _data:LogindbProvider,
    public navCtrl: NavController, public navParams: NavParams,public lo:LoadingController,
    public to:ToastController, public alert: AlertController,public _da:UserdbProvider,public load:LoadingController) {
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
});

}
  onLogin()
  {
   let t1=this.to.create({
        message:"Username & Password are incorrect",
        duration:3000,
        position:"bottom"
      });
      let t2=this.to.create({
        message:"Fields must not be empty",
        duration:3000,
        position:"bottom"
      });
      if(this.email==""  || this.pass == "")
      {
        t2.present();
      }
      else
      {
        let l1=this.load.create({
      
          spinner:"hide",
          content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
          cssClass:"loader",
          duration:1000
      });
      
    let item=new Users(this.id,this.email,this.name,this.mobno,this.img,this.pass,this.dpass);
    this._data.getUserByLogin(item).subscribe(
      (data)=>{
        if(data=="")
        {
          t1.present();
        }
        else{
          l1.present();
          localStorage.setItem('name',this.email);
          localStorage.setItem('pass',this.pass);
          this.eid=localStorage.getItem('name');      
          this.navCtrl.push(HomePage);
        
        }
      },
      function(e)
      {
        alert(e);
      },
      function()
      {
<<<<<<< HEAD
       
       if(this.loader){ this.loader.dismiss(); this.loader = null; }
=======

        // l1.dismiss();
        // this.l1=null;
        
>>>>>>> 22656028a6e6d6be60153d211d92c34aad5e4b86
      }
    );
  }
  }
  emailid:string='';
  u:Users[]=[];
forgotPassword()
{

    this._da.getUsersById(this.email).subscribe(
      (data:Users[])=>{
        if(data.length==1)
        {
          alert("hello");
          var message="Hello "+data[0].user_name+". You have requested to reset the password. your password is '"+data[0].user_pass+"'. Password is one of the confidential thing, Don't share it with anyone.";
            this._data.sendMail(new email(message,this.email,"Resetting the password of Expense Tracker.")).subscribe(
              (data1:any)=>{
                console.log("mail sent");
                alert("The Password has been sent to "+this.email);
              },
              
            );
        }
        else
        {
          this.msg="You have entered incorrect email id. Please enter the email id you used to login with.";
        }
      }
    );
  }
  showPrompt() {
    let prompt = this.alert.create({
      title: 'Forgot Password',
      message: "Enter Your Email Id To Get Your Password",
      inputs: [
        {
          name: 'name',
          placeholder: 'Email_id'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            this.email = data.name;
            this.forgotPassword();
          }
        }
      ]
    });
    prompt.present();
  }
  public type = 'password';
  public showPass = true;
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
}
