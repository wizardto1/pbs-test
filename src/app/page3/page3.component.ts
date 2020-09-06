import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore3(flag){
    this.scoresService.setScore3(flag)
    this.scoresService.setButton3(this.buttonDisabled)
     this.scoresService.set3Value(flag)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore3();
this.buttonDisabled=this.scoresService.getButton3()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}