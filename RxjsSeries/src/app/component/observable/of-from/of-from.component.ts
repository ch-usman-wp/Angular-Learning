import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {

  obsMsg: any;



  constructor(private _designUtility: DesignUtilityService){}

  ngOnInit(): void {
    // off 
    const obs1 = of('Anup', 'Shehkhar', 'Sharma');

    obs1.subscribe(res=>{
      this._designUtility.print(res, 'elContainer')
    });
    // off 
    const obs2 = of({a:'Anup', b:'Shehkhar', c:'Sharma'});

    obs2.subscribe(resObj=>{
      this.obsMsg = resObj;
    });

    // from 
    const obs3 = from(['bootstrap', 'angular', 'frontend']);
    obs3.subscribe(res=>{
     this._designUtility.print(res, 'elContainer3')
    });
    
    // from promis 
    const promis = new Promise<string>(resolve =>{
      setTimeout(()=>{
        resolve('Promise resolve');

      },3000);
    });
    const obs4 = from(promis);
    obs4.subscribe((res:string) => {
      console.log("resolve -=>", res)
      this._designUtility.print(res,'elContainer4');
    });
    // from promis 
    const obs5 = from('welcome');
    obs5.subscribe((res: string) => {
      this._designUtility.print(res, 'elContainer5');
    });


  }
}
