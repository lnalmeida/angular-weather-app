export class ForecastWeather {
    constructor(
      public city: string,
      public data: string,
      public temp: string,
      public imageClimaURI: string,
      public tipoClima: string,
      public tempMinima: string,
      public tempMaxima: string,
    ){}
};

