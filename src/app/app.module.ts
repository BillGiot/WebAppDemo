import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponentComponent } from './person-component/person-component.component';
import { ButtonComponentComponent } from './button-component/button-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponentComponent,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
