import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { ChartsModule } from 'ng2-charts';

import { AppShareModule } from './shared/app-shared.module';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { TaskFilterPipe } from './todo-list/shared/task-filter.pipe';
import { TaskSearchFilterPipe } from './todo-list/shared/task-search-filter.pipe';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthService } from './auth/shared/auth.service';
import { AuthGuard } from './auth/shared/auth-guard.service';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TaskService } from './todo-list/shared/task.service';
import { TodoDiagramComponent } from './todo-list/todo-diagram/todo-diagram.component';
import { NavbarService } from './shared/navbar.service';

export function factory(authService: AuthService) {
  return () => authService.initialize();
}

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    TaskSearchFilterPipe,
    TodoListComponent,
    TodoListItemComponent,
    TodoDiagramComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ChartsModule,
    AppShareModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard, TaskService, NavbarService,
    {
      provide: APP_INITIALIZER,
      deps: [AuthService],
      multi: true,
      useFactory: factory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
