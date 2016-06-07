/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


/**
 * dashboard Module
 * All of the JavaScript specific to the dashboard is contained inside this
 * angular module.  The only external dependencies are:
 * - cuttlefish (reelyActive)
 */
angular.module('dashboard', [])


/**
 * DashCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('DashCtrl', function($scope) {

  $scope.update = function(data) {
    cuttlefish.represent(JSON.parse(data), 'rendered');
  }

});
