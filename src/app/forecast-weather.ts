export class ForecastWeather {
    constructor(
      public data: string,
      public temp: string,
      public imageClimaURI: string,
      public tipoClima: string,
      public tempMinima: string,
      public tempMaxima: string
    ){}
};

