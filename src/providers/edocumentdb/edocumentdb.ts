import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Edocument } from "../../shared/edoc";

/*
  Generated class for the EdocumentdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EdocumentdbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EdocumentdbProvider Provider');
  }
  url:string="http://localhost:3000/edoc/";
  getEdocById(id:string)
  {
    return this.http.get(this.url+id);
  }

}
