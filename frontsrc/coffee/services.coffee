do (angular) ->
  angular.module 'services', []
    .service 'execTimeStamp', ->
      return (id)->
        parseInt(id.substr(0,8), 16) * 1000


    .service 'shopItems', (config, imports, execTimeStamp) ->
      shopItems = _.toArray imports.shopItems

      @list = ->
        previewsUrl = config.previewsUrl.item

        _.each shopItems, (item) ->
          now = Math.round new Date()/1000
          saleIsActive = true if item.sale.sale_active == '1' && item.sale.sale_start_stamp <=now && item.sale.sale_end_stamp >= now

          _.extend item,
            link: "http://#{config.domain}/#{ if item.sex then item.sex+'/' else ''}#{item.category}/#{item.subcategory}/#{item.alias}"
            preview: "#{previewsUrl}/item/#{item.category}/#{item.subcategory}/#{item.alias}/#{item.preview_image}"
            saleIsActive: saleIsActive
            timestamp: execTimeStamp item._id

        return shopItems

      return

