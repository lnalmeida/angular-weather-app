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
  constructor( private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weatherNow();
    this.myWeather = this.weatherService.weatherNow();
    }
}


