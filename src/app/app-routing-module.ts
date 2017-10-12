import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/shared/auth-guard.service';

import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './auth/login/login.component';



const routes: Routes = [
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    {
        path: '',
        redirectTo: 'todo-list',
        pathMatch: 'full'
    },
    {
        path: 'todo-list',
        component: TodoListComponent,
        canActivate: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }


