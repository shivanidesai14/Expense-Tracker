import { Injectable } from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import { Users } from "../../shared/users";
import 'rxjs/add/operator/map';

/*
  Generated class for the UserdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserdbProvider {
 
  constructor(public http: Http) {
    console.log('Hello UserdbProvider Provider');
  }
 

}
