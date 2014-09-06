do (angular) ->
  angular.module 'filters', []
    .filter 'unsafe', ($sce) ->
      (val) -> $sce.trustAsHtml val

    .filter 'startFrom', ->
      return (input, start) ->
        if (input == undefined)
          return input
        else
          return input.slice(+start)