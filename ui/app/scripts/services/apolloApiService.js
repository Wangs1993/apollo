'use strict';
angular
    .module('apollo')
    .service('apolloApiService', [
        '$q', '$http',
        ApiService
    ]);

function ApiService($q, $http){

    var getAllUsers = function() {
        return $http.get(CONFIG.appUrl + 'user', {

        });
    };

    var getAllEnvironments = function() {
        return $http.get(CONFIG.appUrl + 'environment', {

        });
    };

    var getAllServices = function() {
        return $http.get(CONFIG.appUrl + 'service', {

        });
    };

    var getAllDeployableVersions = function() {
            return $http.get(CONFIG.appUrl + 'deployable-version/', {

            });
    };


    return {
      getAllUsers: getAllUsers,
      getAllEnvironments: getAllEnvironments,
      getAllServices: getAllServices,
      getAllDeployableVersions: getAllDeployableVersions
    };
}
