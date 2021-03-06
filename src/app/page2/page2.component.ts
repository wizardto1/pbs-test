import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
 flag;
  time;
  note="-";
  flag2="-";
  buttonDisabled:boolean=false;
   constructor(private scoresService: ScoresService, private router: Router) { }

  setScore2(flag){
    this.scoresService.setScore2(flag)
    this.scoresService.setButton2(this.buttonDisabled)
    this.scoresService.setLeg2(this.flag2)
    this.scoresService.setnote2(this.note)
  }
  gotoPage(flag){
    if (flag=="no"){
       debugger;
       this.scoresService.setScore3(1);
        this.scoresService.setScore4(1);
    this.scoresService.setScore5(1);
    this.scoresService.setScore6(1);
    this.scoresService.setScore7(1);
    this.scoresService.set3Value("skipped (1)");
     this.scoresService.set4Value("skipped (1)");
      this.scoresService.set5Value("skipped (1)");
       this.scoresService.set6Value("skipped (1)");
        this.scoresService.set7Value("skipped (1)");
    this.router.navigate(['/page8']);
    ; }
    else if (flag=="passed"){
      this.scoresService.setScore3(1);
        this.scoresService.setScore4(1);
         this.scoresService.setScore5(1);
          this.scoresService.setScore6(1);
           this.scoresService.setScore7(1);
           this.scoresService.setScore8(1);
        this.scoresService.setScore9(1);
         this.scoresService.setScore10(1);
          this.scoresService.setScore11(1);
           this.scoresService.set3Value("skipped (1)");
            this.scoresService.set4Value("skipped (1)");
             this.scoresService.set5Value("skipped (1)");
              this.scoresService.set6Value("skipped (1)");
               this.scoresService.set7Value("skipped (1)");
               this.scoresService.set8Value("skipped (1)");
                this.scoresService.set9Value("skipped (1)");
                 this.scoresService.set10Value("skipped (1)");
                  this.scoresService.set11Value("skipped (1)");
                  
      this.router.navigate(['/page12']);}
      else{
        this.router.navigate(['/page3']);}
      }
  OnInput (event:any){
      this.note = event.target.value;
      console.log(this.note)
    }
  
  ngOnInit() {
  
this.flag=this.scoresService.getScore2();
this.buttonDisabled=this.scoresService.getButton2();
this.flag2=this.scoresService.getLeg2();
  }
  radioEventHandler(event:any){
    
    this.buttonDisabled=true;
  }
}