import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
import { IonicPage, NavController, NavParams,PopoverController,ToastController,LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Edocument } from "../../shared/edoc";
import { EdocumentPage } from '../edocument/edocument';
import { EdocumentdbProvider } from "../../providers/edocumentdb/edocumentdb";

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
  image_1:string;
  image_2:string;
  image_3:string;
  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  user: FormGroup;
  @ViewChild("fileInput") fileInput;
  selectedFile: File = null;
  selectedFile1: File = null;
  selectedFile2: File = null;
  constructor(public navCtrl: NavController,public storage:Storage,
    public navParams: NavParams,public popoverCtrl: PopoverController,private http:HttpClient,
     public data:EdocumentdbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddedocumentPage');
  }
  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,

  }
  onFileSelected(value) {
    this.selectedFile = value.target.files[0];
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
   
  })
  }

  onFileSelected1(value)
  {
    this.fk_user_email=localStorage.getItem('name');
    this.selectedFile1 = value.target.files[1];
    this.data.getEdocById(this.fk_user_email).subscribe(

      (data: Edocument[]) => {
        this.arr = data;
        this.edoc_title=this.arr[0].edoc_title;
        this.image_1=this.arr[0].image_1;
        this.image_3=this.arr[0].image_3
        const fd = new FormData();

 

    
      })
   
  }


 
  onAdd(){
    this.fileInput.nativeElement.click();

  }
  onAdd1(){
    this.fileInput.nativeElement.click();

  }
  onclick()
  {
    alert(this.selectedFile.name)
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
