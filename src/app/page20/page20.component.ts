import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page20',
  templateUrl: './page20.component.html',
  styleUrls: ['./page20.component.css']
})
export class Page20Component implements OnInit {
flag;
flag2;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore20(flag){
    this.scoresService.setScore20(flag)
    
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore20()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}