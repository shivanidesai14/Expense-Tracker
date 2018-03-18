import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,PopoverController,ToastController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Edocument } from "../../shared/edoc";
import { EdocumentPage } from '../edocument/edocument';

/**
 * Generated class for the AddedocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addedocument',
  templateUrl: 'addedocument.html',
})
export class AddedocumentPage {
  arr:Edocument[]=[];
  fk_user_email:string="shivanidesai402@gmail.com";
  edoc_id:any;
  edoc_title:string;
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  user: FormGroup;
  @ViewChild("fileInput") fileInput;
  selectedFile: File = null;
  selectedFile1: File = null;
  selectedFile2: File = null;
  constructor(public navCtrl: NavController,public storage:Storage,
    public navParams: NavParams,public popoverCtrl: PopoverController,private http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddedocumentPage');
  }
  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

  }
  onFileSelected(value) {
    this.selectedFile = value.target.files[0];

  }
 
  onAdd(){
    this.fileInput.nativeElement.click();
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
   
  onClickAddEdoc()
  {
    alert("hello");
    this.fk_user_email=localStorage.getItem('name');
      const fd = new FormData();

    fd.append("edoc_id",this.edoc_id);
    fd.append("edoc_title",this.edoc_title);
    fd.append("fk_user_email",this.fk_user_email);
    fd.append("image", this.selectedFile, this.selectedFile.name);
    fd.append("image_2","hello");
    fd.append("image_3","hello2");

    this.http.post("http://localhost:3000/edoc/", fd)
    .subscribe(res => {
      console.log(res);
      alert("inserted");
      this.navCtrl.push(EdocumentPage);
    }),
    function(error)
    {
      alert(error);
    }
  


    
  }

}
