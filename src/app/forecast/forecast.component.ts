import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { ForecastWeather } from '../forecast-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  myForecastWeather: Array<ForecastWeather> = [];
  location:any;
  fiveDaysWeather: [];

  constructor(private weatherService: WeatherService) { }

  formatDate(date: string) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  ngOnInit(): void {
    this.localForecastWeather();
  }

  OnSubmit(weatherForm: NgForm) {
    this.cityForecatsWeather(weatherForm.value.city);
  }

  localForecastWeather() {
    this.weatherService.weatherForecast();
    navigator.geolocation
      .getCurrentPosition(position => {
        this.location = position.coords;
        const lat = this.location.latitude;
        const long = this.location.longitude;
        this.weatherService.localWeatherForecast(lat, long).subscribe(
          data => {
            console.log(data.city.name);
            const {city} = data.city;
            const {list} = data;
            const fiveDays = list.filter((item: any, index:number) => index % 8 === 0);
            console.log(fiveDays);
            this.fiveDaysWeather = fiveDays.map((day: any, index: number) => {
              // console.log(day);
              const { main, weather, dt_txt } = day;
              let date = this.formatDate(dt_txt.split(' ')[0]);
              let { temp, temp_min, temp_max } = main;
              temp = temp.toFixed(0);
              temp_min = temp_min.toFixed(0);
              temp_max = temp_max.toFixed(0);
              this.myForecastWeather[index] = new ForecastWeather(city, date, temp, `http://openweathermap.org/img/w/${weather[0].icon}.png`, weather[0].description, temp_min, temp_max);
            });
          }
        );
      });
  };

  cityForecatsWeather(city: string) {
    this.weatherService.cityWeatherForecast(city).subscribe(
      data => {
            const {city} = data.city;
            const {list} = data;
            const fiveDays = list.filter((item: any, index:number) => index % 8 === 0);
            console.log(fiveDays);
            this.fiveDaysWeather = fiveDays.map((day: any, index: number) => {
              // console.log(day);
              const { main, weather, dt_txt } = day;
              let date = this.formatDate(dt_txt.split(' ')[0]);
              let { temp, temp_min, temp_max } = main;
              temp = temp.toFixed(0);
              temp_min = temp_min.toFixed(0);
              temp_max = temp_max.toFixed(0);
              this.myForecastWeather[index] = new ForecastWeather(city, date, temp, `http://openweathermap.org/img/w/${weather[0].icon}.png`, weather[0].description, temp_min, temp_max);
            });
      });
    };
  }
