import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { subcatexp } from '../../shared/SubCatExpJoin';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';
import { SpendsSubcat } from '../../shared/spendsSubcat';

/*
  Generated class for the SubcatexpdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubcatexpdbProvider {
url:string="http://exptracker1.herokuapp.com/subcatexp/"
url1:string="http://exptracker1.herokuapp.com/expbycolor/"


  constructor(public http: HttpClient) {
    console.log('Hello SubcatexpdbProvider Provider');
  }
  getAllSubCatByJoin(id:string,item:subcatexp)
  {
      
        let body=JSON.stringify(item);
        return this.http.post(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  
  getExpenseByColor(item:SpendsSubcat)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
}
