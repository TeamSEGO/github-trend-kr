var app = angular.module('segoApp', ['ngRoute']);
var contentapiurl = 'https://api.github.com/repos/zeroxy/github-trend-kr/contents/';
var postfix = "?ref=gh-pages&callback=JSON_CALLBACK";
var menus = [{"volume":{"name":"201502","path":"/posting/201502"}
  ,"articles":[
     {"name":"(001-01)_awesome-courses.md","path":"posting/201502/(#001-01)_awesome-courses.md"}
    ,{"name":"(#001-02)_what-happens-when.md","path":"posting/201502/(#001-02)_what-happens-when.md"}
    ,{"name":"(#001-03)_blessed-contrib.md","path":"posting/201502/(#001-03)_blessed-contrib.md"}
    ,{"name":"(#001-04)_Front-end Job Interview Questions.md","path":"posting/201502/(#001-04)_Front-end Job Interview Questions.md"}
    ,{"name":"(#001-05)_github-cheat-sheet.md","path":"posting/201502/(#001-05)_github-cheat-sheet.md"}
    ,{"name":"(#001-06)_awesome-android-ui.md","path":"posting/201502/(#001-06)_awesome-android-ui.md"}
    ,{"name":"(#001-07)_\302\265Block.md","path":"posting/201502/(#001-07)_\302\265Block.md"}
    ,{"name":"(#001-08)_libreboard.md","path":"posting/201502/(#001-08)_libreboard.md"}
    ,{"name":"(#001-09)_Hover.md","path":"posting/201502/(#001-09)_Hover.md"}
    ,{"name":"(#001-10)_io.js.md","path":"posting/201502/(#001-10)_io.js.md"}
    ,{"name":"(#001-11)_paperwork.md","path":"posting/201502/(#001-11)_paperwork.md"}
    ,{"name":"(#001-12)_icono.md","path":"posting/201502/(#001-12)_icono.md"}
    ,{"name":"(#001-13)_postgret.md","path":"posting/201502/(#001-13)_postgret.md"}
    ,{"name":"(#001-14)_echarts.md","path":"posting/201502/(#001-14)_echarts.md"}
    ,{"name":"(#001-15)_Awesome-remote-job.md","path":"posting/201502/(#001-15)_Awesome-remote-job.md"}
    ,{"name":"(#001-16)_Riot.js.md","path":"posting/201502/(#001-16)_Riot.js.md"}
    ,{"name":"(#001-17)_til.md","path":"posting/201502/(#001-17)_til.md"}
    ,{"name":"(#001-18)_snabbt.md","path":"posting/201502/(#001-18)_snabbt.md"}
    ,{"name":"(#001-19)_react.md","path":"posting/201502/(#001-19)_react.md"}
    ,{"name":"(#001-20)_TheaterJs.md","path":"posting/201502/(#001-20)_TheaterJs.md"}
    ,{"name":"(#001-21)_Comcast.md","path":"posting/201502/(#001-21)_Comcast.md"}
    ,{"name":"(#001-22)_nw.js.md","path":"posting/201502/(#001-22)_nw.js.md"}
    ,{"name":"(#001-23)_Angular.md","path":"posting/201502/(#001-23)_Angular.md"}
    ,{"name":"(#001-24)_linux-inside.md","path":"posting/201502/(#001-24)_linux-inside.md"}
    ,{"name":"(#001-25)_trip-to-iOS.md","path":"posting/201502/(#001-25)_trip-to-iOS.md"}
  ]
}]; 
app.filter('nonamed', function(){
  return function(input){return (input == undefined || input == null)?'no-named':input;}
});

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/:vol/:filename', {template:'<markdown><div ng-include="articleUrl"></div></markdown>', controller:'articleCtrl'})
    .when('/', {template:'<markdown><div ng-include="articleUrl"></div> ***##asdf##***</markdown>', controller:'articleCtrl'})
    //.otherwise({ redirectTo: '/'});
    //$locationProvider.html5Mode(true);
}]);

app.controller('articleCtrl', function ($scope, $routeParams){
  if($routeParams.vol === undefined || $routeParams.filename === undefined ){
    $scope.articleUrl = 'http://zeroxy.github.io/github-trend-kr/README.md';
  }else {
    $scope.articleUrl = escape('posting/'+$routeParams.vol+'/'+$routeParams.filename);
  }
});

app.controller('segoCtrl', function($scope,$http){
  $scope.menus = menus;
  //$http.jsonp(contentapiurl+'posting'+postfix)
  //.success(function(data, status, headers, config){
  //  vollist = data.data;
  //  console.log(vollist);
  //  vollist = vollist.filter(function(e){if(e.b==="dir") return {"name":e.name,"path":e.path};});
  //  for (vol in vollist){
  //    $http.jsonp(contentapiurl+vol.path+postfix)
  //    .success(function(data, status, headers, config){
  //      articles = data.data
  //      //articles = articles.filter(function(e){if(e.b==="file" && e.name.substring(e.name.length-2)==="md") return {"name":e.name,"path":e.path}; }); 
  //      $scope.menus = $scope.menus.concat({"volume":vol, "articles":articles})
  //      console.log($scope.menus);
  //    })
  //  }
  //})
  
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



