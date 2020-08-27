import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page15',
  templateUrl: './page15.component.html',
  styleUrls: ['./page15.component.css']
})
export class Page15Component implements OnInit {
flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService) { }

  setScore15(flag){
    this.scoresService.setScore15(flag)
    
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore15()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}