import { Component, OnInit } from '@angular/core';
import { ForecastWeather } from '../forecast-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  myForecastWeather: ForecastWeather;;
  private location: any;
  fiveDaysWeather: [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.weatherForecast();
    this.myForecastWeather = this.weatherService.weatherForecast();
    navigator.geolocation
      .getCurrentPosition(position => {
        this.location = position.coords;
        const lat = this.location.latitude;
        const long = this.location.longitude;
        this.weatherService.localWeatherForecast(lat, long).subscribe(
          data => {
            console.log(data);
            const {name} = data.city;
            const {list} = data;
            const fiveDays = list.filter((item: any, index:number) => index % 8 === 0);
            console.log(fiveDays);
            this.fiveDaysWeather = fiveDays.map((day: any) => {
              console.log(day);
              const { main, weather } = day;
              let { temp, temp_min, temp_max } = main;
              temp = temp.toFixed(0);
              temp_min = temp_min.toFixed(0);
              temp_max = temp_max.toFixed(0);
              this.myForecastWeather = new ForecastWeather(name, temp, `http://openweathermap.org/img/w/${weather[0].icon}.png`, weather[0].description, temp_min, temp_max);
            });
          }
        );
      });// this.weatherService.getForecastWeather()
    //   .subscribe(data => {
    //     this.myWeather = data;
    //   });
  }

}
