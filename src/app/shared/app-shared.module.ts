import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatSidenavModule,
  MatSelectModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { LoadingBtnDirective } from './loading-btn.directive';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    LoadingBtnDirective,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    LoadingBtnDirective,
    FormsModule,
    SpinnerComponent,
    FlexLayoutModule,
    NavbarComponent,
    SidenavComponent,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatSelectModule, MatSidenavModule
  ],
  providers: [],
})
export class AppShareModule { }
