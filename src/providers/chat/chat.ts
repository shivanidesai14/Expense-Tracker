import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ApiAiClient } from 'api-ai-javascript';  
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs/Observable';  

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';

/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class Message {  
  
    constructor(public msg: string, public from: string) { }  
  
  } 
@Injectable()
export class ChatProvider {
  readonly token = '7b2381e575db4bec82eadc5c831de503';  
  
    readonly _client = new ApiAiClient({ accessToken: this.token });  
  
    conversation = new BehaviorSubject<Message[]>([]);  
 

  constructor(public http:  HttpClient) {
    console.log('Hello ChatProvider Provider');
  }

  talk(msg: string) {  
    
        const userMessage = new Message(msg, 'user');  
    
        this.update(userMessage);  
    
        return this._client.textRequest(msg)  
    
          .then(res => {  
    
            const speech = res.result.fulfillment.speech;  
    
            const botMessage = new Message(speech, 'bot');  
    
            this.update(botMessage);  
    
          });  
    
      }
      update(msg: Message) {  
        
            this.conversation.next([msg]);  
        
          } 

}
