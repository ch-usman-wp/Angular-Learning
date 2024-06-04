import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, observable } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrl: './custom.component.scss'
})
export class CustomComponent implements OnDestroy {
  techStatus: any;
  subs2!: Subscription;
constructor(private _designUtility: DesignUtilityService){}
  
ngOnInit(): void{
  //Ex - 01 (Manual)
  
  const cusObs1 = Observable.create((observer:any)  => {
  setTimeout(() => {
    observer.next('Angular')
  }, 1000);
  setTimeout(() => {
    observer.next('Typescript')
  }, 2000);
  setTimeout(() => {
    observer.next('HTML and Css');
    // observer.error(new Error ('limit exceed'));

  }, 3000);

  setTimeout(() => {
    observer.next('jQuery');
  }, 3000);
  setTimeout(() => {
    observer.next('React');
    observer.complete();

  }, 3000);
  })
  
  cusObs1.subscribe( (res: any) =>{
    this._designUtility.print(res, 'elContainer');
  },
  (error:any) =>{
    this.techStatus = 'error';
  },
  (complete:any) =>{
    this.techStatus = 'completed';
  });


  // Ex - 02 (custom interval) 

const cusObs2 = Observable.create((observer:any) => {
  let count = 1;
    setInterval(()=>{
      observer.next('data' + count);
      count++;
      if (count >= 5) {
        observer.complete()
      }
    },1000)
  })
  this.subs2 = cusObs2.subscribe((res : any) =>{
    console.log(res)
  })


}
ngOnDestroy(): void {
  this.subs2.unsubscribe();
}
}

