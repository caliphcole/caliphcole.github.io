app.controller('project',['$scope','$http',function($scope,$http){

    $scope.alttip = "My First Project";
    $scope.projectName = "My First Project";
    $scope.projectDetails = "Some quick example text to build on the card title and make up the bulk of the card's content.";




    $scope.getListOfProjects = function(){
        $scope.listOfProjects = {"projects":[{"title":"Mona Social","type":"Android Mobile App","description":" Mobile app for Student at Uwi to" +
                "Log on and Browse Courses"},{"title":"StarRocket","type":"Android Mobile Gaming App","description":" Mobile game for Anyone"},{"title":"Ui Skills","type":"Boostrap Angularjs Web App","description":"web angular" +
                "App that displays my Skills"}]};
    }
    $scope.getListOfProjects();
}]);
