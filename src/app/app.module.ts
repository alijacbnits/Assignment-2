import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllstyleDirective } from './allstyle.directive';
import { ButtonstyleDirective } from './buttonstyle.directive';


@NgModule({
  declarations: [
    AppComponent,
    AllstyleDirective,
    ButtonstyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
