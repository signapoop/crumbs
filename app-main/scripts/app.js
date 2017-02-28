'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
.module('sbAdminApp', [
		'oc.lazyLoad',
		'ui.router',
		'ui.bootstrap',
		'angular-loading-bar',
])
.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

	$ocLazyLoadProvider.config({
		debug:false,
		events:true,
	});

	$urlRouterProvider.otherwise('/dashboard/home');

	/*
	$routeProvider
		.when('/MyPredictions', {
			templateUrl: 'views/dashboard/MyPredictions.html',
			controller: 'PredictCtrl'
		})
		.otherwise({redirectTo: '/dashboard/home'});
		*/
	$stateProvider
		.state('dashboard', {
			url:'/dashboard',
			templateUrl: 'views/dashboard/main.html',
			resolve: {
				loadMyDirectives:function($ocLazyLoad){
					return $ocLazyLoad.load(
							{
								name:'sbAdminApp',
								files:[
									'scripts/directives/header/header.js',
									'scripts/directives/header/header-notification/header-notification.js',
									'scripts/directives/sidebar/sidebar.js',
									'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
								]
							}),
					$ocLazyLoad.load(
							{
								name:'toggle-switch',
								files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
								"bower_components/angular-toggle-switch/angular-toggle-switch.css"
								]
							}),
					$ocLazyLoad.load(
							{
								name:'ngAnimate',
								files:['bower_components/angular-animate/angular-animate.js']
							})
					$ocLazyLoad.load(
							{
								name:'ngCookies',
								files:['bower_components/angular-cookies/angular-cookies.js']
							})
					$ocLazyLoad.load(
							{
								name:'ngResource',
								files:['bower_components/angular-resource/angular-resource.js']
							})
					$ocLazyLoad.load(
							{
								name:'ngSanitize',
								files:['bower_components/angular-sanitize/angular-sanitize.js']
							})
					$ocLazyLoad.load(
							{
								name:'ngTouch',
								files:['bower_components/angular-touch/angular-touch.js']
							})
				}
			}
		})
	.state('dashboard.home',{
		url:'/home',
		controller: 'MainCtrl',
		templateUrl:'views/dashboard/home.html',
		resolve: {
			loadMyFiles:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
						'scripts/controllers/main.js',
						'scripts/directives/timeline/timeline.js',
						'scripts/directives/notifications/notifications.js',
						'scripts/directives/chat/chat.js',
						'scripts/directives/dashboard/stats/stats.js',
						'scripts/services/transaction-service.js'
					]
				})
			}
		}
	})
	.state('dashboard.MyPredictions',{
		url:'/MyPredictions',
		templateUrl:'views/dashboard/MyPredictions.html',
		controller: 'PredictCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'chart.js',
					files:[
						'bower_components/angular-chart.js/dist/angular-chart.min.js',
						'bower_components/angular-chart.js/dist/angular-chart.css'
					]
				}),
				$ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					    'scripts/controllers/MyPredictions.js',
					    'scripts/services/transaction-service.js',
					    'scripts/services/prediction-service.js'
					]
				})
			}
		}
	})
	.state('dashboard.Offers',{
		url:'/Offers',
		templateUrl:'views/Market/Offers.html',
		controller: 'OffersCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:['scripts/controllers/Offers.js']
				})
			}
		}
	})
	.state('dashboard.Requests',{
		url:'/Requests',
		templateUrl:'views/Market/Requests.html',
		controller: 'RequestsCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					    'scripts/services/transaction-service.js',
					    'scripts/controllers/Requests.js']
				})
			}
		}
	})
	.state('dashboard.Bought',{
		url:'/Bought',
		templateUrl:'views/MyTransactions/Bought.html',
		controller: 'BoughtCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					    'scripts/services/transaction-service.js',
					    'scripts/controllers/Bought.js']
				})
			}
		}
	})
	.state('dashboard.Sold',{
		url:'/Sold',
		templateUrl:'views/MyTransactions/Sold.html',
		controller: 'SoldCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'sbAdminApp',
					files:[
					    'scripts/services/transaction-service.js',
					    'scripts/controllers/Sold.js']
				})
			}
		}
	})
	.state('dashboard.form',{
		templateUrl:'views/form.html',
		url:'/form'
	})
	.state('dashboard.chart',{
		templateUrl:'views/chart.html',
		url:'/chart',
		controller:'ChartCtrl',
		resolve: {
			loadMyFile:function($ocLazyLoad) {
				return $ocLazyLoad.load({
					name:'chart.js',
					files:[
						'bower_components/angular-chart.js/dist/angular-chart.min.js',
						'bower_components/angular-chart.js/dist/angular-chart.css'
					]
				}),
				$ocLazyLoad.load({
					name:'sbAdminApp',
					files:['scripts/controllers/chartContoller.js']
				})
			}
		}
	})
	.state('dashboard.table',{
		templateUrl:'views/table.html',
		url:'/table'
	})
	.state('dashboard.panels-wells',{
		templateUrl:'views/ui-elements/panels-wells.html',
		url:'/panels-wells'
	})
	.state('dashboard.buttons',{
		templateUrl:'views/ui-elements/buttons.html',
		url:'/buttons'
	})
	.state('dashboard.notifications',{
		templateUrl:'views/ui-elements/notifications.html',
		url:'/notifications'
	})
	.state('dashboard.typography',{
		templateUrl:'views/ui-elements/typography.html',
		url:'/typography'
	})
	.state('dashboard.icons',{
		templateUrl:'views/ui-elements/icons.html',
		url:'/icons'
	})
	.state('dashboard.grid',{
		templateUrl:'views/ui-elements/grid.html',
		url:'/grid'
	})
}]);
