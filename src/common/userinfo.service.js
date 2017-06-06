(function () {
  'use strict'

  angular.module('common')
  .service('userInfoService', userInfoService);

 userInfoService.inject = [];

 function userInfoService() {
  var service = this;

  service.isFilled = false;

  service.setUserinfo = function (info) {
    service.userinfo = info;
    service.isFilled = true;
  }


};

})();
