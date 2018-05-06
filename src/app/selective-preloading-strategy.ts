import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    // 传入Route对象
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        console.log('preload ', route);
        if (route.data && route.data['preload']) {
            this.preloadedModules.push(route.path);
            console.log('Preloaded: ' + route.path);
            return load();
        } else {
            return of(null);
        }
    }
}
