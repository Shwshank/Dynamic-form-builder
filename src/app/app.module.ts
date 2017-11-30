import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyNgIfDirective } from './home/my-ng-if.directive';
import { TextFeildComponent } from './home/text-feild/text-feild.component';
import { SelectInputComponent } from './home/select-input/select-input.component';
import { RadioInputComponent } from './home/radio-input/radio-input.component';
import { CheckboxInputComponent } from './home/checkbox-input/checkbox-input.component';
import { FileInputComponent } from './home/file-input/file-input.component';
import { LocationInputComponent } from './home/location-input/location-input.component';
import { SliderInputComponent } from './home/slider-input/slider-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyNgIfDirective,
    TextFeildComponent,
    SelectInputComponent,
    RadioInputComponent,
    CheckboxInputComponent,
    FileInputComponent,
    LocationInputComponent,
    SliderInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
