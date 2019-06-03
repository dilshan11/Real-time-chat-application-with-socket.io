import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ab=[];
    aa;
    bb;
  reg=new FormGroup({
    ema: new FormControl(),
    pas:new FormControl()
  })
  
  
  constructor(private chatservice:ChatService) {
   
  }

  ngOnInit() {
    let a;
   this.chatservice.socket.on('chat',(data)=>{
     
      this.aa=data.message;
       this.bb=data.name;
      this.ab.push(data);
   });
   
  }
  send(){
     
    this.chatservice.sendtoserver(this.reg.value);
    this.reg.setValue({
      ema:'',
      pas:''
    })
  }
}
