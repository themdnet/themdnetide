// This is a JavaScript file

var starter = angular.module('starter', ['ionic'])

// Load pages in template
starter.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('home', {
        url: "/home",
        templateUrl: "templates/home.html"
    })
    
    .state('news', {
        url: "/news",
        templateUrl: "templates/news.html"
    })
    
    .state('event', {
        url: "/event",
        templateUrl: "templates/event.html"
    })
    .state('activity', {
        url: "/activity",
        templateUrl: "templates/activity.html"
    })
    .state('rassieh', {
        url: "/rassieh",
        templateUrl: "templates/rassieh.html"
    })
    .state('gallery', {
        url: "/gallery",
        templateUrl: "templates/gallery.html"
    })
    .state('about', {
        url: "/about",
        templateUrl: "templates/about.html"
    });
    $urlRouterProvider.otherwise("/home");
});

// Load and Get Data From Frontpage
starter.controller('dbFrontpage', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://sscc-rassieh.com/api/json_frontpage.php").success(function(data){
        $scope.data = data
    })    
    .error(function() {
        $scope.data = "error in fetching data";
    });
}]);

// Load and Get Data From NEWS
starter.controller('dbNews', ['$scope','$http',function($scope,$http){
    var type = this;
    type.allnews = $http.get("http://sscc-rassieh.com/api/json_news.php")
    .success(function(allnews){
        $scope.allnews = allnews;
    });
}])
.controller("PanelCtrlNews", function() {
    this.tab = 1;
    this.news;
    this.selectTab = function(setTab, news) {
        this.tab = setTab;
        this.news = news;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;   
    }
});

// Load and Get Data From Events
starter.controller('dbEvents', ['$scope','$http',function($scope,$http){
    //$scope.$emit('LOAD'),
    var type = this;
    type.events = $http.get("http://sscc-rassieh.com/api/json_events.php")
    .success(function(events){
        $scope.events = events
        //$scope.$emit('UNLOAD')
    });
}])
.controller("PanelCtrlEvent", function() {
    //.controller("PanelController", function() {
    this.tab = 1;
    this.event;
    this.selectTab = function(setTab, event) {
        this.tab = setTab;
        this.event = event;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;   
    }
});

// Load and Get Data From Activity
starter.controller('dbActivities', ['$scope','$http',function($scope,$http){
    //$scope.$emit('LOAD'),
    var type = this;
    type.activities = $http.get("http://sscc-rassieh.com/api/json_activities.php")
    .success(function(activities){
        $scope.activities = activities
        //$scope.$emit('UNLOAD')
    });
}])
.controller("PanelCtrlActivity", function() {
    //.controller("PanelController", function() {
    this.tab = 1;
    this.activity;
    this.selectTab = function(setTab, activity) {
        this.tab = setTab;
        this.activity = activity;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;   
    }
});

// Load and Get Data From rassieh
starter.controller('dbRassiehs', ['$scope', '$http', function ($scope, $http) { 
    $http.get("http://sscc-rassieh.com/api/json_rassieh.php").success(function(data){
        $scope.data = data
    })
    .error(function() {
        $scope.data = "error in fetching data";
    });
}]);

// Load and Get Data From about
starter.controller('dbAbout', ['$scope', '$http', function ($scope, $http) { 
    $http.get("http://sscc-rassieh.com/api/json_about.php").success(function(data){
        $scope.data = data
    })
    .error(function() {
        $scope.data = "error in fetching data";
    });
}]);