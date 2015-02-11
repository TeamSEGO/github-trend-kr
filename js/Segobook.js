var app = angular.module('segoApp', ['ngRoute']);
//var contentapiurl = 'https://api.github.com/repos/zeroxy/github-trend-kr/contents/';
//var postfix = "?ref=gh-pages&callback=JSON_CALLBACK";
var menus = [
  {"volume":{"name":"201502","path":"posting/201502"}
  ,"articles":[
     {"name":"(#001-01)_awesome-courses.md"}
    ,{"name":"(#001-02)_what-happens-when.md"}
    ,{"name":"(#001-03)_blessed-contrib.md"}
    ,{"name":"(#001-04)_Front-end Job Interview Questions.md"}
    ,{"name":"(#001-05)_github-cheat-sheet.md"}
    ,{"name":"(#001-06)_awesome-android-ui.md"}
    ,{"name":"(#001-07)_uBlock.md"}
    ,{"name":"(#001-08)_libreboard.md"}
    ,{"name":"(#001-09)_Hover.md"}
    ,{"name":"(#001-10)_io.js.md"}
    ,{"name":"(#001-11)_paperwork.md"}
    ,{"name":"(#001-12)_icono.md"}
    ,{"name":"(#001-13)_postgret.md"}
    ,{"name":"(#001-14)_echarts.md"}
    ,{"name":"(#001-15)_Awesome-remote-job.md"}
    ,{"name":"(#001-16)_Riot.js.md"}
    ,{"name":"(#001-17)_til.md"}
    ,{"name":"(#001-18)_snabbt.md"}
    ,{"name":"(#001-19)_react.md"}
    ,{"name":"(#001-20)_TheaterJs.md"}
    ,{"name":"(#001-21)_Comcast.md"}
    ,{"name":"(#001-22)_nw.js.md"}
    ,{"name":"(#001-23)_Angular.md"}
    ,{"name":"(#001-24)_linux-inside.md"}
    ,{"name":"(#001-25)_trip-to-iOS.md"}
  ]
}]; 
app.filter('nonamed', function(){
  return function(input){return (input == undefined || input == null)?'no-named':input;}
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/:vol', {template:'<section ng-repeat="md in mddata track by $index" ng-class-even="\'success\'"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><h1>{{$index+1}}</h1><markdown renderdata = "md"></markdown></div></div></div></section>', controller:'articleCtrl'})
    .when('/', {templateUrl:'/README.md', controller:'articleCtrl'})
    .otherwise({ redirectTo: '/'});
});

app.controller('articleCtrl',function ($scope,$http, $routeParams){

  $scope.mddata = [];
  for (menu in menus){
    console.log(menus[menu].volume.name);
    if(menus[menu].volume.name===$routeParams.vol){
      for(article in menus[menu].articles){
        url = menus[menu].volume.path+"/"+menus[menu].articles[article].name;
        $http.get(escape(url))
        .success(function(data, status){
          $scope.mddata.push(data);
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