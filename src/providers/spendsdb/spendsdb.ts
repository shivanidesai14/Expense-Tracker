import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

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

}
