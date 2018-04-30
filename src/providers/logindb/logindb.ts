import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*
  Generated class for the LogindbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogindbProvider {
  public url:string="http://exptracker1.herokuapp.com/login/";
  constructor(public http: HttpClient) {
    console.log('Hello LogindbProvider Provider');
  }
getUserByLogin(item)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
   public url1:string="http://exptracker1.herokuapp.com/forgetpass/";
  sendMail(item)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }


}
