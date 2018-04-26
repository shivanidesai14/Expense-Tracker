import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { EdocumentPage } from "../edocument/edocument";
import { Users } from '../../shared/users';
import { UserdbProvider } from "../../providers/userdb/userdb";

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
  num:any;
  fk_user_email:string="";
  edocpass:number;
  arr:Users[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public data:UserdbProvider,public load:LoadingController,public to:ToastController) {
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

pressbackspace()
{
  this.num=this.num.substring(0,this.num.length-1);

}


pressc()
{
  this.num="";
}


pressgo()
{
 
  this.fk_user_email=localStorage.getItem('name');
      this.data.getUsersById(this.fk_user_email).subscribe(

        (data: Users[]) => {
          this.arr = data;
          this.edocpass=this.arr[0].user_dpass;
          let l1 = this.load.create({

            spinner:"hide",
            content:"<div style='text-align:center;background:black';><img src='../assets/imgs/Loading3.gif' height='80' width='80'></div>",
            cssClass:"loader",
            duration:2000
          });
          let t1=this.to.create({
            message:"Password Incorrect",
            duration:3000
         });
         
          if(this.edocpass==this.num)
          {
            l1.present();
                this.navCtrl.push(EdocumentPage)
                l1.dismiss();
          }
          else{
            t1.present();
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
