import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Users } from "../../shared/users";
import { Signup1dbProvider } from "../../providers/signup1db/signup1db";
import { HomePage } from "../home/home";

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
export class SignupPage {
  uid:number=0;
  umail:string='';
  upass:string='';
  uname:string='';
  umobno:string='';
  uimg:string='../assets/userimgs/defaultimg.png';
  udpass:string='';
  constructor(public _data:Signup1dbProvider,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup1()
  {
  let item=new Users(this.uid,this.umail,this.uname,this.umobno,this.uimg,this.upass,this.udpass);
  this._data.addUsers(item).subscribe(
    (data)=>{
      this.navCtrl.push(HomePage);
    },
    function(e)
    {
      alert(e);
    }
  );
   
  }

}
