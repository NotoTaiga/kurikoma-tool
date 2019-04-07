import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { timer } from 'rxjs';

@Component({
  selector: 'app-show-timer',
  templateUrl: './show-timer.component.html',
  styleUrls: ['./show-timer.component.scss']
})
export class ShowTimerComponent implements OnInit {
  public inputMode:boolean = true;
  public showMode:boolean = false;

  public inputNumber;

  private timeMs:number;

  public timerStart(){
    this.inputMode=false;
    this.showMode=true;
    this.fixMsTime(this.inputNumber);
    this.fixNormalTime();
    this.timer();
  }

  private timer():void{
    let id = setInterval(()=>{
      this.timeMs -= 1000;
      this.fixNormalTime();
      if (this.timeMs === 0) {
        this.cancelTimer();
      }
    },1000);

    this.cancelTimer = function(){
      clearInterval(id);
      this.timeText = "00 : 00 : 00";
      this.inputMode=true;
      this.showMode=false;
    }
  }

  public cancelTimer;

  private fixMsTime(time:number):void{
    this.timeMs = time * 60 * 1000;
  }

  public timeText:string = "00 : 00 : 00";
  private fixNormalTime(){
    let n = this.timeMs;
    let h = Math.floor(n / 3600000);
    n = n - h * 3600000;
    let m = Math.floor(n / 60000);
    n = n - m * 60000;
    let s = Math.floor(n / 1000);

    let stringH:string =String(h);
    stringH = ( '00' + stringH ).slice( -2 );

    let stringM:string =String(m);
    stringM = ( '00' + stringM ).slice( -2 );

    let stringS:string =String(s);
    stringS = ( '00' + stringS ).slice( -2 );

    this.timeText = stringH + " : " + stringM + " : " + stringS;
  }

  constructor() { }

  ngOnInit() {
  }

}
