import { Routes, RouterModule, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { AuthGuard } from './login/auth-guard.servic';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

// 先匹配者优先 ( a first match wins strategy  )
const appRoutes: Routes = [
    // 懒加载路由配置
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [AuthGuard]

    },
    {
        path: 'crisis-center',
        loadChildren: 'app/crisis/crisis-center.module#CrisisCenterModule',
        data: {
            preload: true
        }
    },
    {
        path: 'compose',
        component: ComposeMessageComponent,
        outlet: 'popup'
    },
    {
        path: '', // 默认路由
        redirectTo: '/superheroes', // 重定向路由
        pathMatch: 'full'
    },
    {
        path: '**', // 匹配任何路由
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purpose only
                preloadingStrategy: SelectivePreloadingStrategy
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateGuard,
        SelectivePreloadingStrategy
    ]
})
export class AppRoutingModule { }
