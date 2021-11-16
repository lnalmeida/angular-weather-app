import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { weatherRouting } from './weather.routing';
import { WeatherService } from './weather.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    weatherRouting,
  ],
  providers: [
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
