import { Component, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  qs=0;
  so=0;
  apa=0;
  pr=0;
  sg=0;
  to=0;
  total=0;
  score1=0;
  score2="skip";
  score3=0;
  score4="skip";
  score5="skip";
  score6="skip";
  score7="skip";
  score8="skip";
  score9="skip";
  score10="skip";
  score11="skip";
  score12=0;
  score13=0;
  score14=0;
  score15=0;
  score16=0;
  score17=0;
  score18=0;
  score19=0;
  score20=0;
  score21=0;
  score22=0;
  time1="-"
  note1="-";
  note2="-";
  note3="-";
  note4="-";
  note5="-";
  note6="-";
  note7="-";
note8="-";
note9="-";
  note10="-";
  note11="-";
  note12="-";
  note13="-";
  note14="-";
  note15="-";
  note16="-";
  note17="-";
  note18="-";
  note19="-";
  note20="-";
  note21="-";
  note22="-";
  
  constructor(private scoresService: ScoresService){ }
  reset(){
    this.scoresService.reset();
  }
  ngOnInit() {
    this.total=this.scoresService.gettotal();
    this.qs=this.scoresService.getqs();
    this.so=this.scoresService.getso();
    this.apa=this.scoresService.getapa();
    this.pr=this.scoresService.getpr();
    this.sg=this.scoresService.getsg();
    this.score1=this.scoresService.getScore1();
    this.score2=this.scoresService.getScore2();
    this.score3=this.scoresService.getScore3();
    this.score4=this.scoresService.getScore4();
    this.score5=this.scoresService.getScore5();
    this.score6=this.scoresService.getScore6();
    this.score7=this.scoresService.getScore7();
    this.score8=this.scoresService.getScore8();
    this.score9=this.scoresService.getScore9();
    this.score10=this.scoresService.getScore10();
    this.score11=this.scoresService.getScore11();
    this.score12=this.scoresService.getScore12();
    this.score13=this.scoresService.getScore13();
    this.score14=this.scoresService.getScore14();
    this.score15=this.scoresService.getScore15();
    this.score16=this.scoresService.getScore16();
    this.score17=this.scoresService.getScore17();
    this.score18=this.scoresService.getScore18();
    this.score19=this.scoresService.getScore19();
    this.score20=this.scoresService.getScore20();
    this.score21=this.scoresService.getScore21();
    this.score22=this.scoresService.getScore22();

  }

}