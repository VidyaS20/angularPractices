import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { EveryDayValueComponent } from './every-day-value/every-day-value.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [
  {
    path:'everydayvalue', component: EveryDayValueComponent
  },
  {
    path:'bestseller', component: BestsellerComponent
  },
  {
    path:'pizza', component: PizzaComponent
  },
  {
    path:'beverages', component: BeveragesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


