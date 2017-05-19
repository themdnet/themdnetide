// This is a JavaScript file

starter.controller('dbFrontpage', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://sscc-rassieh.com/api/json_frontpage.php").success(function(data){
        $scope.data = data
    })    
    .error(function() {
        $scope.data = "error in fetching data";
    });
}]);

starter.controller('dbNews', ['$scope', '$http', function ($scope, $http) {
    $http.get("http://sscc-rassieh.com/api/json_news.php").success(function(data){
        $scope.data = data
    })    
    .error(function() {
        $scope.data = "error in fetching data";
    });
}]);


/*
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




*/