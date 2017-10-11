import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './spinner/spinner.component';



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
    FlexLayoutModule
  ],
  providers: [],
})
export class AppShareModule { }
