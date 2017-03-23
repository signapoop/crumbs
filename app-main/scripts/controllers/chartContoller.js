'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('ChartCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
	  console.log("in chart controller");
    $scope.line = {
	    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	    series: ['Series A', 'Series B'],
	    data: [
	      [65, 59, 80, 81, 56, 55, 40],
	      [28, 48, 40, 19, 86, 27, 90]
	    ],
	    onClick: function (points, evt) {
	      console.log(points, evt);
	    }
    };
    $scope.lineMonth = {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
        series: ['Sold to Customers', 'Redistributed on Crumbs', 'Disposed'],
        data: [
            [59, 58, 60, 68, 67, 67],
            [16, 14, 21, 18, 22, 26],
            [25, 28, 19, 14, 11, 7]
         ],
         onClick: function (points, evt) {
           console.log(points, evt);
         }
    };

    $scope.donut = {
    	labels: ['Sold to Customers', 'Redistributed on Crumbs', 'Disposed'],
    	data: [70, 20, 10]
    };

    $scope.radar = {
    	labels:["Grains", "Dairy Products", "Vegetables", "Fruits", "Meat/Poultry", "Canned Foods"],
      series: ["Redistributed on Crumbs", "Disposed"],
    	data:[
    	    [68, 37, 72, 70, 24, 65],
    	    [32, 63, 28, 30, 76, 35]
    	]
    };

    $scope.pie = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
    	data : [300, 500, 100]
    };

    $scope.polar = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120]
    };

    $scope.dynamic = {
    	labels : ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
    	data : [300, 500, 100, 40, 120],
    	type : 'PolarArea',

    	toggle : function ()
    	{
    		this.type = this.type === 'PolarArea' ?
    	    'Pie' : 'PolarArea';
		}
    };
    $scope.donutcolours = ["#70DBDB", "#66CD00", "#DB2929"];
    $scope.barcolours = ["#66CCCC", "#66CD00", "#EE0000"];
    $scope.radarcolours = ["#66CD00", "#EE0000"];
    $scope.lineMonthColours = ["#66CCCC", "#66CD00", "#EE0000"];

    /*["rgba(224, 108, 112, 1)",
            "rgba(224, 108, 112, 1)",
            "rgba(224, 108, 112, 1)"]*/
}]);
