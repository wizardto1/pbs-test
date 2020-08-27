import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page18',
  templateUrl: './page18.component.html',
  styleUrls: ['./page18.component.css']
})
export class Page18Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  flag2;
  constructor() { }

  ngOnInit() {
  }
radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}