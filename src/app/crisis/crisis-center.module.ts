import { NgModule } from '@angular/core';
import { CrisisCenterComponent } from './crisis-center.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';
import { CrisisService } from './crisis.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrisisDetailResolver } from './crisis-detail-resolver.service';

@NgModule({
    declarations: [
        CrisisCenterComponent,
        CrisisListComponent,
        CrisisCenterHomeComponent,
        CrisisDetailComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ],
    providers: [
        // 注册provider，可供所有模块使用
        CrisisService,
        CrisisDetailResolver
    ]
})
export class CrisisCenterModule { }
