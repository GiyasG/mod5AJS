(function () {
'use strict'

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = ['userInfoService','MenuService'];

function signUpController(userInfoService,MenuService) {

  var $ctrl = this;

  $ctrl.userinfo = {};
  $ctrl.isSaved = false;
  $ctrl.fdishName = "";

  $ctrl.submit = function () {
     userInfoService.setUserinfo($ctrl.userinfo);
     $ctrl.isSaved = userInfoService.isFilled;
    console.log($ctrl.userinfo);
  }

  $ctrl.isFavourite = function() {
  MenuService.getMenuItem($ctrl.userinfo.favouritedish)
    .then(function () {
      $ctrl.invalidFavourite = false;
      $ctrl.fdishName = MenuService.name_data;
      // console.log('fdish: ' + MenuService.name_data);
    })
    .catch(function() {
      $ctrl.invalidFavourite = true;
    });
}

}


})();
