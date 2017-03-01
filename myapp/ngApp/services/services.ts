namespace myapp.Services {

      export class WeatherService {

        public city;
        public weatherAPI;
        public days;

        public listDetails() {
          return this.weatherAPI.get({ q: this.city, cnt: this.days});
        }

        constructor(private $resource, private $stateParams, $log) {
          this.city = "Greenville, SC";
          this.days = $stateParams.days || 2;
          $log.info(this.days);
          this.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?&appid=77753c2d407fa67bfab85c37c1e79464");

        }
      }
      angular.module("myapp").service("WeatherService", WeatherService);
    }
