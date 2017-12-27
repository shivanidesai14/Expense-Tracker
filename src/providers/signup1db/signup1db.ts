import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the Signup1dbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Signup1dbProvider {
  public url:string="http://localhost:3000/userss/";
  constructor(public http: Http) {
    console.log('Hello Signup1dbProvider Provider');
  }
  addUsers(item)
  {
    console.log('hello');
    let body=JSON.stringify(item);
    let h=new Headers({'content-type':'application/json'});
    let rs=new RequestOptions({headers:h});
    return this.http.post(this.url,body,rs).map( (res:Response)=>res.json());
  }

}
