import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageCrisisesComponent } from './manage-crisises.component';
import { ManageHeroesComponent } from './manage-heroes.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { AuthGuard } from '../login/auth-guard.servic';

const adminRoutes: Routes = [
    {
        // Router 支持空路径路由，可以使用它们来分组路由，而不用往 URL 中添加额外的路径片段。
        path: '',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '', // 无组件路由 ( a component-less route )
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'crisises', component: ManageCrisisesComponent },
                    { path: 'heroes', component: ManageHeroesComponent },
                    { path: '', component: AdminDashboardComponent }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }
