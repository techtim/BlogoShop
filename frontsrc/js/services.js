(function(angular) {
  return angular.module('services', []).service('execTimeStamp', function() {
    return function(id) {
      return parseInt(id.substr(0, 8), 16) * 1000;
    };
  }).service('calculateSale', function() {
    return function(price, sale) {
      var percent;
      if (sale.sale_value.indexOf('%') !== -1) {
        percent = parseInt(sale.sale_value, 10);
        return price * percent / 100;
      } else {
        return sale.sale_value;
      }
    };
  }).service('shopItems', function(config, imports, execTimeStamp) {
    var shopItems;
    shopItems = _.toArray(imports.shopItems);
    this.list = function() {
      var previewsUrl;
      previewsUrl = config.previewsUrl.item;
      _.each(shopItems, function(item) {
        var now, saleIsActive;
        now = Math.round(new Date() / 1000);
        if (item.sale.sale_active === '1' && item.sale.sale_start_stamp <= now && item.sale.sale_end_stamp >= now) {
          saleIsActive = true;
        }
        return _.extend(item, {
          link: "http://" + config.domain + "/" + (item.sex ? item.sex + '/' : '') + item.category + "/" + item.subcategory + "/" + item.alias,
          preview: "" + previewsUrl + "/item/" + item.category + "/" + item.subcategory + "/" + item.alias + "/" + item.preview_image,
          saleIsActive: saleIsActive,
          timestamp: execTimeStamp(item._id.$oid)
        });
      });
      return shopItems;
    };
  }).service('shopItemSvc', function(calculateSale, imports) {
    var aliases, recalculatePrice;
    aliases = imports.aliases;
    this.shopItem = imports.shopItem;
    this.shopItem = _.reduce(this.shopItem, function(memo, value, key) {
      if ((!_.isObject(value)) && value.toString().length || (_.isObject(value)) && (!_.isEmpty(value))) {
        memo[key] = value;
      }
      return memo;
    }, {});
    this.shopItem.subitems = _.reduce(this.shopItem.subitems, function(memo, item) {
      if (item.qty > 0) {
        memo.push(item);
      }
      return memo;
    }, []);
    this.getItem = (function(_this) {
      return function() {
        return _this.shopItem;
      };
    })(this);
    this.getAliasName = function(alias) {
      var _ref;
      return (_ref = aliases[alias]) != null ? _ref : '';
    };
    this.selectSubitem = (function(_this) {
      return function(key) {
        return console.log(_this.shopItem.subitems[key]);
      };
    })(this);
    recalculatePrice = (function(_this) {
      return function() {
        var now, oldPrice;
        now = Math.round(+new Date() / 1000);
        if (_this.shopItem.sale.sale_active === '1' && now < _this.shopItem.sale.sale_end_stamp && now > _this.shopItem.sale.sale_start_stamp) {
          oldPrice = _this.shopItem.price;
          _this.shopItem.price = {};
          return _.extend(_this.shopItem.price, {
            oldPrice: oldPrice,
            price: calculateSale(oldPrice, _this.shopItem.sale),
            saleIsActive: true
          });
        }
      };
    })(this);
    recalculatePrice();
  });
})(angular);

//# sourceMappingURL=services.js.map
