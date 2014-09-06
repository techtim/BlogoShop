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
  }).factory('Pagination', function() {
    var pagination;
    pagination = {};
    pagination.getNew = function(model, perPage) {
      var paginator;
      if (perPage == null) {
        perPage = 5;
      }
      paginator = {
        numPages: Math.floor(model.length / perPage),
        perPage: perPage,
        page: 0
      };
      paginator.allPagesShow = function() {
        return this.page === this.numPages - 1;
      };
      paginator.nextPage = function() {
        if (this.page < this.numPages - 1) {
          return paginator.page += 1;
        }
      };
      paginator.prevPage = function() {
        if (this.page > 0) {
          return paginator.page -= 1;
        }
      };
      paginator.showAll = function() {
        if (!this.showedAll) {
          this.showedAll = true;
          this.oldPerPage = this.perPage;
          this.page = 0;
          return this.perPage = this.perPage * this.numPages;
        } else {
          this.showedAll = false;
          return this.perPage = this.oldPerPage;
        }
      };
      paginator.toPageId = function(id) {
        if (id >= 0 && id <= this.numPages) {
          return paginator.page = id;
        }
      };
      return paginator;
    };
    return pagination;
  }).service('shopItems', function(CONFIG, IMPORTS, execTimeStamp) {
    var shopItems;
    shopItems = _.toArray(IMPORTS.shopItems);
    this.list = function() {
      var previewsUrl;
      previewsUrl = CONFIG.previewsUrl.item;
      _.each(shopItems, function(item) {
        var now, saleIsActive;
        now = Math.round(new Date() / 1000);
        if (item.sale.sale_active === '1' && item.sale.sale_start_stamp <= now && item.sale.sale_end_stamp >= now) {
          saleIsActive = true;
        }
        return _.extend(item, {
          link: "/" + (item.sex ? item.sex + '/' : '') + item.category + "/" + item.subcategory + "/" + item.alias,
          preview: "" + previewsUrl + "/item/" + item.category + "/" + item.subcategory + "/" + item.alias + "/" + item.preview_image,
          saleIsActive: saleIsActive,
          timestamp: execTimeStamp(item._id.$oid)
        });
      });
      return shopItems;
    };
  }).service('shopItemSvc', function(calculateSale, IMPORTS) {
    var aliases, recalculatePrice, removeEmptyFields;
    aliases = IMPORTS.aliases;
    this.shopItem = IMPORTS.shopItem;
    this.getItem = (function(_this) {
      return function() {
        return _this.shopItem;
      };
    })(this);
    this.getAliasName = function(alias) {
      var _ref;
      return (_ref = aliases[alias]) != null ? _ref : '';
    };
    this.getSelectedSubitemId = (function(_this) {
      return function() {
        return _this.selectedSubitemId;
      };
    })(this);
    this.selectSubitem = (function(_this) {
      return function(key) {
        var selectedSubitem;
        _this.selectedSubitemId = key;
        selectedSubitem = _this.shopItem.subitems[key];
        _.extend(_this.shopItem, selectedSubitem);
        _this.createItemUrl(key);
        if ((_.isArray(selectedSubitem.price)) && selectedSubitem.price.length > 1 && selectedSubitem.price[0] !== selectedSubitem.price[1]) {
          _this.shopItem.price = {};
          _.extend(_this.shopItem, {
            price: {
              oldPrice: _.first(selectedSubitem.price),
              price: selectedSubitem.price[1]
            }
          });
        } else {
          _this.shopItem.price = _.isArray(selectedSubitem.price) ? selectedSubitem.price[0] : selectedSubitem.price;
        }
        return removeEmptyFields();
      };
    })(this);
    this.createItemUrl = (function(_this) {
      return function(id) {
        return _.extend(_this.shopItem, {
          url: "" + _this.shopItem.category + "/" + _this.shopItem.subcategory + "/" + _this.shopItem.alias + "/buy/" + id
        });
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
    removeEmptyFields = (function(_this) {
      return function() {
        return _this.shopItem = _.reduce(_this.shopItem, function(memo, value, key) {
          if ((!_.isObject(value)) && value.toString().length || (_.isObject(value)) && (!_.isEmpty(value))) {
            memo[key] = value;
          }
          return memo;
        }, {});
      };
    })(this);
    removeEmptyFields();
    recalculatePrice();
  });
})(angular);

//# sourceMappingURL=services.js.map
