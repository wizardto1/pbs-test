import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page12',
  templateUrl: './page12.component.html',
  styleUrls: ['./page12.component.css']
})
export class Page12Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore12(flag){
    this.scoresService.setScore12(flag)
    this.scoresService.setButton12(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore12()
this.buttonDisabled=this.scoresService.getButton12()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}