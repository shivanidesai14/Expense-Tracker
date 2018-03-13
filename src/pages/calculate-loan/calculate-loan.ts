import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { loanclass } from "../../shared/loanclass";

/**
 * Generated class for the CalculateLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculate-loan',
  templateUrl: 'calculate-loan.html',
})
export class CalculateLoanPage {

  arr: loanclass[] = [];

  fk_user_email: String = "bhattdrashti266@gmail.com";
  loan_id: Number;
  loan_amt: Number;
  loan_yrs: Number;
  loan_rate: Number;
  loan_emi: Number = 0;
  loan_date: string = new Date().toDateString();

  dt: any = new Date().getDate();
  x: any = new Date().getMonth();
  y: any = new Date().getFullYear();
  finalPay: any = "";

  monPay: Number;
  interest: Number;
  totPay: Number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loan_amt = this.navParams.get('amt');
    this.loan_yrs = this.navParams.get('years');
    this.loan_rate = this.navParams.get('rate');
    this.loan_date = this.navParams.get('date');

  }
  ionViewDidLoad() {
   // this.calFor();
    this.payOffDate();
    console.log('ionViewDidLoad CalculateLoanPage');
  }
  /*calFor() {
    this.monPay = (parseFloat)((this.loan_amt) / (this.loan_yrs));
    this.interest = ((this.loan_amt) * (this.loan_rate) * (this.loan_yrs)) / 100;
    this.totPay = this.monPay + this.interest;
  }*/
  payOffDate() {
      
    alert(this.loan_amt);
  }

  public event = {
    finalDate: this.y + "-" + this.x + "-" + this.dt,
    // month: '2017-01-01'
  }
}
