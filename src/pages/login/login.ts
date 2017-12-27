import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
export class LoginPage {
email:string='';
pass:string='';
id:number=0;
img:string='';
dpass:string='';
name:string='';
mobno:string='';
  constructor(public storage:Storage,
    public _data:LogindbProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
  onLogin()
  {
   // alert(this.email);
    //alert(this.pass);
    let item=new Users(this.id,this.email,this.name,this.mobno,this.img,this.pass,this.dpass);
    this._data.getUserByLogin(item).subscribe(
      (data)=>{
        if(data=="")
        {
        alert("Something wrong");
        }
        else{
          this.storage.set('name',this.email);
          this.storage.get('name').then((val) => {
            alert( val);
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
