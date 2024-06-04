import { Component } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.scss'
})
export class ToArrayComponent {
  users=[
    {name: 'usman', skill: 'css'},
    {name: 'usman', skill: 'css'},
    {name: 'usman', skill: 'css'},
    {name: 'usman', skill: 'css'},
    {name: 'usman', skill: 'css'}
  ]

constructor(){}
  sourceSub!: Subscription;
ngOnInit(): void{
  const source = interval(1000);
// Ex - 01 
  this.sourceSub = source.pipe(
    take(10),
    toArray()
    ).subscribe(res =>{
    console.log(res);
    // if(res >= 8){
    //   this.sourceSub.unsubscribe();
    // }
  })
// Ex - 02

const source2 = from(this.users)
source2.pipe(toArray()).subscribe((res: any)=>{
  console.log(res)
})

const source3 = of('usman', 'usman2', 'usman3', 'usman4')

source3.pipe(toArray()).subscribe((res: any)=>{
  console.log('of array', res)
})





}
 
}
