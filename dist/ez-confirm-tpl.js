angular.module('ez.confirm').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ez-confirm-tpl.html',
    "<div class=\"ez-confirm modal\">\n" +
    "  <div class=\"modal-header\">\n" +
    "    <a type=\"button\" class=\"close\" ng-click=\"cancel()\" aria-hidden=\"true\">&times;</a>\n" +
    "    <h3>{{ heading }}</h3>\n" +
    "  </div>\n" +
    "  <div class=\"modal-content\">\n" +
    "    <p class=\"lead\">{{ text }}</p>\n" +
    "  </div>\n" +
    "  <div class=\"modal-footer\">\n" +
    "    <a class=\"btn\" ng-click=\"cancel()\"><i class=\"icon-remove\"></i>Cancel</a>\n" +
    "    <button ng-click=\"ok()\" class=\"btn btn-large btn-primary\"><i class=\"icon-ok\"></i>Yes</button>\n" +
    "  </div>\n" +
    "</div>\n"
  );

}]);
