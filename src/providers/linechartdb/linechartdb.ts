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
  url:string="http://localhost:3000/linechart/";
  constructor(public http: HttpClient) {
    console.log('Hello LinechartdbProvider Provider');
  }
  getexpforline(id:string)
  {
    //alert('hello');
   // alert(id);
    //alert(mail);
    return this.http.get(this.url+id);
    
  }

}
