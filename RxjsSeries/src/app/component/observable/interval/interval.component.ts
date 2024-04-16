import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';


@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {
obsMesg: string | undefined;
videoSubscription!: Subscription;
constructor(private _designUtility: DesignUtilityService){}
ngOnInit(){

  
  // const broadCastVideo = interval(2000);
  // timer (dealay,interval )
  const broadCastVideo = timer(5000, 1000);

  this.videoSubscription = broadCastVideo.subscribe(res=>{
    this.obsMesg = 'video ' + res;
    this._designUtility.print(this.obsMesg, 'elContener')

    if(res>= 5){
      this.videoSubscription.unsubscribe();
    }
  })
}
}
