import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { slideInDownAnimation } from '../../animations';
import { HeroService, Hero } from '../hero.service';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent implements OnInit {

  // 把路由动画应用到独立的组件中
  @HostBinding('@routeAnimation')
  routeAnimation = true;
  @HostBinding('style.display')
  display = 'block';
  @HostBinding('style.position')
  position = 'absolute';

  hero$: Observable<Hero>;

  constructor(private route: ActivatedRoute, private router: Router, private heroService: HeroService) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((paramMap: ParamMap) => {
        return this.heroService.getHero(paramMap.get('id'));
      })
    );
  }

  gotoHeroes(hero: Hero) {
    // 路由可选参数
    this.router.navigate(['/heroes', { id: hero ? hero.id : null, person: 'Leonardo' }]);
  }

}
