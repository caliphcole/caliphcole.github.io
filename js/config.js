var app = angular.module("resume",["ngRoute"]);
app.config( function($routeProvider){
    $routeProvider
        .when("/home",{
            templateUrl :"feature/home/home.html",
            controller:"home"

        })
        .when("/project",{
        templateUrl :"feature/project.html",
            controller:"project"
    })
    .when("/about",{
        templateUrl :"feature/about.html"
    })
        .when("/contact",{
                templateUrl :"feature/contact.html"

        }).otherwise({
        redirectTo: "/home"
    });
});