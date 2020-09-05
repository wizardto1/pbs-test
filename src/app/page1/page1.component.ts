import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  flag;
  
  flag2;
  time;
  buttonDisabled:boolean=false;
  constructor(private scoresService: ScoresService, private router: Router ) { }

  setScore1(flag){
    this.scoresService.setScore1(flag)
    this.scoresService.setButton1(this.buttonDisabled)
  }
  gotoPage(flag){
    
    if (flag==0){
    this.router.navigate(['/page3']); }
    else{
      this.router.navigate(['/page2']);}
    }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore1()
this.buttonDisabled=this.scoresService.getButton1()
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}