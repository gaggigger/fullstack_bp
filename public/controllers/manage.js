angular.module('bpApp')
  .controller('ManageCtrl', function($scope, $http, $routeParams, Manage) {

    $http.get('/api/manage').success(function(data) {
      $scope.userData = data;
    });

    $scope.deleteUser = function (user) {
      Manage.delete(user).success(function(){
        var userIndex = $scope.userData.indexOf(user);
        $scope.userData.splice(userIndex._id, 1);
      });
    };

    $scope.editUser = function () {
      console.log($routeParams.user_id);
      Manage.get_edit($routeParams).success(function(data){
        //
      });
    };

  });
