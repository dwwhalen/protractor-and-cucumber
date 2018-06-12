(function (window, angular, undefined) {

  'use strict';

  angular.
    module('app', ['ngRoute']).
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/phones', {
            template: '<phone-list></phone-list>'
          }).
          otherwise('/');
      }
    ]);

})(window, window.angular);

