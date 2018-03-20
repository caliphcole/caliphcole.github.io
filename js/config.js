var app = angular.module("resume",["ngRoute"]);
app.config( function($routeProvider){
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
                templateUrl :"feature/contact.html",
                controller:"about"
        }).otherwise({
        redirectTo: "/home"
    });
});

