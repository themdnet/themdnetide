// This is a JavaScript file
angular.module('starter', ['ionic','ionic.cloud'])
.config(function($ionicCloudProvider){
    $ionicCloudProvider.init({
        "core":{
            "app_id": "xxxx"
        },
        "push":{
            "sender_id":"xxxxxx",
            "pluginConfig":{
                "ios":{
                    "badge": true,
                    "sound": true,
                },
                "android":{
                "iconColor": "#343434"
                }
            }
        }
    });
})

.run(function($ionicPlatform){
    $ionicPlatform.ready(function(){
        if(windows.cordova && windows.cordova.plugs.Keyboard){
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(windows.StatusBar){
            StatusBar.styleDefault();
        }
    });
})
.controller('xxxxx', function($scope,$http,$ionicPush){
    $scope.messageionic="demo token";
    $ionicPush.register().then(function(t){
        return $ionicPush.saveToken(t);
    }).then(function(t){
        $scope.messageionic=t.token;
        //str="http://sscc-rassieh.com/api/token.php?e=user_details"+$scope.messageionic;
        str="http://sscc-rassieh.com/api/token.php"+$scope.messageionic;
        $http.get(str)
        .success(function (response){
            alert("Done");
            //alert($scope.user_details.u_name);
        }).error(function(){
            var alertPopup = $ionicPopup.alert({
                title: "xxx",
                template:"xxx",
            });
        });
    
    });
    $scope.$on('cloud:push:notification', function(event, data){
        var msg = data.message;
        alert(msg.title + ':'+msg.text);
    });
})


















