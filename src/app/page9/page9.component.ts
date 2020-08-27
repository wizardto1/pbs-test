import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.css']
})
export class Page9Component implements OnInit {
flag;
  time;
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService) { }

  setScore9(flag){
    this.scoresService.setScore9(flag)
    this.scoresService.setButton9(this.buttonDisabled)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore9();
this.buttonDisabled=this.scoresService.getButton9()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}