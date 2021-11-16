import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})

export class CurrentComponent implements OnInit {
  public myWeather: CurrentWeather;
  private location: any;
  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weatherNow();
    this.myWeather = this.weatherService.weatherNow();
    navigator.geolocation
      .getCurrentPosition(position => {
        this.location = position.coords;
        const lat = this.location.latitude;
        const long = this.location.longitude;
        this.weatherService.localWeather(lat, long).subscribe(
          data => {
            console.log(data);
            const { name, main, weather } = data;
            let { temp, temp_min, temp_max } = main;
            temp = temp.toFixed(0);
            temp_min = temp_min.toFixed(0);
            temp_max = temp_max.toFixed(0);
            this.myWeather = new CurrentWeather(name, temp, `http://openweathermap.org/img/wn/${weather[0].icon}.png`, weather[0].description, temp_min, temp_max);
          }
        );
      });
    }
  }
