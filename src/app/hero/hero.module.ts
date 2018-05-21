import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroService } from './hero.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // 一个组件只能声明在一个属主模块中 ( There can be only one owner for a declared component )
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    // 包含常用指令(The module that includes all the basic Angular directives like NgIf, NgForOf, ...)和管道(async)
    CommonModule,
    // 包含双向绑定指令(例如 ngModel)
    FormsModule,
    HeroRoutingModule
  ],
  // 组件在路由中使用，不用导出。组件在模版中使用，必须导出。
  exports: [
    HeroListComponent,
    HeroDetailComponent
  ],
  // 在特性模块中注册Provider
  providers: [
    HeroService
  ]
})
export class HeroModule { }
