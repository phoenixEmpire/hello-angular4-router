import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanDeativateComponent {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanDeativateComponent> {
    canDeactivate(component: CanDeativateComponent) {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}
