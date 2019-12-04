define([
  'jquery',
  'uiComponent',
  'Magento_Customer/js/customer-data',
  'underscore',
  'jquery/jquery-storageapi'
], function ($, Component, customerData, _) {
  'use strict';

  return function (targetModule) {
    targetModule.defaults.visible = false;
    targetModule.defaults.listens.visible = 'onHiddenChange';
    targetModule.defaults.msgSelector = '.messages__wrap .message';

    return targetModule.extend({
      initialize: function () {
        let original = this._super();
        return original;
      },
      initObservable: function () {
        this._super().observe('visible');

        return this;
      },

      isVisible: function () {
        let self = this;
        return this.visible((!_.isEmpty(this.messages().messages) || !_.isEmpty(this.cookieMessages)) && $(self.msgSelector).is(':visible'));
      },

      onHiddenChange: function (visible) {
        if ($('body').hasClass('catalog-product-view')) {
          const stickyTabs = $('.product-view__tabs-sticky-wrap');
          if (visible) {
            let msgWrapHeight = $('.messages__wrap').outerHeight();
            stickyTabs.css('top', msgWrapHeight);
          }
          else {
            stickyTabs.css('top', 0);
          }
        }
      }
    });
  };
});
