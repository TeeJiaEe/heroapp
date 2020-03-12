import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
 
//import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
 //create var for HEROES array
  heroes = HEROES;
  selectedHero;
  constructor(
    //private heroservice:HeroService,
    //private route: ActivatedRoute,
    private service: HeroService,
  ) { }
 
 ngOnInit() {
      //this.route.paramMap.subscribe(params => this.onSelect(params['hero.name']))
       /* this.selectedHero= this.route.paramMap.subscribe(
      (params => {
        // (+) before `params.get()` turns the string into a number
         this.onSelect('hero.name')}));*/
      }

 onSelect(hero) {
  this.selectedHero = hero;
  console.log('3');
  }
 }