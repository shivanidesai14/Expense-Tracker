import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';


/*
  Generated class for the CategorydbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CategorydbProvider {
  url:string="http://localhost:3000/categories/";
  constructor(public http: HttpClient) {
    console.log('Hello CategorydbProvider Provider');
  }
  getAllCategories()
  {
    return this.http.get(this.url);
  }

}
