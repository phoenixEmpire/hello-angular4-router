import { Component, OnInit, HostBinding, Host } from '@angular/core';
import { slideInDownAnimation } from '../animations';
import { Crisis } from './crisis.service';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { DialogService } from '../dialog.service';
import { CanDeativateComponent } from '../can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
    template: `
        <div *ngIf="crisis">
            <h3>"{{ editName }}"</h3>
            <div>
                <label>Id: </label>{{ crisis.id }}
                <div>
                    <label>Name: </label>
                    <input [(ngModel)]="editName" placeholder="name"/>
                </div>
                <p>
                    <button (click)="save();">Save</button>
                    <button (click)="cancel();">Cancel</button>
                </p>
            </div>
        </div>
    `,
    styles: [
        'input {width:20em}'
    ],
    animations: [slideInDownAnimation]
})
export class CrisisDetailComponent implements OnInit, CanDeativateComponent {
    @HostBinding('@routeAnimation')
    routeAnimation = true;
    @HostBinding('style.display')
    display = 'block';
    @HostBinding('style.position')
    position = 'absolute';

    crisis: Crisis;
    editName: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        public dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { crisis: Crisis }) => {
                this.editName = data.crisis.name;
                this.crisis = data.crisis;
            });
    }

    save() {

    }

    cancel() {
        this.gotoCrisises();
    }

    gotoCrisises() {
        const crisisId = this.crisis ? this.crisis.id : null;
        this.router.navigate(['../', { id: crisisId, person: 'Leonardo Davinci' }], { relativeTo: this.route });
    }

    canDeactivate(): Observable<boolean> | boolean {
        if (!this.crisis || this.crisis.name === this.editName) {
            return true;
        }
        return this.dialogService.confirm('Discard changes?');
    }
}
