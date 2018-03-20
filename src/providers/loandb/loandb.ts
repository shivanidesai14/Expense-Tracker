import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { loanclass } from "../../shared/loanclass";

/*
  Generated class for the LoandbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoandbProvider {
  public url:string="http://exptracker1.herokuapp.com/loans/";
  constructor(public http: HttpClient) {
    console.log('Hello LoandbProvider Provider');
  }
  addLoans(item:loanclass)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
