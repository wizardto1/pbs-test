import { Injectable } from '@angular/core';
import { AppModule } from './app.module';

@Injectable()
export class ScoresService {
  scores:[any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any,any];
  score1:any;
  score2:any;
  score3:any;
  score4:any;
  score5:any;
  score6:any;
  score7:any;
  score8:any;
  score9:any;
  score10:any;
  score11:any;
  score12:any;
  score13:any;
  score14:any;
  score15:any;
  score16:any;
  score17:any;
  score18:any;
  score19:any;
  score20:any;
  score21:any;
  score22:any;
  button1:boolean;
  button2:boolean;
  button3:boolean;
  button4:boolean;
  button5:boolean;
  button6:boolean;
  button7:boolean;
  button8:boolean;
  button9:boolean;
  button10:boolean;
  button11:boolean;
  button12:boolean;
  button13:boolean;
  button14:boolean;
  total:number=0;
  max;
  setScore1(score){
    this.score1=score;
    console.log(this.score1)
  }
  getScore1(){
    return this.score1
  }
  setButton1(button){
    this.button1=button;
  }
  getButton1(){
    return this.button1;
  }
  setScore2(score){
    this.score2=score;
    
  }
  getScore2(){
    return this.score2
    
  }
  setButton2(button){
    this.button2=button;
  }
  getButton2(){
    return this.button2;
  }
  setScore3(score){
    this.score3=score;
    this.scores[0]=score;
  }
  getScore3(){
    return this.score3
  }
  setButton3(button){
    this.button3=button;
  }
  getButton3(){
    return this.button3;
  }
   setScore4(score){
    this.score4=score;
    this.scores[1]=score;
  }
  getScore4(){
    return this.score4
  }
  setButton4(button){
    this.button4=button;
  }
  getButton4(){
    return this.button4;
  }
  setScore5(score){
    this.score5=score;
    this.scores[2]=score;
  }
  getScore5(){
    return this.score5
  }
  setButton5(button){
    this.button5=button;
  }
  getButton5(){
    return this.button5;
  }
  setScore6(score){
    this.score6=score;
    this.scores[3]=score;
  }
  getScore6(){
    return this.score6
  }
  setButton6(button){
    this.button6=button;
  }
  getButton6(){
    return this.button6;
  }
  setScore7(score){
    this.score7=score;
    this.scores[4]=score;
  }
  getScore7(){
    return this.score7
  }
  setButton7(button){
    this.button7=button;
  }
  getButton7(){
    return this.button7;
  }
  setScore8(score){
    this.score8=score;
    this.scores[5]=score;
  }
  getScore8(){
    return this.score8
  }
  setButton8(button){
    this.button8=button;
  }
  getButton8(){
    return this.button8;
  }
  setScore9(score){
    this.score9=score;
    this.scores[6]=score;
  }
  getScore9(){
    return this.score9
  }
  setButton9(button){
    this.button9=button;
  }
  getButton9(){
    return this.button9;
  }
  setScore10(score){
    this.score10=score;
    this.scores[7]=score;
  }
  getScore10(){
    return this.score10
  }
  setButton10(button){
    this.button10=button;
  }
  getButton10(){
    return this.button10;
  }
  setScore11(score){
    this.score11=score;
    this.scores[8]=score;
  }
  getScore11(){
    return this.score11
  }
  setButton11(button){
    this.button11=button;
  }
  getButton11(){
    return this.button11;
  }
  setScore12(score){
    this.score12=score;
    this.scores[9]=score;
  }
  getScore12(){
    return this.score12
  }
  setButton12(button){
    this.button12=button;
  }
  getButton12(){
    return this.button12;
  }
  setScore13(score){
    this.score13=score;
    this.scores[10]=score;
  }
  getScore13(){
    return this.score13
  }
  setButton13(button){
    this.button13=button;
  }
  getButton13(){
    return this.button13;
  }
  setScore14(score){
    this.score14=score;
    this.scores[11]=score;
    console.log(this.scores)
  }
  getScore14(){
    return this.score14
  }
  setButton14(button){
    this.button14=button;
  }
  getButton14(){
    return this.button14;
  }
setScore15(score){
    this.score15=score;
    this.scores[12]=score;
    console.log(this.scores)
  }
  getScore15(){
    return this.score16
  }setScore16(score){
    this.score16=score;
    this.scores[13]=score;
    console.log(this.scores)
  }
  getScore16(){
    return this.score16
  }setScore17(score){
    this.score17=score;
    this.scores[14]=score;
    console.log(this.scores)
  }
  getScore17(){
    return this.score18
  }setScore18(score){
    this.score18=score;
    this.scores[15]=score;
    console.log(this.scores)
  }
  getScore18(){
    return this.score18
  }setScore19(score){
    this.score19=score;
    this.scores[16]=score;
    console.log(this.scores)
  }
  getScore19(){
    return this.score19
  }setScore20(score){
    this.score20=score;
    this.scores[17]=score;
    console.log(this.scores)
  }
  getScore20(){
    return this.score20
  }setScore21(score){
    this.score21=score;
    this.scores[18]=score;
    console.log(this.scores)
  }
  getScore21(){
    return this.score21
  }setScore22(score){
    this.score22=score;
    this.scores[19]=score;
    console.log(this.scores)
  }
  getScore22(){
    return this.score22
  }
  gettotal(){
    this.total=0;
    this.max=56
    for (let i = 0; i < 14; i++){
      if (this.scores[i]=='skip'){
        console.log(this.max)
        this.max-=4;
      }
      else{
      this.total+=parseInt(this.scores[i]);
      console.log(this.total)}
    }
    console.log(this.total)
    return this.total;
  }
  getmax(){
    return this.max;
  }
  reset(){
  this.scores=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  this.score1=0;
  this.score2=0;
  this.score3=0;
  this.score4=0;
  this.score5=0;
  this.score6=0;
  this.score7=0;
 this.score8=0;
  this.score9=0;
  this.score10=0;
  this.score11=0;
  this.score12=0;
  this.score13=0;
  this.score14=0;
  this.score15=0;
  this.score16=0;
  this.score17=0;
  this.score18=0;
  this.score19=0;
  this.score20=0;
  this.score21=0;
  this.score22=0;
  this.button1=false;
  this.button2=false;
  this.button3=false;
  this.button4=false;
  this.button5=false;
  this.button6=false;
  this.button7=false;
  this.button8=false;
  this.button9=false;
  this.button10=false;
  this.button11=false;
  this.button12=false;
  this.button13=false;
  this.button14=false;
  this.total=0;
  this.max=56;
  return
  }





  constructor() { }

}