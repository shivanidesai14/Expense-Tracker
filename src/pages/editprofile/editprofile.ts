import { UserProfilePage } from './../user-profile/user-profile';
import { UserdbProvider } from './../../providers/userdb/userdb';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Users } from "../../shared/users";
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  arr: Users[] = [];
  id:number;
  uuser_img:string;
  uuser_pass:string;
  uuser_dpass:string;
  user_email:string;
  user_name:string;
  user_mob_no:string;
  constructor(public storage:Storage,public data:UserdbProvider,public tos:ToastController,public load:LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    
    this.id = this.navParams.get('id');
   
  }
  onEditUsers(item) {
    this.data.getAllUsers().subscribe(
      
            (data:Users[])=>{
            
               this.arr=data;
              
               this.uuser_img=this.arr[0].user_img;
               this.uuser_pass=this.arr[0].user_pass;
               this.uuser_dpass=this.arr[0].user_dpass;
              
              let item=new Users(this.id,this.user_email,this.user_name,this.user_mob_no,this.uuser_img,this.uuser_pass,this.uuser_dpass);
              this.data.updateUsers(item).subscribe(
      
                (data:Users[])=>{
               
                 this.navCtrl.push(UserProfilePage);
             }
        
              )
             }
          )
      
        }
  

}
