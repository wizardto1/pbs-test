import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page10',
  templateUrl: './page10.component.html',
  styleUrls: ['./page10.component.css']
})
export class Page10Component implements OnInit {
 flag;
  time;
  buttonDisabled:boolean=false;
    constructor(private scoresService: ScoresService) { }

  setScore10(flag){
    this.scoresService.setScore10(flag)
    this.scoresService.setButton10(this.buttonDisabled)
     this.scoresService.set10Value(flag)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore10()
this.buttonDisabled=this.scoresService.getButton10()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}