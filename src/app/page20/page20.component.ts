import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page20',
  templateUrl: './page20.component.html',
  styleUrls: ['./page20.component.css']
})
export class Page20Component implements OnInit {
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