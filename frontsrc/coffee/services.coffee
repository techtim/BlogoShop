do (angular) ->
  angular.module 'services', []
    .service 'execTimeStamp', ->
      return (id)-> parseInt(id.substr(0,8), 16) * 1000

    .service 'calculateSale', ->
      return (price, sale) ->
        if (sale.sale_value.indexOf('%') != -1)
          percent =  parseInt sale.sale_value, 10
          return price*percent/100
        else
          return sale.sale_value

    .factory 'Pagination', ->
      pagination = {}

      pagination.getNew = (model, perPage = 5) ->
        paginator =
          numPages: Math.floor(model.length/perPage)
          perPage: perPage
          page: 0

        paginator.allPagesShow = -> @page == @numPages - 1

        paginator.nextPage = ->
          paginator.page += 1 if (@page < @numPages - 1)

        paginator.prevPage = ->
          paginator.page -= 1 if @page > 0

        paginator.showAll = ->
          if (!@showedAll)
            @showedAll = true
            @oldPerPage = @perPage

            @page = 0
            @perPage = @perPage * @numPages
          else
            @showedAll = false
            @perPage = @oldPerPage

        paginator.toPageId = (id) ->
          paginator.page = id if (id >= 0 && id <= @numPages)

        return paginator

      return pagination

    .service 'shopItems', (CONFIG, IMPORTS, execTimeStamp) ->
      shopItems = _.toArray IMPORTS.shopItems

      @list = ->
        previewsUrl = CONFIG.previewsUrl.item

        _.each shopItems, (item) ->
          now = Math.round new Date()/1000
          saleIsActive = true if item.sale.sale_active == '1' && item.sale.sale_start_stamp <=now && item.sale.sale_end_stamp >= now

          _.extend item,
            link: "/#{ if item.sex then item.sex+'/' else ''}#{item.category}/#{item.subcategory}/#{item.alias}"
            preview: "#{previewsUrl}/item/#{item.category}/#{item.subcategory}/#{item.alias}/#{item.preview_image}"
            saleIsActive: saleIsActive
            timestamp: execTimeStamp item._id.$oid

        return shopItems

      return

    .service 'shopItemSvc', (calculateSale, IMPORTS) ->
      aliases = IMPORTS.aliases

      @shopItem = IMPORTS.shopItem

      @getItem = => @shopItem

      @getAliasName = (alias) ->
        return aliases[alias] ? ''

      @getSelectedSubitemId = => @selectedSubitemId

      @selectSubitem = (key) =>
        @selectedSubitemId = key
        selectedSubitem = @shopItem.subitems[key]
        _.extend @shopItem, selectedSubitem
        @createItemUrl key

        if ((_.isArray selectedSubitem.price) && selectedSubitem.price.length > 1 && selectedSubitem.price[0] != selectedSubitem.price[1])
          @shopItem.price = {}
          _.extend @shopItem, price:
            oldPrice: _.first selectedSubitem.price
            price: selectedSubitem.price[1]
        else
          @shopItem.price = if _.isArray selectedSubitem.price then selectedSubitem.price[0] else selectedSubitem.price

        removeEmptyFields()

      @createItemUrl = (id) =>
        _.extend @shopItem, url: "#{@shopItem.category}/#{@shopItem.subcategory}/#{@shopItem.alias}/buy/#{id}"

      recalculatePrice = =>
        now = Math.round +new Date()/1000

        if @shopItem.sale.sale_active == '1' and now < @shopItem.sale.sale_end_stamp and now > @shopItem.sale.sale_start_stamp
          oldPrice = @shopItem.price
          @shopItem.price = {}
          _.extend @shopItem.price,
            oldPrice: oldPrice
            price: calculateSale(oldPrice, @shopItem.sale)
            saleIsActive: true

      # remove empty field from item
      removeEmptyFields = =>
        @shopItem = _.reduce @shopItem, (memo, value, key) ->
          memo[key] = value if (!_.isObject value) and value.toString().length or (_.isObject value) and (!_.isEmpty value)
          return memo
        , {}

      removeEmptyFields()
      recalculatePrice()

      return









