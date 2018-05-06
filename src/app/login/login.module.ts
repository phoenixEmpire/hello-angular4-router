import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { AuthGuard } from './auth-guard.servic';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class LoginModule { }
