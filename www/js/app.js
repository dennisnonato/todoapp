
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
     
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});


app.controller('ListaCtrl', function($scope) {
    
    $scope.msg = "Hello World";
    
    var tarefas = [
        {
            "id" : 1,
            "texto" : "Estudar mais",
            "concluida" : false
        },
         {
            "id" : 2,
            "texto" : "Dormir menos",
            "concluida" : true
        },
    ];
    /* o scope serve para exibir na view*/
    $scope.tarefas = tarefas;
});