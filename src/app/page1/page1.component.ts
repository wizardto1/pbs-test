import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore1(flag){
    this.scoresService.setScore1(flag)
    this.scoresService.setButton1(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore1()
this.buttonDisabled=this.scoresService.getButton1()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}