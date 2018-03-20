import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';
import { category } from '../../shared/category';
import { Item } from 'ionic-angular/components/item/item';


/*
  Generated class for the CategorydbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategorydbProvider {
  
  url:string="https://exptracker1.herokuapp.com/categories/";
  constructor(public http: HttpClient) {
    console.log('Hello CategorydbProvider Provider');
  }
  getAllCategories()
  {
    return this.http.get(this.url);
  }
  getCategoriesById(id:string)
  {
    return this.http.get(this.url+id);
  }
  addCategories(item:category)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

}
