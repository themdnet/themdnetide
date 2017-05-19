// This is a JavaScript file
'use strict';

angular.module('starter', ['ui.router','ionic'])

.config(['$stateProvider', function($stateProvider) {
    $stateProvider
    
    .state('home', {
        url: '/home',
        templateUrl: 'home.html',
        //controller: 'productListCtrl'
    });
    /*
    
    .state('products', {
        url: '/products',
        templateUrl: 'pages/products.list.html',
        controller: 'productListCtrl'
    })
    
    .state('products.detail', {
        url: '^/:id',
        views: {
            'detail': {
                templateUrl: 'pages/pagesproducts.detail.html',
                controller: 'productDetailCtrl'
            }
        },
    })
    
    .state('products.detailAsRoot', {
        url: '^/product/:id',
        views: {
            '@': {
                templateUrl: 'pages/products.detail.html',
                controller: 'productAsRootCtrl'
            }
        },
    });
    */
}])

.controller('productListCtrl', function($scope, $state, $stateParams) {
    $scope.products = [{
        Name: "Product A",
    },
    {
        Name: "Product B",
    },
    ];
})

.controller('productDetailCtrl', function($scope, $state, $stateParams) {
    $scope.product = $scope.products[$stateParams.id]
    $scope.text = "The detail was selected from parent $scope.products";
})

.controller('productAsRootCtrl', function($scope, $state, $stateParams) {
    // we have to load everything, 
    // nothing inherited from parent view
    $scope.products = [{
        Name: "Product A",
    },
    {
        Name: "Product B",
    }, 
    ];
    
    $scope.product = $scope.products[$stateParams.id]
    $scope.text = "All the info is loaded for each detail again";
})

.config(['$urlRouterProvider',function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/products');
}]);












