import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the CatsubcatdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class CatsubcatdbProvider {
url:string="http://localhost:3000/catsubcat/";
  constructor(public http: Http) {
    console.log('Hello CatsubcatdbProvider Provider');
  }
  getCatSubcat()
  {
    return this.http.get(this.url).map((res:Response)=>res.json());
  }

}
