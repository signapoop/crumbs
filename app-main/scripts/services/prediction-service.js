angular.module("sbAdminApp").factory('predictionService', ['$http', '$timeout', function($http, $timeout) {

    var baseUrl = 'http://localhost:8080/'

    var getPredictions = function(successCallback, errorCallback) {
        $http({
            method: 'GET',
            url: baseUrl + 'predictions',
        }).success(function(response) {
            if (successCallback) {
                successCallback(response);
            }
        }).error(function(response) {
            console.log("server error, code = " + response.status);
            errorCallback();
        })
    }

    var shortageViewOffers = function(remStockVM, callback, errorCallback) {
        $http({
            method: 'GET',
            url: baseUrl + "matchingTxForShortage",
            headers: {
                'Content-Type': 'application/json'
            },
            data: remStockVM
        }).success(function(response) {
            if (callback) {
                callback(response)
            }
        }).error(function(response, status)  {
            console.log("server error, code = " + status)
            if (errorCallback) {
                errorCallback();
            }
        })
    }
    var excessViewOffers = function(exceShipVM, callback, errorCallback) {
        $http({
            method: 'GET',
            url: baseUrl + "matchingTxForExcess",
            headers: {
                'Content-Type': 'application/json'
            },
            data: exceShipVM
        }).success(function(response) {
            if (callback) {
                callback(response)
            }
        }).error(function(response, status)  {
            console.log("server error, code = " + status)
            if (errorCallback) {
                errorCallback();
            }
        })
    }


    return {
        getPredictions: getPredictions,
        excessViewOffers: excessViewOffers,
        shortageViewOffers: shortageViewOffers,
    }
}]);
