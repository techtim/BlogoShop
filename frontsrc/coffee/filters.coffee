do (angular) ->
  angular.module 'filters', []
    .filter 'unsafe', ($sce) ->
      (val) ->
        console.log
        $sce.trustAsHtml val