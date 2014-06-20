do (angular) ->
  angular.module 'services', []
    .service 'execTimeStamp', ->
      return (id)->
        parseInt(id.substr(0,8), 16) * 1000

    .service 'calculateSale', ->
      return (price, sale) ->
        if (sale.sale_value.indexOf('%') != -1)
          percent =  parseInt sale.sale_value, 10
          return price*percent/100
        else
          return sale.sale_value

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
            timestamp: execTimeStamp item._id.$oid

        return shopItems

      return

    .service 'shopItemSvc', (calculateSale, imports) ->
      aliases = imports.aliases

      @shopItem = imports.shopItem

      # remove empty field from shop
      @shopItem = _.reduce @shopItem, (memo, value, key) ->
        memo[key] = value if (!_.isObject value) and value.toString().length or (_.isObject value) and (!_.isEmpty value)
        return memo
      , {}

      # remove subitems without quantity
      @shopItem.subitems = _.reduce @shopItem.subitems, (memo, item) ->
        memo.push item if item.qty > 0
        return memo
      , []

      @getItem = => @shopItem

      @getAliasName = (alias) ->
        return aliases[alias] ? ''

      @selectSubitem = (key) =>
        console.log @shopItem.subitems[key]

      recalculatePrice = =>
        now = Math.round +new Date()/1000

        if @shopItem.sale.sale_active == '1' and now < @shopItem.sale.sale_end_stamp and now > @shopItem.sale.sale_start_stamp
          oldPrice = @shopItem.price
          @shopItem.price = {}
          _.extend @shopItem.price,
            oldPrice: oldPrice
            price: calculateSale(oldPrice, @shopItem.sale)
            saleIsActive: true


      recalculatePrice()


      return







