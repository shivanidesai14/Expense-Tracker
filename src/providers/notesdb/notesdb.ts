import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {HttpClient,HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Notes } from "../../shared/notes";
/*

  Generated class for the NotesdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesdbProvider {
public url:string="http://localhost:3000/notes/";
public url2:string="http://localhost:3000/notedesc/";
  constructor(public http: HttpClient) {
    console.log('Hello NotesdbProvider Provider');
  }
   getAllNotes()
  {
    return this.http.get(this.url);
  }
    deleteNotes(item:Notes)
  {
    

    return this.http.delete(this.url+item.notes_id,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
  editNotes(item:Notes)
  {
       // alert('provider to update');
        let body=JSON.stringify(item);
        return this.http.put(this.url+item.notes_id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }
    addNotes(item:Notes)
  {
    let body=JSON.stringify(item);
    return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
  }

  getNotesById(id:string){

    return this.http.get(this.url+id);
  }
  getNoteDesc(id:number){
    return this.http.get(this.url2+id);
  }
}
