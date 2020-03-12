import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  selectedhero;

 
   
   getprofile(selectedHero)
   {
      this.selectedhero= selectedHero;
      console.log('2');
   }

  constructor() { }

}