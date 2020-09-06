import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore6(flag){
    this.scoresService.setScore6(flag)
    this.scoresService.setButton6(this.buttonDisabled)
     this.scoresService.set6Value(flag)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore6();
this.buttonDisabled=this.scoresService.getButton6()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}