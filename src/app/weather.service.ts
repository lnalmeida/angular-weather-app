import { Injectable } from '@angular/core';
import axios from 'axios';
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
  constructor() {}

  weatherNow() {
    return this.current;
  }

  public async getCurrentWeather() {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=são joão de meriti,br&units=metric&lang=pt_br&APPID=6e5887074f9a801daa98e6d923415e8b');
      console.log(response.data);
    } catch (error) {
      console.log(error)
    }
  }
}
