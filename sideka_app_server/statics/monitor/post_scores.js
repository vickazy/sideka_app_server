var app = angular.module('app', ['angularUtils.directives.dirPagination']);
app.config(['$interpolateProvider', function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }]);

app.controller('PostCtrl', function($scope, $http) {
	$scope.currentPage = 1;
	$scope.itemPerPage = 50;
	$scope.keyWords = "";
	$scope.totalItems = 0;
	$scope.dataTables = [];
	$scope.headers = ['Domain', 'Score', 'Title','#KBBi','#Kalimat','#Paragraph', '% Gambar Utama','% Title', '% Foto&Caption', '% KBBI', '% Kalimat', '% Paragraph', 'Tanggal']
	get_all_post("",1)
	
	
	$scope.changePage = function(page) {
		get_all_post("",page)		
	};
 	$scope.formatDate = function(date){           
          return new Date(date);
    };
	function get_all_post(keyWords,pageBegin){
		$http.get('/api/count_post_scores').then(function(response){
			$scope.totalItems = parseInt(response.data)
		}); 
		$http.get('/api/post_scores?keywords='+keyWords+"&pagebegin="+pageBegin+"&itemperpage="+$scope.itemPerPage).then(function(response){
			$scope.dataTables = response.data;
			console.log(response.data)
		}); 
	}

});
