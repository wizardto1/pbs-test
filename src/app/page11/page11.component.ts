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
    this.scoresService.setDevice2(this.flag2)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore11()
this.buttonDisabled=this.scoresService.getButton11()
this.flag2=this.scoresService.getDevice2()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}