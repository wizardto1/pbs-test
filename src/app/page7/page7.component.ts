import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.css']
})
export class Page7Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore7(flag){
    this.scoresService.setScore7(flag)
    this.scoresService.setButton7(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore7();
this.buttonDisabled=this.scoresService.getButton7()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}