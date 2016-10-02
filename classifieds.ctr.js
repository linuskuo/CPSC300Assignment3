(function(){
	"use strict";
	angular
	.module("ngClassifieds")
	.controller("classifiedsCtrl", function($scope){
	
		
		$scope.classified={
			title: "First Item",
			price: "$200",
			description: "BEST GAME EVER"
		};
		
	});

})();