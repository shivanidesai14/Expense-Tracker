import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController} from 'ionic-angular';
import { UserdbProvider } from "../../providers/userdb/userdb";
import { Users } from "../../shared/users";
import { Storage } from '@ionic/storage';
import { Item } from 'ionic-angular/components/item/item';
import { UserProfilePage } from '../user-profile/user-profile';
/**
 * Generated class for the ChangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepass',
  templateUrl: 'changepass.html',
})
export class ChangepassPage {
old_pass:string="";
new_pass:string="";
re_new_pass:string="";
pass:string="";
fk_user_email:string="";
arr:Users[]=[];
cuser_email:string="";
cuser_name:string="";
cuser_mob_no:string="";
cuser_img:string="";
cuser_dpass:number;
cuser_id:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public data:UserdbProvider,public l1:LoadingController,public t1:ToastController,public storage:Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepassPage');
  }
  changePassword()
  {
   
    this.fk_user_email=localStorage.getItem('name');
      this.pass=localStorage.getItem('pass');
      let to2=this.t1.create({
        message:"Old password is Incorrect",
        duration:3000,
        position:"bottom"
      });
   
    let to=this.t1.create({
      message:"New password and Re-enter new Password Are Incorrect",
      duration:3000,
      position:"bottom"
    });
    let to3=this.t1.create({
      message:"Password updated",
      duration:3000,
      position:"bottom"
    });
    let to4=this.t1.create({
      message:"Fields Must not be empty",
      duration:3000,
      position:"bottom"
    });
    
    if(this.pass!=this.old_pass)
    {
        to2.present();
    }
    else if(this.old_pass=="" || this.new_pass=="" || this.re_new_pass=="")
    {
      to4.present();
    }
    else if(this.new_pass!=this.re_new_pass)
    {
      to.present();
    }
    else
    {
     
      this.data.getUsersById(this.fk_user_email).subscribe(
      
        (data:Users[])=>{
        
          this.arr=data;


          this.cuser_id=this.arr[0].user_id;
          this.cuser_email=this.arr[0].user_email;
          this.cuser_name=this.arr[0].user_name;
          this.cuser_mob_no=this.arr[0].user_mob_no;
          this.cuser_img=this.arr[0].user_img;
          this.cuser_dpass=this.arr[0].user_dpass;

          let item=new Users(this.cuser_id,this.cuser_email,this.cuser_name,this.cuser_mob_no,this.cuser_img,this.new_pass,this.cuser_dpass)

          this.data.changePassword(this.fk_user_email,item).subscribe(
            (data:Users[])=>{
              to3.present();
              this.navCtrl.push(UserProfilePage);
             
          }
          ),
          function(e)
          {
            alert(e);
          },
          function()
          {
            
          }
          
        }
      )
    }
    
  }
  public type = 'password';
  public showPass = true;
  public showPass2 = true;
  public showPass1 = true;
 
 
  showPassword() {
    this.showPass = !this.showPass;
 
    if(this.showPass){
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
  showPassword1() {
    this.showPass1 = !this.showPass1;
 
    if(this.showPass1){
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
  showPassword2() {
    this.showPass2 = !this.showPass2;
 
    if(this.showPass2){
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
}
