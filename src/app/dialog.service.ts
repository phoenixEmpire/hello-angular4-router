import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class DialogService {
    confirm(msg?: string): Observable<boolean> {
        const confirmation = confirm(msg || 'Is it OK?');
        return of(confirmation);
    }
}
