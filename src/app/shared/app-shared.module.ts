import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import {
  MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    SpinnerComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    HttpModule,
    FormsModule,
    SpinnerComponent,
    FlexLayoutModule,
    NavbarComponent,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatToolbarModule, MatDialogModule, MatSelectModule
  ],
  providers: [],
})
export class AppShareModule { }
