import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from "./forecast/forecast.component";


const WEATHER_ROUTER: Routes = [
{ path: '', component: CurrentComponent},
{ path: 'forecast', component: ForecastComponent},
];

export const weatherRouting:ModuleWithProviders<any> = RouterModule.forRoot(WEATHER_ROUTER);
