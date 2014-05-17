do (angular) ->
  window.xoxlovka = window.xoxlovka || {}

  angular.module 'imports', []
    .constant 'config', window.xoxlovka.config || {}
    .constant 'imports',
      shopItems: window.shopItems || []