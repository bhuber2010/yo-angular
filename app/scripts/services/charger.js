'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.charger
 * @description
 * # charger
 * Service in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .service('charger', function ($resource) {
    var googleKey = "AIzaSyCLXvOIsoBU0qY0PaF6bzbL0VkaG9u5aHw";
    var searchLevels = "1,2,3";
    var searchDistance = 10;

    var addressSearch = function(address){
        return $resource("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + googleKey);
    };

    var chargerSearch = function(geoAddress){
      return $resource("https://cors-anywhere.herokuapp.com/http://api.openchargemap.io/v2/poi/?output=json" +
                      "&countrycode=" + "US" +
                      "&maxresults=" + 100 +
                      "&latitude=" + geoAddress.lat +
                      "&longitude=" + geoAddress.lng +
                      "&distance=" + searchDistance +
                      "&distanceunit=Miles" +
                      "&levelid=" + searchLevels);
    };

    return {
      addressSearch: addressSearch,
      chargerSearch: chargerSearch
    };
  });
