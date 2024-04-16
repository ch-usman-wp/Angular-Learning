import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../../appServices/design-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrl: './form-event.component.scss'
})
export class FormEventComponent implements OnInit, AfterViewInit {
constructor(private _desginutility: DesignUtilityService){}
ngOnInit(): void {}

@ViewChild('addBtn') addBtn!: ElementRef;


ngAfterViewInit(): void {
  let count = 1;
  fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
    let countVal = 'Video' + count++
    this._desginutility.print(countVal, 'elContener');
    this._desginutility.print(countVal, 'elContener2');
  })
}





}
