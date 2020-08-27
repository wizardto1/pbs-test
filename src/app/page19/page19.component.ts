import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page19',
  templateUrl: './page19.component.html',
  styleUrls: ['./page19.component.css']
})
export class Page19Component implements OnInit {
flag;
  time;
  flag2;
  buttonDisabled:boolean=false;
 constructor(private scoresService: ScoresService) { }

  setScore19(flag){
    this.scoresService.setScore19(flag)
    
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore19()

  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}