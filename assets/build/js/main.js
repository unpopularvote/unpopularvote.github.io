/**
 * Unpopular Vote
 */

var UPV = UPV || {};


/**
 * Subscription form
 */

UPV.subscription_form = function subscription_form() {
  var target = $('form');
  var url = target.data('action');
  var msg = $('.form--message');

  target.ajaxChimp({
    url: url,
    callback: function (resp) {
      if ($('.parsley-error').length) {
        return false;
      }

      console.log('here3');
      if (resp.result === 'success') {
        window.location = '/share/';
      } else {
        msg.text(resp.msg);
      }
    }
  });
};


/**
 * UPV.init kicks things off...
 */

UPV.init = function init() {
  UPV.subscription_form();
};
