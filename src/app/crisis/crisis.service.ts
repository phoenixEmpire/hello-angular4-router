import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';

export class Crisis {
    constructor(public id: number, public name: string) { }
}

const CRISISES = [
    new Crisis(1, 'Dragon Burning Cities'),
    new Crisis(2, 'Sky Rains Great White Sharks'),
    new Crisis(3, 'Giant Asteroid Heading For Earth'),
    new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

@Injectable()
export class CrisisService {
    static nextCrisisId = 100;
    private crisises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISISES);

    getCrisises(): BehaviorSubject<Crisis[]> {
        return this.crisises$;
    }

    getCrisis(id: number | string): Observable<Crisis> {
        return this.getCrisises().pipe(
            map(crisises => crisises.find(crisis => crisis.id === +id))
        );
    }

    addCrisis(name: string) {
        name = name.trim();
        if (name) {
            const crisis = new Crisis(CrisisService.nextCrisisId++, name);
            CRISISES.push(crisis);
            this.crisises$.next(CRISISES);
        }
    }
}
