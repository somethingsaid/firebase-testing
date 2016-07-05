var MyModule = angular.module('MyModule', [ 'firebase' ]);

MyModule
    .constant('FIREBASE_URL', 'https://fir-test-48c8c.firebaseio.com')
    .factory('firebaseReference', function(FIREBASE_URL){
        return new Firebase(FIREBASE_URL);
    });

MyModule.controller('FireCtrl', function($scope, $firebaseObject, firebaseReference){
    $scope.myData = $firebaseObject(firebaseReference);
});
