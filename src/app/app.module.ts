import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroModule } from './hero/hero.module';
import { DialogService } from './dialog.service';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    //  导入特性模块
    HeroModule,
    LoginModule,
    //  导入路由模块
    AppRoutingModule
  ],
  // 在根模块中注册Provider
  providers: [
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, null, 2));
  }
}
