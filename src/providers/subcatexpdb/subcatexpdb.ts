import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { subcatexp } from '../../shared/SubCatExpJoin';
import { demo } from "../../shared/demo";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

import 'rxjs/Rx';

/*
  Generated class for the SubcatexpdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SubcatexpdbProvider {
public url:string="http://localhost:3000/subcatexp/";
  constructor(public http: HttpClient) {
    console.log('Hello SubcatexpdbProvider Provider');
  }
  getAllSubCatByJoin(id:string,item:demo)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
      //return this.http.get(this.url+id);
  }

}
