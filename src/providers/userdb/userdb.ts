import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Users } from "../../shared/users";
import 'rxjs/add/operator/map';

/*
  Generated class for the UserdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserdbProvider {
 public url:string="http://localhost:3000/userss/";

  constructor(public http: HttpClient) {
    console.log('Hello UserdbProvider Provider');
  }
  getAllUsers()
  {
    return this.http.get(this.url);
  }
 getUsersById(id:string)
 {
      return this.http.get(this.url+id);
 }
 public url1:string="http://localhost:3000/chagepass/";
 changePassword(id:string,item:Users)
 {

  let body=JSON.stringify(item);
  return this.http.put(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
updateUsers(item:Users)
{
  
  let body=JSON.stringify(item);
  return this.http.put(this.url+item.user_email,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
}
