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
  constructor(private scoresService: ScoresService){ }
  reset(){
    this.scoresService.reset();
  }
  ngOnInit() {
    this.total=this.scoresService.gettotal();
  }

}