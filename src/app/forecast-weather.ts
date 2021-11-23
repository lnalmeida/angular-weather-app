export class ForecastWeather {
    constructor(
      public cityName: string,
      public temp: string,
      public imageClimaURI: string,
      public tipoClima: string,
      public tempMinima: string,
      public tempMaxima: string
    ) { }
}

