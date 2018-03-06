import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { subcategory } from "../../shared/subcategory";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';


/*
  Generated class for the SubcategorydbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubcategorydbProvider {
  url:string="http://localhost:3000/scategories/";
  url1:string="http://localhost:3000/selectedcat/";
  constructor(public http: HttpClient) {
    console.log('Hello SubcategorydbProvider Provider');
  }
  getScategoriesById(id:Number)
  {
    alert(id);
    return this.http.get(this.url+id);

}
addScategories(item:subcategory)
{
  let body=JSON.stringify(item);
  return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
getSelectedcats(item:subcategory)
{
  let body=JSON.stringify(item);
  return this.http.post(this.url1,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
}
}
