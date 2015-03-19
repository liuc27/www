// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.filters', 'LocalStorageModule'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('myApp')
      .setNotify(true, true)
  })
  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'MenuCtrl'
    })

    .state('tab.register', {
      url: '/register',
      views: {
        'tab-coupon': {
          templateUrl: 'templates/tab-register.html',
          controller: 'MenuCtrl'
        }
      }
    })
      .state('tab.login', {
        url: '/login',
        views: {
          'tab-coupon': {
            templateUrl: 'templates/tab-login.html',
            controller: 'CouponCtrl'
          }
        }
      })
      .state('tab.setting', {
        url: '/setting',
        views: {
          'tab-coupon': {
            templateUrl: 'templates/tab-setting.html',
            controller: 'CouponCtrl'
          }
        }
      })
    // Each tab has its own nav history stack:

    .state('tab.coupon', {
      url: '/coupon',
      views: {
        'tab-coupon': {
          templateUrl: 'templates/tab-coupon.html',
          controller: 'CouponCtrl'
        }
      }
    })

    .state('tab.coupon-detail', {
      url: '/coupon-detail/:couponId',
      views: {
        'tab-coupon': {
          templateUrl: 'templates/tab-coupon-detail.html',
          controller: 'CouponDetailCtrl'
        }
      }
    })

    .state('tab.tab-types', {
      url: '/types',
      views: {
        'tab-types': {
          templateUrl: 'templates/tab-types.html',
          controller: 'typesCtrl'
        }
      }
    })


    .state('tab.tab-types-couponList', {
      url: '/type/:typeId',
      views: {
        'tab-types': {
          templateUrl: 'templates/tab-types-couponList.html',
          controller: 'typeDetailCtrl'
        }
      }
    })



    .state('tab.tab-types-couponList-detail', {
      url: '/tab-types-couponList-detail/:couponId',
      views: {
        'tab-types': {
          templateUrl: 'templates/tab-coupon-detail.html',
          controller: 'CouponDetailCtrl'
        }
      }
    })

    .state('tab.favoriteList', {
      url: '/favoriteList',
      views: {
        'tab-favoriteList': {
          templateUrl: 'templates/tab-favoriteList.html',
          controller: 'favoriteListCtrl'
        }
      }
    })

    .state('tab.favoriteListCouponDetail', {
      url: '/favoriteList/:favoriteId',
      views: {
        'tab-favoriteList': {
          templateUrl: 'templates/tab-favoriteList-couponDetail.html',
          controller: 'favoriteDetailCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/coupon');

  });
