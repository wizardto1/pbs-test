import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';@Component({
  selector: 'app-page21',
  templateUrl: './page21.component.html',
  styleUrls: ['./page21.component.css']
})
export class Page21Component implements OnInit {
flag;
  time;
  flag2="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore21(flag){
    this.scoresService.setScore21(flag)
    this.scoresService.setLeg8(this.flag2)
    
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore21()
this.flag2=this.scoresService.getLeg8()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}