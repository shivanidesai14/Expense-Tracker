import { SpendsPage } from './../spends/spends';
import { GraphPage } from './../graph/graph';
import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ChangepassPage } from "../changepass/changepass";
import { Users } from "../../shared/users";
import { UserdbProvider } from "../../providers/userdb/userdb";
import { LoginPage } from "../login/login";
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { PopoverMenuPage } from "../popover-menu/popover-menu";


@IonicPage()
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})

export class UserProfilePage {
arr:Users[]=[];
selectedFile: File = null;
user: FormGroup;
euid:any;
eumail:string='';
eupass:string='';
euname:string='';
eumobno:string='';
eudpass:string='';
url:string;
eimage:string='';
@ViewChild("fileInput") fileInput;
  constructor(public storage:Storage,public navCtrl: NavController,
     public navParams: NavParams,public data:UserdbProvider,private http:HttpClient
     ,public to:ToastController,public popoverCtrl: PopoverController) {
  }
  
fk_user_email:string='';
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
   this.getdata();
  }
  getdata()
  {
    this.fk_user_email=localStorage.getItem('name');
      this.data.getUsersById(this.fk_user_email).subscribe(

        (data: Users[]) => {
          this.arr = data;
          this.eimage=this.arr[0].user_img;
         
        },
        function (e) {
          alert(e);
        },
        function () {
          
        }

      );

  }
  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.user.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
    this.selectedFile = <File>event.target.files[0];
  }
  getProfileImageStyle() {
    return 'url(' + this.user.controls['profilePic'].value + ')'
  }
  getPicture() {
   
      this.fileInput.nativeElement.click();
  
  }
  ngOnInit() {

    this.user = new FormGroup({
    profilePic:new FormControl('')
    });
    
    }
   
  chagepass()
  {
    this.navCtrl.push(ChangepassPage);
  }

  onClickGraph()
  {
    this.navCtrl.push(GraphPage);
  }
  onClickLoan()
  {
    this.navCtrl.push(GraphPage);
  }
  onClickSpends()
  {
    this.navCtrl.push(SpendsPage);
  }
  onEditProfile()
  {
    let t1=this.to.create({
      message:"Updated Successfully..",
      duration:3000,
      position:"bottom"
    });
    this.fk_user_email=localStorage.getItem('name');
      this.data.getUsersById(this.fk_user_email).subscribe(

        (data: Users[]) => {
          this.arr = data;
          this.euid=this.arr[0].user_id;
          this.eumail=this.arr[0].user_email;
          this.euname=this.arr[0].user_name;
          this.eumobno=this.arr[0].user_mob_no;
          this.eupass=this.arr[0].user_pass;
          this.eudpass=this.arr[0].user_dpass;
          const fd = new FormData();

          fd.append("user_id",this.euid);
          fd.append("user_email",this.eumail);
          fd.append("user_name",this.euname);
          fd.append("user_mob_no",this.eumobno);
          fd.append("image", this.selectedFile, this.selectedFile.name);
          fd.append("user_pass",this.eupass);
          fd.append("user_dpass",this.eudpass);
       
    this.data.updateUsers(this.fk_user_email,fd).subscribe(

      (data: Users[]) => {
       
        t1.present();
        this.getdata();
        
      })
  
  },
        function (e) {
          alert(e);
        },
        function () {
          
        }

      );

  }
  
  onAdd(){
    this.fileInput.nativeElement.click();
  }
 

  onlogout()
  {
    this.navCtrl.push(LoginPage);
  }
  openPopoverMenu(myEvent) {
    let popover = this.popoverCtrl.create(PopoverMenuPage);
    popover.present({
      ev: myEvent
    });
  }
}
