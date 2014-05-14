do (angular) ->
  angular.module 'imports', []
    .constant 'config', window.xoxlovka.config || {}
    .constant 'shopItems', window.shopItems || []