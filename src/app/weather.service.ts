import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { config }  from '../config/config'
import { CurrentWeather } from './current-weather';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  current: CurrentWeather = new CurrentWeather(
                                    'Cidade',
                                    'Temperatura°',
                                    'Image,',
                                    'Clima',
                                    'Min',
                                    'Máx');
  constructor(private http: HttpClient) {}

  weatherNow() {
    return this.current;
  }

  localWeather(lat: string, long: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.API_KEY}&units=metric&lang=pt_br`)
                    .pipe(map((res: any) => res))

  }

  localWeatherForecast(lat: string, long: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${config.API_KEY}&units=metric&lang=pt_br`)
                    .pipe(map((res: any) => res))
  }

  cityWeatherNow(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.API_KEY}&units=metric&lang=pt_br`)
                    .pipe(map((res: any) => res))
  }

  cityWeatherForecast(city: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.API_KEY}&units=metric&lang=pt_br`)
                    .pipe(map((res: any) => res))
  }
}
