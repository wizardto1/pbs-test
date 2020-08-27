import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';@Component({
  selector: 'app-page21',
  templateUrl: './page21.component.html',
  styleUrls: ['./page21.component.css']
})
export class Page21Component implements OnInit {
flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
  constructor() { }

  ngOnInit() {
  }
radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}