import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions,Response } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
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
  constructor(public http: HttpClient) {
    console.log('Hello SubcategorydbProvider Provider');
  }
  getScategoriesById(id:Number)
  {
    return this.http.get(this.url+id);

}
}
