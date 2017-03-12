app.config(function($stateProvider, $urlRouterProvider) {
  // 
  // For any unmatched url, redirect to /state1 
  // $urlRouterProvider.otherwise("/home");
  // 
  // Now set up the states 
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/principal.html",
      controller:"indexCtrl"
    })
    .state('about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: "aboutCtrl"
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    });
});