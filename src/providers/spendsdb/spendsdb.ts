import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import {Spends } from "../../shared/spends";
/*
  Generated class for the SpendsdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpendsdbProvider {
public url:string="http://localhost:3000/expenses/";
  constructor(public http: HttpClient) {
    console.log('Hello SpendsdbProvider Provider');
  }
  getALlSpends()
  {
    return this.http.get(this.url);
  }
  getALlSpendsById(id:string)
  {
      return this.http.get(this.url+id);
  }
   addSpends(item:Spends)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
   deleteSpends(item:Spends)
  {
     return this.http.delete(this.url+item.expense_id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
