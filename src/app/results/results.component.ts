import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}