import { Component, OnInit } from '@angular/core';
import { ForecastWeather } from '../forecast-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  myWeather: ForecastWeather;;
  private location: any;

  constructor(private weatherService: WeatherService) { }

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
            this.myWeather = new ForecastWeather(name, temp, `http://openweathermap.org/img/w/${weather[0].icon}.png`, weather[0].description, temp_min, temp_max);
          }
        );
      });// this.weatherService.getForecastWeather()
    //   .subscribe(data => {
    //     this.myWeather = data;
    //   });
  }

}
