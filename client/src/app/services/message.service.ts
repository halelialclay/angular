import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from '../dto/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getMessages(myId:string,hisId:string){
    return this.http.get<Message[]>(`/api/message?myId=${myId}&hisId=${hisId}`)
  }

  getNumMessages(myId:string){
    return this.http.get<{_id:string,count:number}[]>(`/api/message/Num?myId=${myId}`)
  }
  sendMessage(message:Message){
    return this.http.post<Message[]>("/api/message",message)
  }
 

}
