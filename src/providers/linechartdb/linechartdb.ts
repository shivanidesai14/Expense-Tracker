import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';

/*
  Generated class for the LinechartdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LinechartdbProvider {
str1:any="";
  url:string="http://exptracker1.herokuapp.com/linechart/";
  urldouchart:string="http://exptracker1.herokuapp.com/doughnut/";
  urlbarchart:string="http://exptracker1.herokuapp.com/bchart/";
  constructor(public http: HttpClient) {
    console.log('Hello LinechartdbProvider Provider');
  }
  getexpforline(id:string)
  {
    return this.http.get(this.url+id);
  }
  getexps(id:string,mon:number)
  {
     return this.http.get(this.urldouchart+id+"/"+mon);
  }
  getexpforbar(id:string)
  {
 
    return this.http.get(this.urlbarchart+id)
  }

}
