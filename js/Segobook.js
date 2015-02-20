var app = angular.module('segoApp', ['ngRoute']);
//var contentapiurl = 'https://api.github.com/repos/zeroxy/github-trend-kr/contents/';
//var postfix = "?ref=gh-pages&callback=JSON_CALLBACK";

//var footer_template = function(hashuri){
//  return '<footer class="text-center"><div class="footer-below"><div class="container"><div class="row"><div class="col-lg-12">'+
//'<div class="fb-comments" data-href="http://teamsego.github.io/github-trend-kr/#"'+hashuri+' data-width="100%" data-numposts="5" data-colorscheme="dark"></div>'+
//'</div></div></div></div></footer>';
//}
//var section_template = function(){
//  return '<section ng-repeat="md in mddata track by $index" ng-class-even="\'success\'"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><h1>{{$index+1}}</h1><markdown renderdata = "md"></markdown></div></div></div></section>';
//}
app.filter('nonamed', function(){
  return function(input){return (input == undefined || input == null)?'no-named':input;}
});

app.config(function($routeProvider) {
    $routeProvider
    .when('/:vol', {template:'<section ng-repeat="md in mddata track by $index" ng-class-even="\'success\'"><div class="container"><div class="row"><div class="col-lg-8 col-lg-offset-2"><h1>{{$index}}</h1><markdown renderdata = "md"></markdown></div></div></div></section>', controller:'articleCtrl'})
    //.when('/', {templateUrl:'/README.md', controller:'articleCtrl'})
    .otherwise({ redirectTo: '/'+menus[menus.length-1].volume.name});
});

app.controller('articleCtrl',function ($scope,$http, $routeParams){

  $scope.mddata = [];
  for (menu in menus){
    if(menus[menu].volume.name===$routeParams.vol){
      var mPath = menus[menu].volume.path;
      async.eachSeries(menus[menu].articles, function(article, callback){
        url = mPath + "/"+article.name;
        $http.get(escape(url))
        .success(function(data, status){
          /*show down does not convert http*/
          var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
          var result = data.replace(urlPattern, function(url){
            return '<a href="'+url+'">'+url+'</a>';
          });

          $scope.mddata.push(result);
          callback();
        })
        .error(function(data,status){
          $scope.mddata.push('# '+status+'\n ## **Sorry!!**');
          callback();
        });
      },function(){ console.log('done');});

    }
  }

});

app.controller('segoCtrl',function($scope){
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
