import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
today= new Date();
  jstoday = '';
  testnumber:number=1
  constructor() {this.jstoday = formatDate(this.today, 'MM-dd-yyyy ', 'en-US'); }

  ngOnInit() {
  }

}