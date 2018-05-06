import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const heroRoutes: Routes = [
    {
        path: 'heroes',
        redirectTo: '/superheroes'
    },
    {
        path: 'hero/:id',
        redirectTo: '/superhero/:id'
    },
    {
        path: 'superheroes',
        component: HeroListComponent
    },
    {
        path: 'superhero/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(heroRoutes)
    ],
    exports: [
        // 导出路由模块
        RouterModule
    ]
})
export class HeroRoutingModule { }
