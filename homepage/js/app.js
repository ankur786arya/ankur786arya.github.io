'use strict';

/* app module */

var searchboxApp = angular.module('searchboxApp', []);
    
searchboxApp.controller('SearchListCtrl', function ($scope, $http) {
	$http.get('../articles/articles.json').success(function(data) {
		$scope.lists = data;

	});
	
});