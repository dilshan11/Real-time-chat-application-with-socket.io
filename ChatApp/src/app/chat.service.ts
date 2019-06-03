import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
// import { Socket } from 'net';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  socket;
  data
  on;
  constructor() {
    this.socket  =io.connect('http://localhost:4000');
      this.socket.on('chat',function(data){
      this.data=data ;
    })
   }
   sendtoserver(me){

    this.socket.emit('chat',{
      message:me.pas,
      name:me.ema
    });
   }
  // getmessage(){
  //   return new Observable(obser=>{
  //     obser.next(this.data);
  //   })
  // }
  }