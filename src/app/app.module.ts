import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EveryDayValueComponent } from './every-day-value/every-day-value.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    EveryDayValueComponent,
    BestsellerComponent,
    PizzaComponent,
    BeveragesComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
