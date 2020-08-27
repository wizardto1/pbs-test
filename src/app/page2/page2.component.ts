import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
 flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService) { }

  setScore2(flag){
    this.scoresService.setScore2(flag)
    this.scoresService.setButton2(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore2();
this.buttonDisabled=this.scoresService.getButton2()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}