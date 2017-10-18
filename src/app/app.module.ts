import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

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

export function factory(authService: AuthService) {
  return () => authService.initialize();
}

@NgModule({
  declarations: [
    AppComponent,
    TaskFilterPipe,
    TaskSearchFilterPipe,
    TodoListComponent,
    TodoListItemComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppShareModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, AuthGuard, TaskService,
    {
      provide: APP_INITIALIZER,
      deps: [AuthService],
      multi: true,
      useFactory: factory
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
