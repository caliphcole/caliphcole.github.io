var app = angular.module("resume",["ngRoute"]);
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider
        .when("/home",{
            templateUrl :"feature/home/home.html",
            controller:"home"

        })
        .when("/project",{
        templateUrl :"feature/project/project.html",
            controller:"project"
    })
    .when("/about",{
        templateUrl :"feature/about/about.html",
        controller:"about"
    }).when("/contact",{
                templateUrl :"feature/contact/contact.html",
                controller:"contact"
        }).when("/search",{
                templateUrl :"feature/search/search.html",
                controller:"search"
        }).otherwise({
        redirectTo: "/home"
    });
}]);

// Initialize the application
app.run(['$location', function AppRun($location) {
    debugger; // -->> here i debug the $location object to see what angular see's as URL
}])