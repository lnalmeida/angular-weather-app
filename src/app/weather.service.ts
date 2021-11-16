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
                                    'New York',
                                    '34°',
                                    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fsun%2Fsun_PNG13436.png&f=1&nofb=1',
                                    'Ensolarado',
                                    '23°',
                                    '37°');
  constructor(private http: HttpClient) {}

  weatherNow() {
    return this.current;
  }

  localWeather(lat: string, long: string) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${config.API_KEY}&units=metric&lang=pt_br`)
                    .pipe(map((res: any) => res))

  }
}
