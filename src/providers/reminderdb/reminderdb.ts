import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Reminder } from "../../shared/reminder";


/*
  Generated class for the ReminderdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReminderdbProvider {
public url:string="http://exptracker1.herokuapp.com/reminder/"
  constructor(public http: HttpClient) {
    console.log('Hello ReminderdbProvider Provider');
  }
  getRemindersById(id:string)
  {
    return this.http.get(this.url+id);
  }
  addReminder(item:Reminder)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  deleteReminder(item:Reminder)
  {
    return this.http.delete(this.url+item.rem_id,{headers:new HttpHeaders().set('Content-Type','application/json')});

  }
  updateReminder(item:Reminder)
  {
  let body=JSON.stringify(item);
  return this.http.put(this.url+item.rem_id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  public url1:string="http://localhost:3000/reminderid/"
  getReminder(id:number)
  {
      return this.http.get(this.url1+id);
  }
}
