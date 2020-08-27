import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page11',
  templateUrl: './page11.component.html',
  styleUrls: ['./page11.component.css']
})
export class Page11Component implements OnInit {
flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore11(flag){
    this.scoresService.setScore11(flag)
    this.scoresService.setButton11(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore11()
this.buttonDisabled=this.scoresService.getButton11()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}