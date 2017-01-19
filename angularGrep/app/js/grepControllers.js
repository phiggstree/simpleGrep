'use strict';
/* Controllers for the grep App */
var grepControllers = angular.module('grepControllers', []);

grepControllers.controller('SearchListCtrl', function($scope) {

	$scope.searchTextArray = {
		lineText: null
	};

	$scope.splitTextArea = function(input){
		var newInput = input.split("\n");
		var filtered =[];
		var lineCnt = 1;
        for (var i = 0; i < newInput.length; i++) {
          var item = "line "+ lineCnt + " : "+ newInput[i];
          filtered.push(item);
          lineCnt ++
        }
        $scope.searchTextArray.lineText = filtered;
	};

/* End of controller*/
});



