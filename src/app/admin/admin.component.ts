import { Component } from '@angular/core';

@Component({
    template: `
        <h3>ADMIN</h3>
        <nav>
            <a routerLink="./" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Dashboard</a>
            <a routerLink="./crisises" routerLinkActive="active">Manage Crisises</a>
            <a routerLink="./heroes" routerLinkActive="active">Manage Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AdminComponent { }
