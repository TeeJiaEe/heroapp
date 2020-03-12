import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})


export class HeroProfileComponent implements OnInit {
selectedhero;
selectedHero;
name;
  constructor( 
    //private heroservice: HeroService
    private route: ActivatedRoute,
    private service: HeroService,
    ) {

   }

  ngOnInit() {
    //this does not work as it only runs but not returning any value
    //this.selectedhero = this.heroservice.getprofile(selectedHero);
         this.selectedhero= this.route.paramMap.subscribe(
      (params => {
        // (+) before `params.get()` turns the string into a number
         params.get('selectedHero.name')}));
         console.log("params.get('selectedHero.name')");
         //return this.service.getprofile(this.selectedHero);
  }
}