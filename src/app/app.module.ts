import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NewDemoComponent } from './new-demo/new-demo.component';
import { AttrDirTrainingDirective } from './attr-dir-training.directive';
import { StuctAttrDemoDirective } from './stuct-attr-demo.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormGroupingTrainingComponent } from './reactive-form-grouping-training/reactive-form-grouping-training.component';

@NgModule({
  declarations: [
    AppComponent,
    NewDemoComponent,
    AttrDirTrainingDirective,
    StuctAttrDemoDirective,
    ReactiveFormComponent,
    ReactiveFormGroupingTrainingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 
}
