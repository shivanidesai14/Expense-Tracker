import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*
  Generated class for the LogindbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogindbProvider {
  public url:string="http://localhost:3000/login";
  constructor(public http: Http) {
    console.log('Hello LogindbProvider Provider');
  }
getUserByLogin(item)
  {
    let body=JSON.stringify(item);
    let h=new Headers({'content-type':'application/json'});
    let rs=new RequestOptions({headers:h});
    return this.http.post(this.url,body,rs).map( (res:Response)=>res.json());
  }

}
