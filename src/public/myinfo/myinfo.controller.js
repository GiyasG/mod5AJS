(function () {
'use strict'

angular.module('public')
.controller('myInfoController', myInfoController);

myInfoController.$inject = ['userInfoService','MenuService'];

function myInfoController(userInfoService,MenuService) {
  var $ctrl = this;
  $ctrl.fdishName = MenuService.name_data;
  $ctrl.userinfo = userInfoService.userinfo;
}
})();
