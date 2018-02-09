import { UserProfilePage } from './../user-profile/user-profile';
import { UserdbProvider } from './../../providers/userdb/userdb';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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
  id: number;
  uuser_img: string;
  uuser_pass: string;
  uuser_dpass: string;
  user_email: string;
  user_name: string;
  user_mob_no: string;
  constructor(public storage: Storage, public data: UserdbProvider, public tos: ToastController, public load: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }
emailid:string;
  ionViewDidLoad() {
    let l1=this.load.create({
      content:"Loading"
    });
   
    console.log('ionViewDidLoad EditprofilePage');

    /*this.user_email = this.navParams.get('email');
    this.user_name = this.navParams.get('name');
    this.user_mob_no = this.navParams.get('mob_no');
*/  this.storage.get('name').then((val)=>{
    this.emailid=val;
    alert(this.emailid);
    this.data.getUsersById(this.emailid).subscribe(
    
      (dt: Users[]) => {
                this.arr = dt;
                this.user_email=this.arr[0].user_email;
                this.user_name=this.arr[0].user_name;
                this.user_mob_no=this.arr[0].user_mob_no;
                
              }  
    );
});

  }
  onEditUsers(item) {
    let t1=this.tos.create(
      {
      message:"Updated Successfully",
      duration:3000,
      position:"bottom"
      }
    );
    this.data.getAllUsers().subscribe(

      (data: Users[]) => {

        this.arr = data;

        this.uuser_img = this.arr[0].user_img;
        this.uuser_pass = this.arr[0].user_pass;
        this.uuser_dpass = this.arr[0].user_dpass;

        let item = new Users(this.id, this.user_email, this.user_name, this.user_mob_no, this.uuser_img, this.uuser_pass, this.uuser_dpass);
        this.data.updateUsers(item).subscribe(

          (data: Users[]) => {
            t1.present();
            this.navCtrl.push(UserProfilePage);
          }

        )
      }
    )
  }
}
