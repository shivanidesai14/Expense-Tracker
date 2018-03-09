import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers,Response } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
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
  constructor(public http: HttpClient) {
    console.log('Hello Signup1dbProvider Provider');
  }
  fd = new FormData();
  addUsers(fd)
  {
    
    return this.http.post(this.url,fd);
  }

}
