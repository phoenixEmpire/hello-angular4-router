import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Crisis, CrisisService } from './crisis.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators/switchMap';

@Component({
    template: `
        <ul class="items">
            <li *ngFor="let crisis of crisises$ | async"
                [class.selected]="crisis.id===selectedId">
                <a [routerLink]="[crisis.id]">
                    <span class="badge">{{crisis.id}}</span>{{crisis.name}}
                </a>
            </li>
        </ul>

        <router-outlet></router-outlet>
    `
})
export class CrisisListComponent implements OnInit {
    crisises$: Observable<Crisis[]>;
    selectedId: number;
    constructor(
        private service: CrisisService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.crisises$ = this.route.paramMap.pipe(
            switchMap((paramMap: ParamMap) => {
                this.selectedId = +paramMap.get('id');
                return this.service.getCrisises();
            })
        );
    }
}
