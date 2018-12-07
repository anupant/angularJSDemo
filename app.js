
/*(function() {
'use strict';

angular.module('myfirstApp',[])

.controller('MyFirstController',function($scope) {
  $scope.name = "Anu";
  $scope.sayHello = function () {
    return "Hello Coursera !"
  };
});

})();*/

//App function for calculator.html
/*(function () {
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope) {
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function () {
    var totalNameValue = calculateNumericForString($scope.name);
    $scope.totalValue = totalNameValue;
  };


  function calculateNumericForString(string) {
    var totalStringValue = 0;
    for (var i = 0; i < string.length; i++) {
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue;
  }

});


})();*/

//App function for indexDI:
(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', ['$scope','$filter',DIController]);
//The values are passed in array above so that they can work in minification
function DIController ($scope,
                       $filter,
                       $injector) {
  $scope.name = "Anu";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

  console.log($injector.annotate(DIController));
}

/*function AnnonateMe(name, job, blah) {
  return "Blah!";
}*/

//console.log(DIController.toString());

})();
