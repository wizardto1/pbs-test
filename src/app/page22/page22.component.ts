import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page22',
  templateUrl: './page22.component.html',
  styleUrls: ['./page22.component.css']
})
export class Page22Component implements OnInit {
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