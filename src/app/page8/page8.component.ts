import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-page8',
  templateUrl: './page8.component.html',
  styleUrls: ['./page8.component.css']
})
export class Page8Component implements OnInit {
flag;
  time;
  flag2='-';
  buttonDisabled:boolean=false;
constructor(private scoresService: ScoresService) { }

  setScore8(flag){
    this.scoresService.setScore8(flag)
    this.scoresService.setButton8(this.buttonDisabled)
    this.scoresService.setDevice1(this.flag2)
     this.scoresService.set8Value(flag)
  }
  ngOnInit() {
  
this.flag=this.scoresService.getScore8();
this.flag=this.scoresService.getDevice1();
this.buttonDisabled=this.scoresService.getButton8()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }

}