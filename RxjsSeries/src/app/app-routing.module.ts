import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiseComponent } from './component/promise/promise.component';
import { ObservableComponent } from './component/observable/observable.component';
import { ListComponent } from './component/observable/list/list.component';
import { FormEventComponent } from './component/observable/form-event/form-event.component';
import { IntervalComponent } from './component/observable/interval/interval.component';
import { OfFromComponent } from './component/observable/of-from/of-from.component';
import { ToArrayComponent } from './component/observable/to-array/to-array.component';
import { CustomComponent } from './component/observable/custom/custom.component';


const routes: Routes = [
  {path:'promise', component:PromiseComponent, title:'promise'},
  {path:'observable', component:ObservableComponent, title:'observable', children:[
    {path: '', component:ListComponent, title:'all'},
    {path: 'formEvent', component:FormEventComponent, title:'form-event'},
    {path: 'interval', component:IntervalComponent, title:'interval'},
    {path: 'to-array', component:ToArrayComponent, title:'to-array'},
    {path: 'ofFrom', component:OfFromComponent, title:'to-array'},
    {path: 'customObser', component:CustomComponent, title:'customObser'},
  ]},
 
  {path:'**', redirectTo:'promise'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
