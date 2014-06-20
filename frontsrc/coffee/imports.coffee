do (angular) ->
  window.xoxlovka = window.xoxlovka || {}

  angular.module 'imports', []
    .constant 'config', window.xoxlovka.config || {}
    .constant 'imports',
      aliases: window.xoxlovka.aliases || {}
      shopItems: window.shopItems || []
      shopItem: window.shopItem || {}