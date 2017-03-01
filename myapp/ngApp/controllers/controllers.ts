namespace myapp.Controllers {

    export class HomeController {

        public city;

        constructor(private WeatherService, private $scope, private $stateParams) {
          this.city = WeatherService.city;
          $scope.$watch(() => {
            WeatherService.city = this.city;
          });
        }
    }


    export class ForecastController {
        public city;
        public days;
        public weatherResult;

        convertToDate(dt) {
          return new Date(dt * 1000);
        }

        convertToF(degK) {
          return Math.round(1.8 * (degK - 273) + 32);
        }

        constructor(private WeatherService, private $scope, private $resource,private $stateParams, private $uibModal, private $state, $log) {
          this.city = WeatherService.city;
          this.weatherResult = WeatherService.listDetails();
          this.days = $stateParams.days || 2;
          $log.info(this.days);
        }
    }
}
