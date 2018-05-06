import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hero, HeroService } from '../hero.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  selectedId: number;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(switchMap((paramMap: ParamMap) => {
      this.selectedId = +paramMap.get('id');
      return this.heroService.getHeroes();
    }));

  }

}
