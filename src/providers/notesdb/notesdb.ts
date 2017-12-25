import { Injectable } from '@angular/core';
import { Http ,Response,Headers,RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
/*

  Generated class for the NotesdbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesdbProvider {
public url:string="http://localhost:3000/notes/";
  constructor(public http: Http) {
    console.log('Hello NotesdbProvider Provider');
  }
   getAllNotes()
  {
    return this.http.get(this.url).map((res:Response)=>res.json());
  }
    deleteNotes(item)
  {
    let h=new Headers({'Content-Type':'application/json'});
    let res=new RequestOptions({headers:h});

    return this.http.delete(this.url+item.notes_id,res).map((res:Response)=>res.json());
  }
  editTask(item)
  {
       let body=JSON.stringify(item);
    let h=new Headers({'Content-Type':'application/json'});
    let res=new RequestOptions({headers:h});

    return this.http.post(this.url+item.notes_id,body,res).map((res:Response)=>res.json());
  }
   

}
