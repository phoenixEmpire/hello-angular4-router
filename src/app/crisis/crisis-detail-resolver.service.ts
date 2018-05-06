import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Crisis, CrisisService } from './crisis.service';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators/take';
import { map } from 'rxjs/operators/map';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
    constructor(private crisisService: CrisisService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
        const id = route.paramMap.get('id');
        return this.crisisService.getCrisis(id).pipe(
            take(1),
            map(crisis => {
                if (crisis) {
                    return crisis;
                } else {
                    this.router.navigate(['/crisis-center']);
                    return null;
                }
            })
        );
    }
}

