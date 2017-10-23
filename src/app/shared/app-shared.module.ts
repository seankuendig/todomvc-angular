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




@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent,
    LoadingBtnDirective
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    HttpModule,
    LoadingBtnDirective,
    FormsModule,
    SpinnerComponent,
    FlexLayoutModule,
    NavbarComponent,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatSelectModule, MatSidenavModule
  ],
  providers: [],
})
export class AppShareModule { }
