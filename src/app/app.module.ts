import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PricesComponent } from './components/prices/prices.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { OfferComponent } from './components/offer/offer.component';
import { HttpClientModule } from '@angular/common/http';
import { OfertasService } from './service/ofertas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    CharacteristicsComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [OfertasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
