(function(angular) {
  window.xoxlovka = window.xoxlovka || {};
  return angular.module('imports', []).constant('config', window.xoxlovka.config || {}).constant('imports', {
    aliases: window.xoxlovka.aliases || {},
    shopItems: window.shopItems || [],
    shopItem: window.shopItem || {}
  });
})(angular);

//# sourceMappingURL=imports.js.map
