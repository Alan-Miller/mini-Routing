angular.module('miniRouting').controller('productsCtrl', function($scope, productsService, $state) {


  if ($state.params.id === 'shoes') {
    $scope.productData = productsService.shoeData;
  } else if ($state.params.id === 'socks') {
    $scope.productData = productsService.sockData;
  }



});
