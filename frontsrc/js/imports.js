(function(angular) {
  window.xoxlovka = window.xoxlovka || {};
  return angular.module('imports', []).constant('CONFIG', window.xoxlovka.config || {}).constant('IMPORTS', {
    aliases: window.xoxlovka.aliases || {},
    shopItems: window.shopItems || [],
    shopItem: window.shopItem || {}
  }).constant('DELIVER_PRICE', {
    fastCourier: 500,
    courier: 350
  });
})(angular);

//# sourceMappingURL=imports.js.map
