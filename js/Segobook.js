var app = angular.module('segoApp', ['ngRoute']);
var contentapiurl = 'https://api.github.com/repos/TeamSEGO/github-trend-kr/contents/';
var vol = [];
app.filter('nonamed', function(){
  return function(input){return (input == undefined || input == null)?'no-named':input;}
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    console.log(vol);
    $routeProvider
    .when('/:vol/:filename', {template:'<markdown><div ng-include="articleUrl"></div></markdown>', controller:'articleCtrl'})
    .when('/', {template:'<markdown><div ng-include="articleUrl"></div></markdown>', controller:'segoCtrl'})
    .otherwise({ redirectTo: '/'});
}]);

app.controller('articleCtrl', function ($scope, $routeParams){
  $scope.articleUrl = 'posting/'+$routeParams.vol+'/'+$routeParams.filename
});

app.controller('segoCtrl', function($scope,$http){
  $scope.menus = [];
  $http.jsonp(contentapiurl+'posting?callback=JSON_CALLBACK')
  .success(function(data, status, headers, config){
    vollist = data.data;
    //vollist = vollist.filter(function(e){if(e.b==="dir") return {"name":e.name,"path":e.path};});
    for (vol in vollist){
      $http.jsonp(contentapiurl+vol.path+'?callback=JSON_CALLBACK')
      .success(function(data, status, headers, config){
        articles = data.data
        //articles = articles.filter(function(e){if(e.b==="file" && e.name.substring(e.name.length-2)==="md") return {"name":e.name,"path":e.path}; }); 
        $scope.menus = $scope.menus.concat({"volume":vol, "articles":articles})
      })
    }
  })
  console.log($scope.menus);
});

app.directive('bookindex', function(){
  return {
    templateUrl:'partial/bookindex.html'
    , restrict:'E'
  }
});
app.directive('introduction', function(){
  return {
    templateUrl:'partial/introduction.html'
    , restrict:'E'
  }
});
app.directive('navbar', function(){
  return {
    templateUrl:'partial/blognavbar.html'
    , restrict:'E'
  }
});
app.directive('markdown', function(){
  var converter = new Showdown.converter();
  return {
    restrict:'E',
    link: function (scope, element, attrs){
      element.html( converter.makeHtml( element.text() ) );
    }
  };
});



