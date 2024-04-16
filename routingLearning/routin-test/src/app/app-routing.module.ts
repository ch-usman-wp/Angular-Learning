import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContanctUsComponent } from './contanct-us/contanct-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  // {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'',component:HomeComponent},
  {path:'home', component:HomeComponent,title:'Home Page'},
  {path:'aboutus', component:AboutComponent, title:'About Us'},
  {path:'contactus', component:ContanctUsComponent, title:'Contect Us', canActivate:[authGuard]},

  // {path:'contactusnew/:id', component:ContanctUsComponent, outlet:'outlet2'},

  {path:'login', component:LoginComponent, title:'Login'},


  {path:'**', component:PageNotFoundComponent,title:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
