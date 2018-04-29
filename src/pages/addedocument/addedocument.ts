import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators,ValidatorFn,AbstractControl } from '@angular/forms';
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
  @ViewChild('fileInput') myfile1: any;
  @ViewChild('fileInput2') myfile2: any;
  @ViewChild('fileInput3') myfile3: any;
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  selectedFile: File[] = [];
  onFile1() {
    this.myfile1.nativeElement.click();
  }
  onFile2() {
    this.myfile2.nativeElement.click();
  }
  onFile3() {
    this.myfile3.nativeElement.click();
  }
  constructor(public navCtrl: NavController,public storage:Storage,
    public navParams: NavParams,public popoverCtrl: PopoverController,private http:HttpClient,
     public data:EdocumentdbProvider,formBuilder: FormBuilder) {
      this.form1 = formBuilder.group({
        profilePic: [''],
  
      });
      this.form2 = formBuilder.group({
        profilePic: [''],
  
      });
      this.form3 = formBuilder.group({
        profilePic: [''],
  
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddedocumentPage');
  }
   

  processWebImage1(event) {

    this.selectedFile[0] = <File>event.target.files[0];


    //    alert(this.selectedFile.name);
    //alert(this.selectedFile.name.substr(this.selectedFile.name.indexOf('.')+1));
    if (this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "jpg" &&
      this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "png" &&
      this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "jpeg" &&
      this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "JPG" &&
      this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "PNG" &&
      this.selectedFile[0].name.substr(this.selectedFile[0].name.indexOf('.') + 1) != "JPEG") {

      alert("only Images allowed");
    }
    else {

    }

    let reader = new FileReader();

    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form1.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle1() {
    return 'url(' + this.form1.controls['profilePic'].value + ')'
  }


  processWebImage2(event) {

    this.selectedFile[1] = <File>event.target.files[0];


    //    alert(this.selectedFile.name);
    //alert(this.selectedFile.name.substr(this.selectedFile.name.indexOf('.')+1));
    if (this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "jpg" &&
      this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "png" &&
      this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "jpeg" &&
      this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "JPG" &&
      this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "PNG" &&
      this.selectedFile[1].name.substr(this.selectedFile[1].name.indexOf('.') + 1) != "JPEG") {

      alert("only Images allowed");
    }
    else {

    }

    let reader = new FileReader();

    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form2.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle2() {
    return 'url(' + this.form2.controls['profilePic'].value + ')'
  }


  processWebImage3(event) {

    this.selectedFile[2] = <File>event.target.files[0];


    //    alert(this.selectedFile.name);
    //alert(this.selectedFile.name.substr(this.selectedFile.name.indexOf('.')+1));
    if (this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "jpg" &&
      this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "png" &&
      this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "jpeg" &&
      this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "JPG" &&
      this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "PNG" &&
      this.selectedFile[2].name.substr(this.selectedFile[2].name.indexOf('.') + 1) != "JPEG") {

      alert("only Images allowed");
    }
    else {

    }

    let reader = new FileReader();

    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form3.patchValue({ 'profilePic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle3() {
    return 'url(' + this.form3.controls['profilePic'].value + ')'
  }



  onClickAddEdoc()
  {
   
    
    this.fk_user_email=localStorage.getItem('name');
      const fd = new FormData();

    fd.append("edoc_id",this.edoc_id);
    fd.append("edoc_title",this.edoc_title);
    fd.append("fk_user_email",this.fk_user_email);
    fd.append("image", this.selectedFile[0], this.selectedFile[0].name);
    fd.append("image", this.selectedFile[1], this.selectedFile[1].name);
    fd.append("image", this.selectedFile[2], this.selectedFile[2].name);

    this.http.post("https://exptracker1.herokuapp.com/edoc/", fd)
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

