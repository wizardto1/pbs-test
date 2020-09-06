import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page14',
  templateUrl: './page14.component.html',
  styleUrls: ['./page14.component.css']
})
export class Page14Component implements OnInit {
flag;
  time;
  flag2="-";
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService) { }

  setScore14(flag){
    this.scoresService.setScore14(flag)
    this.scoresService.setButton14(this.buttonDisabled)
    this.scoresService.setLeg5(this.flag2)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore14()
this.buttonDisabled=this.scoresService.getButton14() 
this.flag2=this.scoresService.getLeg5()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}