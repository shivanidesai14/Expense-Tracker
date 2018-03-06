import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import {  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { Users } from "../../shared/users";
import { Signup1dbProvider } from "../../providers/signup1db/signup1db";
import { HomePage } from "../home/home";
import { Storage } from "@ionic/storage";

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LoginPage } from '../login/login';

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
@ViewChild("fileInput") fileInput;
  uid:any;
  umail:string='';
  upass:string='';
  uname:string='';
  umobno:string='';
  //uimg:string='../assets/userimgs/defaultimg.png';
  udpass:string='';
  selectedFile: File = null;
  constructor(public storage:Storage,public _data:Signup1dbProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public lo:LoadingController,public to:ToastController,private http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  onFileSelected(value) {
    this.selectedFile = <File>value.target.files[0];

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
      let t3=this.to.create({
        message:"Sign up successfully",
        duration:3000,
        position:"bottom"
      });
    /* let l1=this.lo.create({
        content:"loading"
      });
      l1.present();
      let t1=this.to.create({
        message:"Sign-up Successfully..",
        duration:3000,
        position:"bottom"
      });*/
 // let item=new Users(this.uid,this.umail,this.uname,this.umobno,this.uimg,this.upass,this.udpass);
 //this._data.addUsers(item).subscribe(
  // (data)=>{
 const fd = new FormData();

    fd.append("user_id",this.uid);
    fd.append("user_email",this.umail);
    fd.append("user_name",this.uname);
    fd.append("user_mob_no",this.umobno);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append("user_pass",this.upass);
    fd.append("user_dpass",this.udpass);
    
    
            
    

    this.http.post("http://localhost:3000/userss/", fd)
    .subscribe(res => {
      console.log(res);

      t3.present();
      this.navCtrl.push(LoginPage);  
    }/*,

      /*t1.present();
      this.storage.set('uname',this.uname);
      this.storage.set('uno',this.umobno);
     this.navCtrl.push(HomePage);
    },*/
  /*  function(e)
    {
      alert(e);
    },
    function()
    {
      l1.dismiss();
    }*/
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
onAdd(){
  this.fileInput.nativeElement.click();
}
}
