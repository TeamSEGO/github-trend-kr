var app = angular.module('segoApp', ['ngRoute']);
//var contentapiurl = 'https://api.github.com/repos/zeroxy/github-trend-kr/contents/';
//var postfix = "?ref=gh-pages&callback=JSON_CALLBACK";

app.filter('nonamed', function(){
  return function(input){return (input == undefined || input == null)?'no-named':input;}
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/:vol', {template:'<section ng-repeat="md in mddata track by $index" ng-class-even="\'success\'"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><h1>{{$index+1}}</h1><markdown renderdata = "md"></markdown></div></div></div></section>', controller:'articleCtrl'})
    //.when('/', {templateUrl:'/README.md', controller:'articleCtrl'})
    .otherwise({ redirectTo: '/'+menus[menus.length-1].volume.name});
});

app.controller('articleCtrl',function ($scope,$http, $routeParams){
  var converter = new Showdown.converter();
  $scope.mddata = [];
  for (menu in menus){
    console.log(menus[menu].volume.name);
    if(menus[menu].volume.name===$routeParams.vol){
      for(article in menus[menu].articles){
        url = menus[menu].volume.path+"/"+menus[menu].articles[article].name;
        $http.get(escape(url))
        .success(function(data, status){
          var markup = converter.makeHtml(data);
          /*show down does not convert http*/
          var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
          var result = markup.replace(urlPattern, function(url){
            return '<a href="'+url+'">'+url+'</a>';
          });

          $scope.mddata.push(result);
        })
        .error(function(data,status){
          $scope.mddata.push('# '+status+'\n ## **Sorry!!**');
        });
      }
    }
  }

});

app.controller('segoCtrl',function($scope, $route, $routeParams){
  $scope.menus = menus;
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
    scope: { renderdata: '=renderdata'},
    link: function (scope, element, attrs){
      element.html(converter.makeHtml(scope.renderdata));
      scope.$watch('renderdata', function(){
        element.html(converter.makeHtml(scope.renderdata));
      });
    }
  };
});
