import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page17',
  templateUrl: './page17.component.html',
  styleUrls: ['./page17.component.css']
})
export class Page17Component implements OnInit {
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