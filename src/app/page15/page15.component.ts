import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page15',
  templateUrl: './page15.component.html',
  styleUrls: ['./page15.component.css']
})
export class Page15Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  constructor() { }

  ngOnInit() {
  }
radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}