import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';




@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
  ],
  exports: [
    HttpModule,
    FormsModule,
    SpinnerComponent,
    FlexLayoutModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule
  ],
  providers: [],
})
export class AppShareModule { }
