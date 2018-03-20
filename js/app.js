var app = angular.module("resume").controller('globalScope',['$scope','$location',function($scope,$location){
    
    
     $scope.searchResult = function(){
        console.log("someting happened", $location);
        $location.path('/search');
    }
}]);