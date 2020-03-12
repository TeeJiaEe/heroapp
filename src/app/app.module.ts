import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailComponent } from './detail/detail.component';
import { HeroProfileComponent } from './hero-profile/hero-profile.component';
import { HeroService } from './hero.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, 
  RouterModule.forRoot([
    {path:'',component:DashboardComponent},
    {path:'heroes', component: HeroesComponent},
    {path: 'detail',component:DetailComponent},
    {path: 'profile', component:HeroProfileComponent},
    
  ])
  
  ],
  declarations: [ AppComponent, DashboardComponent, HeroesComponent, DetailComponent, HeroProfileComponent ],
  bootstrap:    [ AppComponent ],
  providers: [HeroService],

  
})
export class AppModule {}

 
