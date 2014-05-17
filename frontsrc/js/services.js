(function(angular) {
  return angular.module('services', []).service('execTimeStamp', function() {
    return function(id) {
      return parseInt(id.substr(0, 8), 16) * 1000;
    };
  }).service('shopItems', function(config, imports, execTimeStamp) {
    var shopItems;
    shopItems = imports.shopItems;
    this.list = function() {
      var previewsUrl;
      previewsUrl = config.previewsUrl.item;
      _.each(shopItems, function(item) {
        var now, saleIsActive;
        now = Math.round(new Date() / 1000);
        if (item.sale.sale_active && item.sale.sale_start_stamp <= now && item.sale.sale_end_stamp >= now) {
          saleIsActive = true;
        }
        return _.extend(item, {
          link: "http://" + config.domain + "/" + (item.sex ? item.sex + '/' : '') + item.category + "/" + item.subcategory + "/" + item.alias,
          preview: "" + previewsUrl + "/item/" + item.category + "/" + item.subcategory + "/" + item.alias + "/" + item.preview_image,
          saleIsActive: saleIsActive,
          timestamp: execTimeStamp(item._id)
        });
      });
      return shopItems;
    };
  });
})(angular);

//# sourceMappingURL=services.js.map
