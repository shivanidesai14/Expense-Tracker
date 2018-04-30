import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { Edocument } from "../../shared/edoc";
import { EdocumentdbProvider } from "../../providers/edocumentdb/edocumentdb";
import { Users } from "../../shared/users";
import { UserdbProvider } from "../../providers/userdb/userdb";
import { EdocumentPage } from '../edocument/edocument';
/**
 * Generated class for the EdocpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edocpass',
  templateUrl: 'edocpass.html',
})
export class EdocpassPage {
  no1:number=0;
  no2:number=0;
  flag:number=0;
  num:string="";
  fk_user_email:string='';
  arr:Users[]=[];
  eudpass:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:UserdbProvider,public to :ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdocpassPage');
  }

  press1()
  {
    this.num+="1";
  }
  press2()
  {
    this.num+="2";
  }
  press3()
  {
    this.num+="3";
  }
  press4()
  {
    this.num+="4";
  }
  press5()
  {
    this.num+="5";
  }
  press6()
  {
    this.num+="6";
  }
  press7()
  {
    this.num+="7";
  }
  press8()
  {
    this.num+="8";
  }
  press9()
  {
    this.num+="9";
  }
  press0()
  {
    this.num+="0";
  }
   pressdot()
  {
    this.num+=".";
  }
  pressperc()
  {
     this.no2=+this.num;
  this.num="";
    this.num=((this.no1*this.no2)/100)+"";
  }
 pressplus()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=1;
}
pressmul()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=2;
}
pressdiv()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=3;
}
pressbackspace()
{
  this.num=this.num.substring(0,this.num.length-1);

}
pressmin()
 {
   this.no1=+this.num;
   this.num="";
   this.flag=4;
}

pressc()
{
  this.num="";
}
pressgo()
{
  let t1=this.to.create({
    message:"Successfully..",
    duration:3000,
    position:"bottom"
  });
  let t2=this.to.create({
    message:"Password incorrect..",
    duration:3000,
    position:"bottom"
  });
  this.fk_user_email=localStorage.getItem('name');
    this._data.getUsersById(this.fk_user_email).subscribe(

      (data: Users[]) => {
        this.arr = data;
        this.eudpass=this.arr[0].user_dpass;
       if(this.eudpass==this.num)
       {
         t1.present();
         this.navCtrl.push(EdocumentPage);
       }
       else
       {
          t2.present();
       }

        

},
      function (e) {
        alert(e);
      },
      function () {
        
      }

    );

}

}
