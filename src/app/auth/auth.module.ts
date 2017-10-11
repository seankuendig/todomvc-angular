import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppShareModule } from '../shared/app-shared.module';
import { LoginComponent } from './login/login.component';
import { routes } from './auth.routes';

@NgModule({
  imports: [
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
