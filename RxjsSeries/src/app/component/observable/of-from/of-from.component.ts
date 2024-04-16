import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {
  constructor(private _designUtility: DesignUtilityService){}

  ngOnInit(): void {
    // off 
    const obs1 = of('Anup', 'Shehkhar', 'Sharma');

    obs1.subscribe(res=>{
      console.log(res);
      this._designUtility.print(res, 'elContainer')
    });


    
  }

}
