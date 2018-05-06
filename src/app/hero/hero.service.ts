import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators/delay';
import { map } from 'rxjs/operators/map';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

  getHero(id: number | string): Observable<Hero> {
    return this.getHeroes()
      .pipe(delay(1000))
      .pipe(
        map(heroes => heroes.find(hero => hero.id === +id)) // +把string转换成number
      );
  }
}




