  // v 1.13.1

// Mondido settings
(function($) {
  var do_log = function(str){
    if(window.console){
      console.log(str);
    }
  };

  if (mondidoSettings.config.development == true){
    do_log("Development mode is on");
  }

  if (typeof Mondido === "undefined") {
    console.log("Error could not load Mondido object");
    Mondido = {
      token: "Mondido",
      transaction: {
        id: "0"
      },
      merchant: {
        id: "0"
      }
    };
  }

})(jQuery);

/*
    jQuery Masked Input Plugin
    Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.4.0
*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

// Layout settings
(function($) {  
  $('.m-layout-name').text(mondidoSettings.layout.name);
  $(".m-layout-terms_and_conditions_url").attr("href", mondidoSettings.layout.terms_and_conditions_url);
})(jQuery);


  //https://github.com/stripe/jquery.payment
  // Generated by CoffeeScript 1.7.1
  (function() {
    var $, cardFromNumber, cardFromType, cards, defaultFormat, formatBackCardNumber, formatBackExpiry, formatCardNumber, formatExpiry, formatForwardExpiry, formatForwardSlashAndSpace, handleIMEKeydown, handleIMEKeyup, hasTextSelected, luhnCheck, reFormatCVC, reFormatCardNumber, reFormatExpiry, reFormatNumeric, restrictCVC, restrictCardNumber, restrictExpiry, restrictNumeric, safeVal, setCardType,
      __slice = [].slice,
      __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    $ = window.jQuery || window.Zepto || window.$;

    $.payment = {};

    $.payment.fn = {};

    $.fn.payment = function() {
      var args, method;
      method = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return $.payment.fn[method].apply(this, args);
    };

    defaultFormat = /(\d{1,4})/g;

    $.payment.cards = cards = [
      {
        type: 'visaelectron',
        pattern: /^4(026|17500|405|508|844|91[37])/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'maestro',
        pattern: /^(5(018|0[23]|[68])|6(39|7))/,
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'forbrugsforeningen',
        pattern: /^600/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'dankort',
        pattern: /^5019/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'visa',
        pattern: /^4/,
        format: defaultFormat,
        length: [13, 16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'mastercard',
        pattern: /^(5[0-5]|2[2-7])/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'amex',
        pattern: /^3[47]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvcLength: [3, 4],
        luhn: true
      }, {
        type: 'dinersclub',
        pattern: /^3[0689]/,
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'discover',
        pattern: /^6([045]|22)/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }, {
        type: 'unionpay',
        pattern: /^(62|88)/,
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvcLength: [3],
        luhn: false
      }, {
        type: 'jcb',
        pattern: /^35/,
        format: defaultFormat,
        length: [16],
        cvcLength: [3],
        luhn: true
      }
    ];

    cardFromNumber = function(num) {
      var card, _i, _len;
      num = (num + '').replace(/\D/g, '');
      for (_i = 0, _len = cards.length; _i < _len; _i++) {
        card = cards[_i];
        if (card.pattern.test(num)) {
          return card;
        }
      }
    };

    cardFromType = function(type) {
      var card, _i, _len;
      for (_i = 0, _len = cards.length; _i < _len; _i++) {
        card = cards[_i];
        if (card.type === type) {
          return card;
        }
      }
    };

    luhnCheck = function(num) {
      var digit, digits, odd, sum, _i, _len;
      odd = true;
      sum = 0;
      digits = (num + '').split('').reverse();
      for (_i = 0, _len = digits.length; _i < _len; _i++) {
        digit = digits[_i];
        digit = parseInt(digit, 10);
        if ((odd = !odd)) {
          digit *= 2;
        }
        if (digit > 9) {
          digit -= 9;
        }
        sum += digit;
      }
      return sum % 10 === 0;
    };

    hasTextSelected = function($target) {
      var _ref;
      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== $target.prop('selectionEnd')) {
        return true;
      }
      if ((typeof document !== "undefined" && document !== null ? (_ref = document.selection) != null ? _ref.createRange : void 0 : void 0) != null) {
        if (document.selection.createRange().text) {
          return true;
        }
      }
      return false;
    };

    safeVal = function(value, $target) {
      var cursor, error, last;
      try {
        cursor = $target.prop('selectionStart');
      } catch (_error) {
        error = _error;
        cursor = null;
      }
      last = $target.val();
      $target.val(value);
      if (cursor !== null && $target.is(":focus")) {
        if (cursor === last.length) {
          cursor = value.length;
        }
        $target.prop('selectionStart', cursor);
        return $target.prop('selectionEnd', cursor);
      }
    };

    reFormatNumeric = function(e) {
      return setTimeout(function() {
        var $target, value;
        $target = $(e.currentTarget);
        value = $target.val();
        value = value.replace(/\D/g, '');
        return safeVal(value, $target);
      });
    };

    reFormatCardNumber = function(e) {
      return setTimeout(function() {
        var $target, value;
        $target = $(e.currentTarget);
        value = $target.val();
        value = $.payment.formatCardNumber(value);
        return safeVal(value, $target);
      });
    };

    formatCardNumber = function(e) {
      var $target, card, digit, length, re, upperLength, value;
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      $target = $(e.currentTarget);
      value = $target.val();
      card = cardFromNumber(value + digit);
      length = (value.replace(/\D/g, '') + digit).length;
      upperLength = 16;
      if (card) {
        upperLength = card.length[card.length.length - 1];
      }
      if (length >= upperLength) {
        return;
      }
      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
        return;
      }
      if (card && card.type === 'amex') {
        re = /^(\d{4}|\d{4}\s\d{6})$/;
      } else {
        re = /(?:^|\s)(\d{4})$/;
      }
      if (re.test(value)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val(value + ' ' + digit);
        });
      } else if (re.test(value + digit)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val(value + digit + ' ');
        });
      }
    };

    formatBackCardNumber = function(e) {
      var $target, value;
      $target = $(e.currentTarget);
      value = $target.val();
      if (e.which !== 8) {
        return;
      }
      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
        return;
      }
      if (/\d\s$/.test(value)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val(value.replace(/\d\s$/, ''));
        });
      } else if (/\s\d?$/.test(value)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val(value.replace(/\d$/, ''));
        });
      }
    };

    reFormatExpiry = function(e) {
      return setTimeout(function() {
        var $target, value;
        $target = $(e.currentTarget);
        value = $target.val();
        value = $.payment.formatExpiry(value);
        return safeVal(value, $target);
      });
    };

    formatExpiry = function(e) {
      var $target, digit, val;
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      $target = $(e.currentTarget);
      val = $target.val() + digit;
      if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val("0" + val + " / ");
        });
      } else if (/^\d\d$/.test(val)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val("" + val + " / ");
        });
      }
    };

    formatForwardExpiry = function(e) {
      var $target, digit, val;
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      $target = $(e.currentTarget);
      val = $target.val();
      if (/^\d\d$/.test(val)) {
        return $target.val("" + val + " / ");
      }
    };

    formatForwardSlashAndSpace = function(e) {
      var $target, val, which;
      which = String.fromCharCode(e.which);
      if (!(which === '/' || which === ' ')) {
        return;
      }
      $target = $(e.currentTarget);
      val = $target.val();
      if (/^\d$/.test(val) && val !== '0') {
        return $target.val("0" + val + " / ");
      }
    };

    formatBackExpiry = function(e) {
      var $target, value;
      $target = $(e.currentTarget);
      value = $target.val();
      if (e.which !== 8) {
        return;
      }
      if (($target.prop('selectionStart') != null) && $target.prop('selectionStart') !== value.length) {
        return;
      }
      if (/\d\s\/\s$/.test(value)) {
        e.preventDefault();
        return setTimeout(function() {
          return $target.val(value.replace(/\d\s\/\s$/, ''));
        });
      }
    };

    reFormatCVC = function(e) {
      return setTimeout(function() {
        var $target, value;
        $target = $(e.currentTarget);
        value = $target.val();
        value = value.replace(/\D/g, '').slice(0, 4);
        return safeVal(value, $target);
      });
    };

    handleIMEKeydown = function(e) {
      if (e.which === 229) {
        return $(e.currentTarget).data('ime', true);
      }
    };

    handleIMEKeyup = function(e) {
      var $target, key;
      $target = $(e.currentTarget);
      key = String.fromCharCode(e.which);
      if ($target.data('ime') === true) {
        $target.data('ime', false);
        $target.val($target.val() + key);
        return $target.trigger('input');
      }
    };

    restrictNumeric = function(e) {
      var input;
      if (e.metaKey || e.ctrlKey) {
        return true;
      }
      if (e.which === 32) {
        return false;
      }
      if (e.which === 0) {
        return true;
      }
      if (e.which < 33) {
        return true;
      }
      input = String.fromCharCode(e.which);
      return !!/[\d\s]/.test(input);
    };

    restrictCardNumber = function(e) {
      var $target, card, digit, value;
      $target = $(e.currentTarget);
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      if (hasTextSelected($target)) {
        return;
      }
      value = ($target.val() + digit).replace(/\D/g, '');
      card = cardFromNumber(value);
      if (card) {
        return value.length <= card.length[card.length.length - 1];
      } else {
        return value.length <= 16;
      }
    };

    restrictExpiry = function(e) {
      var $target, digit, value;
      $target = $(e.currentTarget);
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      if (hasTextSelected($target)) {
        return;
      }
      value = $target.val() + digit;
      value = value.replace(/\D/g, '');
      if (value.length > 6) {
        return false;
      }
    };

    restrictCVC = function(e) {
      var $target, digit, val;
      $target = $(e.currentTarget);
      digit = String.fromCharCode(e.which);
      if (!/^\d+$/.test(digit)) {
        return;
      }
      if (hasTextSelected($target)) {
        return;
      }
      val = $target.val() + digit;
      return val.length <= 4;
    };

    setCardType = function(e) {
      var $target, allTypes, card, cardType, val;
      $target = $(e.currentTarget);
      val = $target.val();
      cardType = $.payment.cardType(val) || 'unknown';
      if (!$target.hasClass(cardType)) {
        allTypes = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = cards.length; _i < _len; _i++) {
            card = cards[_i];
            _results.push(card.type);
          }
          return _results;
        })();
        $target.removeClass('unknown');
        $target.removeClass(allTypes.join(' '));
        $target.addClass(cardType);
        $target.toggleClass('identified', cardType !== 'unknown');
        return $target.trigger('payment.cardType', cardType);
      }
    };

    $.payment.fn.formatCardCVC = function() {
      this.on('keydown', handleIMEKeydown);
      this.on('keyup', handleIMEKeyup);
      this.on('keypress', restrictNumeric);
      this.on('keypress', restrictCVC);
      this.on('paste', reFormatCVC);
      this.on('change', reFormatCVC);
      this.on('input', reFormatCVC);
      return this;
    };

    $.payment.fn.formatCardExpiry = function() {
      this.on('keydown', handleIMEKeydown);
      this.on('keyup', handleIMEKeyup);
      this.on('keypress', restrictNumeric);
      this.on('keypress', restrictExpiry);
      this.on('keypress', formatExpiry);
      this.on('keypress', formatForwardSlashAndSpace);
      this.on('keypress', formatForwardExpiry);
      this.on('keydown', formatBackExpiry);
      this.on('change', reFormatExpiry);
      this.on('input', reFormatExpiry);
      return this;
    };

    $.payment.fn.formatCardNumber = function() {
      this.on('keydown', handleIMEKeydown);
      this.on('keyup', handleIMEKeyup);
      this.on('keypress', restrictNumeric);
      this.on('keypress', restrictCardNumber);
      this.on('keypress', formatCardNumber);
      this.on('keydown', formatBackCardNumber);
      this.on('keyup', setCardType);
      this.on('paste', reFormatCardNumber);
      this.on('change', reFormatCardNumber);
      this.on('input', reFormatCardNumber);
      this.on('input', setCardType);
      return this;
    };

    $.payment.fn.restrictNumeric = function() {
      this.on('keydown', handleIMEKeydown);
      this.on('keyup', handleIMEKeyup);
      this.on('keypress', restrictNumeric);
      this.on('paste', reFormatNumeric);
      this.on('change', reFormatNumeric);
      this.on('input', reFormatNumeric);
      return this;
    };

    $.payment.fn.cardExpiryVal = function() {
      return $.payment.cardExpiryVal($(this).val());
    };

    $.payment.cardExpiryVal = function(value) {
      var month, prefix, year, _ref;
      _ref = value.split(/[\s\/]+/, 2), month = _ref[0], year = _ref[1];
      if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
        prefix = (new Date).getFullYear();
        prefix = prefix.toString().slice(0, 2);
        year = prefix + year;
      }
      month = parseInt(month, 10);
      year = parseInt(year, 10);
      return {
        month: month,
        year: year
      };
    };

    $.payment.validateCardNumber = function(num) {
      var card, _ref;
      num = (num + '').replace(/\s+|-/g, '');
      if (!/^\d+$/.test(num)) {
        return false;
      }
      card = cardFromNumber(num);
      if (!card) {
        return false;
      }
      return (_ref = num.length, __indexOf.call(card.length, _ref) >= 0) && (card.luhn === false || luhnCheck(num));
    };

    $.payment.validateCardExpiry = function(month, year) {
      var currentTime, expiry, _ref;
      if (typeof month === 'object' && 'month' in month) {
        _ref = month, month = _ref.month, year = _ref.year;
      }
      if (!(month && year)) {
        return false;
      }
      month = $.trim(month);
      year = $.trim(year);
      if (!/^\d+$/.test(month)) {
        return false;
      }
      if (!/^\d+$/.test(year)) {
        return false;
      }
      if (!((1 <= month && month <= 12))) {
        return false;
      }
      if (year.length === 2) {
        if (year < 70) {
          year = "20" + year;
        } else {
          year = "19" + year;
        }
      }
      if (year.length !== 4) {
        return false;
      }
      expiry = new Date(year, month);
      currentTime = new Date;
      expiry.setMonth(expiry.getMonth() - 1);
      expiry.setMonth(expiry.getMonth() + 1, 1);
      return expiry > currentTime;
    };

    $.payment.validateCardCVC = function(cvc, type) {
      var card, _ref;
      cvc = $.trim(cvc);
      if (!/^\d+$/.test(cvc)) {
        return false;
      }
      card = cardFromType(type);
      if (card != null) {
        return _ref = cvc.length, __indexOf.call(card.cvcLength, _ref) >= 0;
      } else {
        return cvc.length >= 3 && cvc.length <= 4;
      }
    };

    $.payment.cardType = function(num) {
      var _ref;
      if (!num) {
        return null;
      }
      return ((_ref = cardFromNumber(num)) != null ? _ref.type : void 0) || null;
    };

    $.payment.formatCardNumber = function(num) {
      var card, groups, upperLength, _ref;
      num = num.replace(/\D/g, '');
      card = cardFromNumber(num);
      if (!card) {
        return num;
      }
      upperLength = card.length[card.length.length - 1];
      num = num.slice(0, upperLength);
      if (card.format.global) {
        return (_ref = num.match(card.format)) != null ? _ref.join(' ') : void 0;
      } else {
        groups = card.format.exec(num);
        if (groups == null) {
          return;
        }
        groups.shift();
        groups = $.grep(groups, function(n) {
          return n;
        });
        return groups.join(' ');
      }
    };

    $.payment.formatExpiry = function(expiry) {
      var mon, parts, sep, year;
      parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
      if (!parts) {
        return '';
      }
      mon = parts[1] || '';
      sep = parts[2] || '';
      year = parts[3] || '';
      if (year.length > 0) {
        sep = ' / ';
      } else if (sep === ' /') {
        mon = mon.substring(0, 1);
        sep = '';
      } else if (mon.length === 2 || sep.length > 0) {
        sep = ' / ';
      } else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
        mon = "0" + mon;
        sep = ' / ';
      }
      return mon + sep + year;
    };

  }).call(this);

  /*
    Mulang 1.2
    Multi Language Template Plugin
    By Robert@mondido.com

    Requires JQuery to work.
   */
  (function ( $ ) {

      var methods = {
          init : function(options) {

          },
          getCountry : function(data) {
          /*
          Get estimated country from metadata and/or locale string
          returns for example: se,us,unknown
          */
              var filter = [
              {r: '(usa|united states|en_US)',c: 'us', l: 'en'},
              {r: '(austria|Ã¶sterreich|de_AT)',c: 'at', l: 'de'},
              {r: '(belgium|belgiÃ«|nl_BE)',c: 'be', l: 'nl'},
              {r: '(belgium|belgique|fr_BE)',c: 'be', l: 'fr'},
              {r: '(bulgaria|Ð‘ÑŠÐ»Ð³Ð°Ñ€Ð¸Ñ|bg_BG)',c: 'bg', l: 'en'},
              {r: '(croatia|hrvatska|hr_HR)',c: 'hr', l: 'en'},
              {r: '(czech republic|ÄeskÃ¡ republika|cs_CZ)',c: 'cz', l: 'en'},
              {r: '(cyprus|kÏÏ€ÏÎ¿Ï‚|el_CY)',c: 'cy', l: 'en'},
              {r: '(denmark|danmark|da_DK)',c: 'dk', l: 'da'},
              {r: '(estonia|eesti|et_EE)',c: 'ee', l: 'en'},
              {r: '(finland|suomi|fi_FI)',c: 'fi', l: 'fi'},
              {r: '(finland|finland|sv_FI)',c: 'fi', l: 'sv'},
              {r: '(france|france|fr_FR)',c: 'fr', l: 'fr'},
              {r: '(germany|deutschland|de_DE)',c: 'de', l: 'de'},
              {r: '(greece|eÎ»Î»Î¬Î´Î±|el_GR)',c: 'gr', l: 'en'},
              {r: '(hungary|magyarorszÃ¡g|hu_HU)',c: 'hu', l: 'en'},
              {r: '(ireland|ireland|en_IE)',c: 'ie', l: 'en'},
              {r: '(italy|italia|it_IT)',c: 'it', l: 'en'},
              {r: '(latvia|latvija|lv_LV)',c: 'lv', l: 'en'},
              {r: '(lithuania|lietuva|lt_LT)',c: 'lt', l: 'en'},
              {r: '(luxembourg|luxembourg|fr_LU)',c: 'lu', l: 'fr'},
              {r: '(luxembourg|luxemburg|de_LU)',c: 'lu', l: 'de'},
              {r: '(malta|malta|mt_MT)',c: 'mt', l: 'en'},
              {r: '(netherlands|nederland|nl_NL)',c: 'nl', l: 'nl'},
              {r: '(norway|norge|no_NO)',c: 'no', l: 'en'},
              {r: '(poland|polska|pl_PL)',c: 'pl', l: 'en'},
              {r: '(portugal|portugal|pt_PT)',c: 'pt', l: 'en'},
              {r: '(romania|romÃ¢nia|ro_RO)',c: 'ro', l: 'en'},
              {r: '(slovakia|slovensko|sk_SK)',c: 'sk', l: 'en'},
              {r: '(slovenia|slovenija|sl_SI)',c: 'si', l: 'en'},
              {r: '(spain|espaÃ±a|es_ES)',c: 'es', l: 'es'},
              {r: '(united kingdom|uk|en_GB)',c: 'gb', l: 'en'},
              {r: '(sweden|sverige|se_SE)',c: 'se', l: 'sv'}
              ];
              var score = [];
              $(filter).each(function(){
                  var regex = new RegExp(this.r,'gi');
                  var res = data.match(regex);
                  if(res){
                      score.splice(res.length, 0, this);
                  }
              });
              if(score.length > 0){
                  return score[score.length-1];
              }else{
                  return null;
              }
          }
      };


    $.fn.mulang = function( options ) {

      if ( methods[options] ) {
          return methods[ options ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      }

      if(!options){
        options = {};
      }
      if(!options.fallback){
        options.fallback = 'en';
      }
      var do_log = function(str){
        if(window.console){
          console.log(str);
        }
      };

      if(!options.lang){ //if there is no lang in options, grab from the browser
        options.lang = window.navigator.userLanguage || window.navigator.language;
        langFromData = $.fn.mulang('getCountry',options.data +' '+options.lang.replace('-','_'));
        if(langFromData){
            options.lang = langFromData.l;
        }
        do_log('mulang is grabbing '+options.lang+' from browser and metadata');
        if(options.ignore_locale){ //should we ignore locale and use ex. en for en-US
          options.lang = options.lang.substr(0,options.lang.indexOf('-'));
          do_log('mulang is ignoring locale and using '+options.lang);
        }
      }else{
        do_log('mulang is grabbing '+options.lang+' from options');
      }
      //do we have text data?
      if(window.__mulang === undefined){
        do_log('mulang languages file not loaded');
        return false;
      }
      if(!__mulang[options.lang]){
        do_log(options.lang+' is not found in mulang language file');
        if(options.fallback){
          do_log('mulang is trying fallback language '+options.fallback);
          options.lang = options.fallback;
          if(!__mulang[options.lang]){
            do_log(options.lang+' is not found in mulang language file');
            return false;
          }
        }
      }

      window.__mulang.current = options.lang;

      //find placeholder array
      var find_ph = function(str){
        var re = /.*(\[.*]).*/;
        var m;
        if ((m = re.exec(str)) !== null) {
          if (m.index === re.lastIndex) {
            re.lastIndex++;
          }
          return m[1];
        }
        return null;
      };

      //check if string contains html
      var contains_html = function(str){
        var re = /.*<.*>.*/;
        var m;
        if ((m = re.exec(str)) !== null) {
          return true;
        }
        return false;
      };

      //replace placeholders for array values
      var parse_ph = function(str,arr_str){
        var arr = eval(arr_str);
        if( Object.prototype.toString.call(arr) != '[object Array]' ) {
          do_log('placeholder parameters for is not an Array ('+arr_str+')');
        }
        for(var i = 0;i< arr.length;i++){
          str = str.replace('{'+i+'}', arr[i]);
        }
        return str;
      };

      //loop all elements
      this.each(function(){
        var found_attr = false;
        var attr_name = 'mulang'; //old name

        if($(this).attr(attr_name) !== undefined){
          found_attr = true;
        }

        if(!found_attr){
          attr_name = 'data-mulang';
          if($(this).attr(attr_name) === undefined){
            return true; //no language settings
          }
        }

        var lang_key = $(this).attr(attr_name);
        var attr = 'text';
        //find array
        var param_arr = null;
        if(lang_key.indexOf('[') > -1){
          param_arr = find_ph(lang_key);
          lang_key = lang_key.substr(0,lang_key.indexOf('['));
        }

        //find attr value
        if(lang_key.indexOf(':') > -1){
          attr = lang_key.substr(lang_key.indexOf(':')+1);
          lang_key = lang_key.substr(0,lang_key.indexOf(':'));
        }
        var txt = __mulang[options.lang][lang_key];
        if(txt === undefined){
          txt = $(this).attr(attr_name);
        }
        if(param_arr !== null){
          txt = parse_ph(txt,param_arr);
        }
        if(attr=='text'){
          if(contains_html(txt)){
            $(this).html(txt);
          }else{
            $(this).text(txt);
          }
        }else{
          $(this).attr(attr,txt);

        }
      });
    };

  }( jQuery ));


  function initMulang(lang){
      var options = {ignore_locale:true};
      if(lang){
          options.lang = lang
      }
      $('.mulang').mulang(options);
  }

  function createLangSwitch(obj){
      var ul = $('<ul class="langswitch"></ul>');
      var cssAttr = '';
      $(window.__mulang.languages).each(function(){
          if(window.__mulang.current === this.code ){
              cssAttr = 'active';
          }else{
              cssAttr = '';
          }
          var a = $('<a href="#" data-langcode="'+this.code+'">'+this.name+'</a>');
          a.addClass(cssAttr);
          var li = $('<li></li>');
          li.append(a);
          $(ul).append(li);
      });
      $(obj).append(ul);
      $(obj).find('a').on('click',function(e){
          e.preventDefault;
          $('.langswitch .active').removeClass('active');
          $('.mulang').mulang({lang: $(this).attr('data-langcode')});
          $(this).addClass('active');
      });
  }

  $('.mulang').mulang({data: mondidoSettings.metadata});
  createLangSwitch($('#languages'));

  if(document.location.href.indexOf('declined') > -1 || document.location.href.indexOf('fail') > -1) {
      alert($('#try-again').text().replace(/\s+/, ""));
  }

  /* mondido lib 1.1*/

  jQuery(function($) {
      $('#myTab li').hide();
      var tarr = [];
      var lang = window.navigator.userLanguage || window.navigator.language;
      if(window.navigator.languages){
          lang += ' '+window.navigator.languages.toString();
      }
      var country = $.fn.mulang('getCountry',mondidoSettings.metadata +' '+ lang.replace('-','_'));
      $(mondidoSettings.supportedPaymentMethods).each(function(){
          var name = this.name;
          var keep = false;

          if(this.active){
              if($.inArray('all', this.currencies) > -1 || $.inArray(mondidoSettings.currency, this.currencies) > -1){ // allowed currency
                  if($.inArray('all', this.countries) > -1 || $.inArray(country.c, this.countries) > -1){ // allowed country
                      $('.'+name).show();
                      keep = true;
                  }
              }
          }

          if(keep){
              tarr.push($($('.'+name)[0]).detach());
          }else{
              $($('.'+name)[0]).detach();
          }
      });

      $(tarr).each(function(){
          $('#myTab').append(this);
          this.show();
      });

      if(document.location.href.indexOf('payment.selected') > -1) {
          var tabName = getParameterByName('payment.selected')+"_tab";
          if($('.'+tabName+' a').length > 0){
              mondidoSettings.activePaymentMethod = tabName;
          }
      }
      $('.'+mondidoSettings.activePaymentMethod+' a').trigger('click');
      $('[data-numeric]').payment('restrictNumeric');
      $('.cc-number').payment('formatCardNumber');
      $('.cc-cvc').payment('formatCardCVC');

      $.fn.toggleInputError = function(erred) {
          this.parent('.form-group').toggleClass('has-error', erred);
          return this;
      };
  });

  $(document).ready(function(){

      invoice = $.grep(mondidoSettings.supportedPaymentMethods, function(e){ return e.name == "invoice_tab"; });
      segmentation = invoice[0].segmentation;

      if (invoice[0].segmentation.b2b == true && invoice[0].segmentation.b2c == true){
        $('#segmentation_toggle').removeClass('hidden');

        $( "select#segmentation_select" ).change(function () {
          var str = "";

        $( "select option:selected" ).each(function() {
          str += $( this ).val();
        });

        $('#segmentation').val(str);
          set_segmentation(str);
        });

        if (isBlank($('#segmentation').val())){
          $('#segmentation').val(segmentation.defualt);
        }

      } else {

        if (invoice[0].segmentation.b2c == true){
          $('#row-ssn-details').removeClass('hidden');

          $('#first_name').attr('disabled', 'disabled');
          $('#last_name').attr('disabled', 'disabled');
          $('#zip').attr('disabled', 'disabled');
          $('#city').attr('disabled', 'disabled');
          $('#address_1').attr('disabled', 'disabled');
          $('#address_2').attr('disabled', 'disabled');

          $('#segmentation').val("b2c");
          $('#segmentation').addClass('hidden');
        } else {
          $('#segmentation').val("b2b");
          $('#segmentation').addClass('hidden');
        }
      }

      function set_segmentation(segmentation){
        $('#ssn').val("");
        $('#row-customer-details').addClass('hidden');
        $('#first_name').val("");
        $('#last_name').val("");
        $('#zip').val("");
        $('#city').val("");
        $('#address_1').val("");
        $('#address_2').val("");
      }

      var ssn_on_load = $('#ssn').val();

      var lastKey = null;
      var loading_ssn = $("#row-ssn-details-loading");
      var last_ssn = $('#ssn').val();

      if (isBlank($('#country_code').val())){
          $('#country_code').val("swe");
      }

      function ssn_lookup(ssn_value){
        var api_url = mondidoSettings.config.system.endpoint;

        var ssn = ssn_value;
        var is_test = 'true';
        var country_code = mondidoSettings.country_code;

        if(country_code == "SWE" && ssn.length === 12){
          ssn = ssn.slice(2);
        }

        if ( country_code != "SWE"){
            $('#row-ssn-details').removeClass('hidden');
            $('#row-customer-details').removeClass('hidden');
            $('#ow-ssn-details-loading').addClass('hidden');
            ssn_on_load = 0;

        } else if (isSwedishSocialSecurityNumber(ssn_on_load)){
          var first_name =  $('#first_name').val();
          var last_name = $('#last_name').val();
          var zip = $('#zip').val();
          var city = $('#city').val();
          var address_1 = $('#address_1').val();

          if (!isBlank(first_name) && !isBlank(last_name) && !isBlank(zip) && !isBlank(city) && !isBlank(address_1)) {
            $('#row-ssn-details').removeClass('hidden');
            $('#row-customer-details').removeClass('hidden');
            $('#ow-ssn-details-loading').addClass('hidden');
            ssn_on_load = 0;
            return true;
          }
        }

      var ssn_url = api_url+"ssn?token="+Mondido.token+"&transaction_id="+Mondido.transaction.id+"&merchant_id="+Mondido.merchant.id+"&test="+is_test+"&ssn="+ssn+"&country="+country_code;

      if (mondidoSettings.config.development == true || $('#segmentation').val() == "b2b"  || country_code != "SWE"){
        $('#row-ssn-details').removeClass('hidden');

        if ($('#segmentation').val() == "b2b"  || country_code != "SWE"){
          $('#row-ssn-details').removeClass('hidden');

          $('#first_name').removeAttr("disabled");
          $('#last_name').removeAttr("disabled");
          $('#zip').removeAttr("disabled");
          $('#city').removeAttr("disabled");
          $('#address_1').removeAttr("disabled");
          $('#address_2').removeAttr("disabled");
          $('#ssn').addClass('valid');
        } else {

          $('#first_name').val("first_name - Development").addClass('valid');
          $('#last_name').val("last_name - Development").addClass('valid');
          $('#zip').val("zip - Development").addClass('valid');
          $('#country_code').val("SWE").addClass('valid');
          $('#city').val("city - Development").addClass('valid');
          $('#address_1').val("address_1 - Development").addClass('valid');
          $('#address_2').val("address_2 - Development").addClass('valid');
          $('#pending_payment_customer').val("");

          $('#first_name').attr('disabled', 'disabled');
          $('#last_name').attr('disabled', 'disabled');
          $('#zip').attr('disabled', 'disabled');
          $('#city').attr('disabled', 'disabled');
          $('#address_1').attr('disabled', 'disabled');
          $('#address_2').attr('disabled', 'disabled');

        }

          $('#row-customer-details').removeClass('hidden');
          $('#row-ssn-details-error').addClass('hidden');
  
      } else {
    
        var jqxhr = $.get( ssn_url, function() {
            }).done(function(address) {

              $('#row-ssn-details').removeClass('hidden');
              $('#first_name').val(address.first_name).addClass('valid');
              $('#last_name').val(address.last_name).addClass('valid');
              $('#zip').val(address.zip).addClass('valid');
              $('#country_code').val(address.country).addClass('valid');
              $('#city').val(address.city).addClass('valid');
              $('#address_1').val(address.address_1).addClass('valid');
              $('#address_2').val(address.address_2).addClass('valid');
              $('#pending_payment_customer').val(address.id);

              if (address.address_2 === undefined || address.address_2 === null || isBlank(address.address_2)) {
                $('#address_2').addClass('hidden');
              }

              $('#row-customer-details').removeClass('hidden');
              $('#row-ssn-details-error').addClass('hidden');

               $('#ssn').addClass('valid');
            })
            .fail(function(data) {
              loading_ssn.addClass('hidden');
              $('#row-ssn-details-error').removeClass('hidden');
              $('#ow-ssn-details-loading').addClass('hidden');
              $('#ssn').addClass('invalid');
            })
            .always(function() {
              if ($('#segmentation').val() == "b2c"){
                $('#first_name').attr('disabled', 'disabled');
                $('#last_name').attr('disabled', 'disabled');
                $('#zip').attr('disabled', 'disabled');
                $('#city').attr('disabled', 'disabled');
                $('#address_1').attr('disabled', 'disabled');
                $('#address_2').attr('disabled', 'disabled');
              }
            });
        }
      }

      $('#btn-get-address').on('click',function(e){
        var ssn=$('#ssn').val();
        ssn_lookup(ssn);
      });

      $("#trustlyform").attr("action", $("#mondidopayform").attr("action"));
      $("#swishform").attr("action", $("#mondidopayform").attr("action"));
      $("#paypalform").attr("action", $("#mondidopayform").attr("action"));

      $('#myTab a').click(function (e) {
          e.preventDefault();
          var set_payment_method = function(m){
              $('#payment_method').val(m);
          };
          set_payment_method('credit_card_'); //default

          if($(this).attr("href")=="#trustly_tab"){
              set_payment_method('bank');
              $('#trustlyform').submit();

          }else if($(this).attr('href') == '#invoice_tab'){
              set_payment_method('invoice');
          }else if($(this).attr('href') == '#swish_tab'){
              set_payment_method('swish');
          }
          $(this).tab('show');
      });

      $('#myTab li[class="active"] a').trigger('click');

      $.changeFocus = function(object){
          // Enable Pay Button
          if(object.attr("id")=="card_cvv"){
              $("#paybtn-cc").prop("disabled", false);
          }
      };

      // Mobile Modifications
      if( (/iPhone|iPod|iPad|Android|BlackBerry/).test(navigator.userAgent)){
          $("#card_number").attr("pattern","\\d*");
      }

      var current_y = parseInt((new Date()).getFullYear().toString().substr(2,2));
      $("#card_number").keydown(function(e){
          $("#card_number").validateCreditCard(function(result){
              if (result.card_type) {
                  $(".cards").removeClass("visa");
                  $(".cards").removeClass("visa_electron");
                  $(".cards").removeClass("electron");
                  $(".cards").removeClass("maestro");
                  $(".cards").removeClass("mastercard");
                  $(".cards").removeClass("discover");
                  $(".cards").removeClass("amex");

                  $(".cards").addClass(result.card_type.name);
                  $(".cards").addClass("active");
              } else {
                  $(".cards").removeClass("active");
              }
          });
      });
      $("#card_number, #expMM, #expYY, #card_cvv").focusout(function(){

          // On blur, verify if field is valid
          // If valid, add "valid" css class
          // Else, add "invalid" css class
          var valid = false;
          switch($(this).attr("id")){
            case "card_number":
                $(this).validateCreditCard(function(result){
                    if(result.luhn_valid && result.length_valid && result.card_accepted){
                        $("#card_type").val(result.card_type.name);
                        valid=true;
                        ccvalid = true;
                    }
                });
                break;
            case "expMM":
                expmm = parseInt($(this).val())
                if(!isNaN(expmm)){
                    if (expmm >= 1 && expmm <= 12){
                        valid = true;
                    }
                }
                break;
            case "expYY":
                expyy = parseInt($(this).val());
                if(!isNaN(expyy)){
                    if (expyy >= current_y && expyy <= (current_y+20)){
                        valid = true;
                    }
                }
                break;
            case "card_cvv":
                cvv = parseInt($(this).val());
                if(!isNaN(cvv)){
                    if (cvv >= 0 && cvv <= 9999){
                        valid = true;
                    }
                }
                break;
          }

          // Cleaning CSS
          $(this).removeClass('valid');
          $(this).removeClass('invalid');

          if(valid){
            $(this).addClass('valid');
          } else {
            $(this).addClass('invalid');
          }
      });

      $('#swishform').submit(function(e){
          sn = $('#swish_number').val();
          sn = sn.replace(/[^0-9.]/g, "");

          if(sn.substr(0,2) != '46'){
              sn = sn.substring(1);
              sn = '46'+sn;
          }

          if(sn.length < 5){
            $('#swish_number').removeClass('valid');
            $('#swish_number').addClass('invalid');
            return false;
          }else{
            $('#swish_number').removeClass('invalid');
            $('#swish_number').addClass('valid');
          }

          $('#swish_number').val(sn);
      });

      $('#invoiceform').submit(function(e){
          if($('#accept')[0].checked == false){
              alert('Du behÃ¶ver godkÃ¤nna villkoren.');
              return false;
              }
              return true;
      });


      $('#mondidopayform').submit(function(e){
        var errString = $("#validation-error").text()+"\n";

        $.errFields = Array();
        $("#card_number, #expMM, #expYY, #card_cvv").each(function(){
            if(!$(this).hasClass("valid")){
                $.errFields.push($(this).attr("placeholder"));
            }
        });
        errString = errString + $.errFields.join(", ");

        if($.errFields.length > 0 && $("#trustly1").length===0){
            $("#errors").html(errString);
            $("#errors").show();

            $('#paybtn-cc').show();
            $('#loading-cc').addClass('hidden');
            $('.footer').show();
            return false;
        }

        $("#card_expiry").val(
            $("#expMM").val() + $("#expYY").val()
        );

        $("#errors").hide();
        return true;
      });

      var errMsg = getParameterByName('error_name');
      if(errMsg){
        switch(errMsg){
          case 'errors.personal_number.missing':
              alert('personnummer saknas');
              break;
          case 'errors.missing_or_invalid.phone_number':
              alert('Telefonnummer saknas');
              break;
          case 'errors.invalid.email':
              alert('E-post Ã¤r inte korrekt');
              break;
          case 'errors.invoice.credit_approval_failed':
              alert('Kreditypplysningen misslyckades');
              break;
          case 'errors.invoice.credit_not_approved':
              alert('Kreditupplysningen nekades');
              break;
          case 'errors.invoice.amount.requested.lower_than_minimum_purchase_amount':
              alert('Beloppet Ã¤r fÃ¶r lÃ¥gt fÃ¶r fakturabetalning');
              break;
          case 'errors.invoice.amount.requested.higher_than_maximum_purchase_amount':
              alert('Beloppet Ã¤r fÃ¶r hÃ¶gt fÃ¶r fakturabetalning');
              break;
          case 'errors.invoice.account_error':
              alert('Fakturakontot Ã¤r felinstÃ¤llt');
              break;
          case 'errors.invoice.account_was_overdrawn':
              alert('Kontot Ã¤r Ã¶vertrasserat');
              break;
          default:
              break;
        }
      }

      function input_change() {
          if (this.id === 'email') {
          if (validate_email(this.value)){
              $("#row-phone-details").removeClass('hidden');
          }
          }

          if (this.id === 'phone') {
          if (validate_phone(this.value)){
              $("#row-ssn-details").removeClass('hidden');
          }
          }

          if (this.id === 'ssn'){
          if (isSwedishSocialSecurityNumber(this.value)){
              ///$('#row-ssn-details-loading').removeClass('hidden');
              ssn_lookup(this.value);
          }
          }
      }

      $(function() {
        $(':input').change(input_change).keyup(input_change);
      });

      function isSwedishSocialSecurityNumber(ssn){
        valid = false;

        if (mondidoSettings.country_code != "SWE"){

          if (ssn.length == 12){
            valid = true;
            $('#row-customer-details').addClass('hidden');
          }
        } else {
          valid = /^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/.test(ssn);
          if (!valid){
            $('#row-customer-details').addClass('hidden');
          }
        }

        return valid;
      }

      /// ON LOAD
      if (validate_email($('#email').val())) {
          $("#row-phone-details").removeClass('hidden');
      }

      if (validate_phone($('#phone').val())) {
          $("#row-ssn-details").removeClass('hidden');
      }

      if (isSwedishSocialSecurityNumber($('#ssn').val())) {
          ssn_lookup($('#ssn').val());
      }

      $(document).ajaxStart(function () {
          loading_ssn.removeClass('hidden');
      });

      $(document).ajaxStop(function () {
          loading_ssn.addClass('hidden');
      });
  });

  function validate_email(email) {
      var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!regex.test(email)) {
          if (isBlank(email)) {
            $('#email').removeClass('valid');
            $('#email').removeClass('invalid');
          } else {
            $('#email').addClass('invalid');
          }
          return false;
      } else {
            $('#email').addClass('valid');
          return true;
      }
  }

  function isEmpty(s){
    return !s.length;
  }

  function isBlank(s){
    if(s){
      return isEmpty(s.trim());
    }
    return true;
  }

  function validate_phone(phone_number){
    valid = ((phone_number.length >= 8) && (phone_number.length <= 11));
    if (valid){
        $('#phone').addClass('valid');
    } else {
        if (isBlank(phone_number)) {
        $('#phone').removeClass('valid');
        $('#phone').removeClass('invalid');
        } else {
        $('#phone').addClass('invalid');
        }
    }

    return valid;
  }

  function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  function canceled(){
      alert($('#try-again').text());
      $("#errors").hide();
      $('.card-tab').tab('show');
  }

  // payment card scripts
  (function() {
      var $,
          __indexOf = [].indexOf || function(item) {
              for (var i = 0, l = this.length; i < l; i++) {
                  if (i in this && this[i] === item) return i;
              }
              return -1;
          };

      $ = jQuery;
      $.fn.validateCreditCard = function(callback, options) {
          var card, card_type, card_types, get_card_type, is_card_accepted, is_valid_length, is_valid_luhn, normalize, validate, validate_number, _i, _len, _ref, _ref1;
          card_types = [{
              name: 'amex',
              pattern: /^3[47]/,
              valid_length: [15]
          }, {
              name: 'diners',
              pattern: /^30[0-5]/,
              valid_length: [14]
          }, {
              name: 'diners',
              pattern: /^36/,
              valid_length: [14]
          }, {
              name: 'jcb',
              pattern: /^35(2[89]|[3-8][0-9])/,
              valid_length: [16]
          }, {
              name: 'laser',
              pattern: /^(6304|670[69]|6771)/,
              valid_length: [16, 17, 18, 19]
          }, {
              name: 'electron',
              pattern: /^(4026|417500|4508|4844|491(3|7))/,
              valid_length: [16]
          }, {
              name: 'visa',
              pattern: /^4/,
              valid_length: [16, 13]
          }, {
              name: 'mastercard',
              pattern: /^5[1-5]/,
              valid_length: [16]
          }, {
              name: 'maestro',
              pattern: /^(5018|5020|5038|6304|6759|676[1-3])/,
              valid_length: [12, 13, 14, 15, 16, 17, 18, 19]
          }, {
              name: 'discover',
              pattern: /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
              valid_length: [16]
          }];
          if (options == null) {
              options = {};
          }
          if ((_ref = options.accept) == null) {
              options.accept = (function() {
                  var _i, _len, _results;
                  _results = [];
                  for (_i = 0, _len = card_types.length; _i < _len; _i++) {
                      card = card_types[_i];
                      _results.push(card.name);
                  }
                  return _results;
              })();
          }
          _ref1 = options.accept;
          for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
              card_type = _ref1[_i];
              if (__indexOf.call((function() {
                      var _j, _len1, _results;
                      _results = [];
                      for (_j = 0, _len1 = card_types.length; _j < _len1; _j++) {
                          card = card_types[_j];
                          _results.push(card.name);
                      }
                      return _results;
                  })(), card_type) < 0) {
                  throw "Credit card type '" + card_type + "' is not supported";
              }
          }
          get_card_type = function(number) {
              var _j, _len1, _ref2;
              _ref2 = (function() {
                  var _k, _len1, _ref2, _results;
                  _results = [];
                  for (_k = 0, _len1 = card_types.length; _k < _len1; _k++) {
                      card = card_types[_k];
                      if (_ref2 = card.name, __indexOf.call(options.accept, _ref2) >= 0) {
                          _results.push(card);
                      }
                  }
                  return _results;
              })();
              for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                  card_type = _ref2[_j];
                  if (number.match(card_type.pattern)) {
                      return card_type;
                  }
              }
              return null;
          };
          is_valid_luhn = function(number) {
              var digit, n, sum, _j, _len1, _ref2;
              sum = 0;
              _ref2 = number.split('').reverse();
              for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
                  digit = _ref2[n];
                  digit = +digit;
                  if (n % 2) {
                      digit *= 2;
                      if (digit < 10) {
                          sum += digit;
                      } else {
                          sum += digit - 9;
                      }
                  } else {
                      sum += digit;
                  }
              }
              return sum % 10 === 0;
          };
          is_valid_length = function(number, card_type) {
              var _ref2;
              return _ref2 = number.length, __indexOf.call(card_type.valid_length, _ref2) >= 0;
          };
          is_card_accepted = function(card_type) {
              var brand = card_type.name;
              var rule = mondidoSettings.supportedCards[brand];

              if(rule && rule.active){
                  if(rule.currencies.indexOf('all') > -1 || rule.currencies.indexOf(mondidoSettings.currency.toLowerCase()) > -1){
                      return true;
                  }
              }
              return false;
          };
          validate_number = function(number) {
              var length_valid, luhn_valid, card_accepted;
              card_type = get_card_type(number);
              luhn_valid = false;
              length_valid = false;
              if (card_type != null) {
                  luhn_valid = is_valid_luhn(number);
                  length_valid = is_valid_length(number, card_type);
                  card_accepted = is_card_accepted(card_type);
              }
              return callback({
                  card_type: card_type,
                  luhn_valid: luhn_valid,
                  length_valid: length_valid,
                  card_accepted: card_accepted
              });
          };
          validate = function() {
              var number;
              number = normalize($(this).val());
              return validate_number(number);
          };
          normalize = function(number) {
              return number.replace(/[ -]/g, '');
          };
          this.bind('input', function() {
              $(this).unbind('keyup');
              return validate.call(this);
          });
          this.bind('keyup', function() {
              return validate.call(this);
          });
          if (this.length !== 0) {
              validate.call(this);
          }
          return this;
      };

  }).call(this);

  var ccvalid = false;
  var cardholdervalid = false;
  var cardcvvvalid = false;
  var cardexpiryvaid = false;
  String.prototype.endsWith = function(suffix) {
      return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  String.prototype.removeEnd = function(s) {
      if (this.endsWith(s)) {
          return this.substring(0, this.length - s.length);
      }
      return this;
  };

  (function() {

      $('#mondidopayform').on('submit', function() {
          var checks = true;
          var errString = $('#validation-error').text().replace(/\s+/, "");
          var eventName = 'keyup';
          $('input[name="card_number"]').trigger(eventName);
          $('input[name="card_holder"]').trigger('keydown');
          $('input[name="card_cvv"]').trigger('keydown');
          $('input[name="expMM"], input[name="expYY"]').trigger('change');

          $('input[name="card_number"]').removeClass('not-valid');
          $('input[name="card_holder"]').removeClass('invalid');
          $('input[name="card_cvv"]').removeClass('not-valid');
          $('input[name="expMM"], input[name="expYY"]').removeClass('not-valid');

          if (!ccvalid) {
              errString += $('#err_cardnumber').text().replace(/\s+/, "")+', ';
                  $('input[name="card_number"]').addClass('not-valid');
              checks = false;
          }
          if (!cardholdervalid) {
              errString += $('#err_cardholder').text().replace(/\s+/, "")+', ';
              checks = false;
              $('input[name="card_holder"]').addClass('invalid');
          }
          if (!cardcvvvalid) {
              errString += $('#err_cvv').text().replace(/\s+/, "")+', ';
              checks = false;
              $('input[name="card_cvv"]').addClass('not-valid');
          }
          if (!cardexpiryvaid) {
              errString += $('#err_expiry').text().replace(/\s+/, "");
              checks = false;
              $('input[name="expMM"], input[name="expYY"]').addClass('not-valid');
          }
          if (!checks) {
              $('#paybtn-cc').show();
              $('#loading-cc').addClass('hidden');

              alert(errString.removeEnd(', '));
              return false;
          }else{
              $('#paybtn-cc').hide();
              $('#loading-cc').removeClass('hidden');
          }
          return true;
      });

      $('input[name="card_number"]').validateCreditCard(function(result) {
          if(result && result.card_type != null){
              var text = $('#badcard').text();
              text = text.replace('{card}',result.card_type.name.toUpperCase());
              $('.arrow_box').text(text);
          }
          if (result.length_valid && result.luhn_valid && result.card_accepted) {
              ccvalid = true;
              $('div.card_number_div .cards').removeClass('not_accepted');
              $('input[name="card_number"]').removeClass('not-valid');
              $('input[name="card_number"]').addClass('valid');
              $('input[name="card_type"]').val(result.card_type.name.toUpperCase());
              $('input[name="card_type"]').addClass('valid');
              $('input[name="card_type"]').removeClass('not-valid');
          } else {
              ccvalid = false;
              if($('input[name="card_number"]').val().length > 1){
                  if(!result.card_accepted){
                      $('div.card_number_div .cards').addClass('not_accepted');
                  }else{
                      $('div.card_number_div .cards').removeClass('not_accepted');
                  }
                  $('input[name="card_number"]').addClass('not-valid');
                  $('input[name="card_type"]').addClass('not-valid');
              }else{
                  $('div.card_number_div .cards').removeClass('not_accepted');
              }
              $('input[name="card_number"]').removeClass('valid');
              $('input[name="card_type"]').removeClass('valid');
              if(!result.card_accepted && result.card_type != null){
                  var badCard = $('#badcard').text().replace(/\s+/, "");
                  $('input[name="card_type"]').val(badCard.replace('{card}',result.card_type.name.toUpperCase()));
              }
          }
      });

      $('input[name="card_holder"]').on('keydown blur', function(event) {
          if (event.which == 13) {
              event.preventDefault();
          }
          var val = $('input[name="card_holder"]').val();
          var isValid = val.trim().split(' ').length;
          if (isValid > 1) {
              $('input[name="card_holder"]').addClass('valid');
              $('input[name="card_holder"]').removeClass('invalid');
              cardholdervalid = true;
          } else {
              $('input[name="card_holder"]').removeClass('valid');
              $('input[name="card_holder"]').addClass('invalid');
              cardholdervalid = false;
          }
      });

      $('input[name="card_cvv"]').on('keydown blur', function(event) {
          if (event.which == 13) {
              event.preventDefault();
          }
          var val = $('input[name="card_cvv"]').val();
          if (val.length > 1) {
              $('input[name="card_cvv"]').addClass('valid');
              $('input[name="card_cvv"]').removeClass('not-valid');
              cardcvvvalid = true;
          } else {
              $('input[name="card_cvv"]').addClass('not-valid');
              $('input[name="card_cvv"]').removeClass('valid');
              cardcvvvalid = false;
          }
      });

      $('input[name="expMM"], input[name="expYY"]').change(function(event) {
          var val = $('input[name="expMM"]').val();
          var val2 = $('input[name="expYY"]').val();
          var expDate = new Date(Date.parse('20'+val2+'-'+val+'-01'));
          var fuDate = new Date(expDate.setDate(expDate.getDate()+30)); //add 30 days
          var now = new Date();
          var notExpired = fuDate > now;
          if ((val != '--' && val2 != '--') && notExpired == true) {
              $('input[name="card_expiry"]').val(val + val2);
              $('input[name="expMM"]').addClass('svalid');
              $('input[name="expYY"]').addClass('svalid');
              $('input[name="expMM"]').removeClass('not-valid');
              $('input[name="expYY"]').removeClass('not-valid');
              cardexpiryvaid = true;
          } else {
              $('input[name="expMM"]').addClass('not-valid');
              $('input[name="expYY"]').addClass('not-valid');
              $('input[name="expMM"]').removeClass('svalid');
              $('input[name="expYY"]').removeClass('svalid');
              cardexpiryvaid = false;
          }
      });
  }).call(this);


$(document).ready(function(){

    var api_url = "https://pay.mondido.com/v1/";
    var is_test = false;
    var log_it = function(str){
        if(console){
            console.log(str);
        }
    };
    
    var Spinner = {};
    try{
    var spinner = new Spinner().spin();
    $('#mpspin').append(spinner.el);
    $('.spinner').css({'position':'relative','top':'-29px'});
    spinner.stop();

}catch(e){
    
}
    var spin_it = function(start){
        return;
        if(start == true){
            $("#checkoutButtonDiv img").hide();
            spinner = new Spinner().spin();
            $('#mpspin').append(spinner.el);
            $('.spinner').css({'position':'relative','top':'-29px','z-index':'200'});
        }else{
            $("#checkoutButtonDiv img").show();
            spinner.stop();
        }
    };

    if (typeof Mondido === "undefined") {
      log_it("Error could not load Mondido object");
      Mondido = {
        token: "Mondido",
        transaction: {
          id: "0"
        },
        merchant: {
          id: "0"
        }
      }
    }


    $("#checkoutButtonDiv").click(function(){
       log_it("checkoutButtonDiv");
        spin_it(true);
       var request_token = api_url+"request_token?token="+Mondido.token+"&transaction_id="+Mondido.transaction.id+"&merchant_id="+Mondido.merchant.id+"&test="+is_test;

       log_it("LINK -> "  + request_token);

       var jqxhr = $.get( request_token, function() {
        }).done(function(data) {
            log_it(data.masterpass);
           handleConnectWithMasterPass(data.masterpass);


          }).fail(function() {
            log_it("checkoutButtonDiv -> fail");
            spin_it(false);
          }).always(function() {
            log_it("checkoutButtonDiv -> always");
          }).done(function() {
            spin_it(false);
          });

    });

    function handleConnectWithMasterPass(mp_obj) {
      var connect_data;

      connect_data =  {
        "requestToken": mp_obj.request_roken,
        "callbackUrl": mp_obj.callback_rrl,
        "merchantCheckoutId": mp_obj.merchant_checkout_id,
        "allowedCardTypes": mp_obj.allowed_card_types,
        "requestedDataTypes": mp_obj.requested_data_types,
        "version":"v6",
        "loyaltyEnabled":  mp_obj.loyalty_enabled,
        "requestBasicCheckout":  mp_obj.request_basic_checkout,
        "suppressShippingAddressEnable":  mp_obj.suppress_shipping_address_enable,
        "successCallback": handleCallbackSuccess,
        "failureCallback": handleCallbackFailure,
        "cancelCallback": handleCallbackCancel
      };
      log_it(connect_data);

      MasterPass.client.checkout(connect_data);
    };

    function handleCallbackSuccess(data) {
      var fullPath;
      var callbackPath;
      spin_it(true);
      callbackPath = "?oauth_token="+data.oauth_token;
      callbackPath += "&oauth_verifier="+data.oauth_verifier;
      callbackPath += "&checkout_resource_url="+data.checkout_resource_url;

      fullPath = window.location.origin + "/oauthcallback";
      fullPath += callbackPath;

      log_it("handleCallbackSuccess request-->");
      log_it(fullPath);

      $.get(fullPath, function(data, status){
        window.location.replace(data);
      });
    }

    function handleCallbackFailure(data) {
      log_it("handleCallbackFailure");
      log_it(data);
      spin_it(false);
    }

    function handleCallbackCancel(data) {
      log_it("handleCallbackCancel");
      log_it(data);
      spin_it(false);
    }

    function getJsonFromUrl() {
      var query = location.search.substr(1);
      var result = {};
      query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
      });
      return result;
    }

    var locationParams = getJsonFromUrl();

    if (locationParams.checkout) {
    callbackPath += "?connected=true"
    checkout = true;
    $("#pairingConfigDiv").css("display", "block");
    //         $("#checkoutButtonDiv").css("display", "none");
    $("#merchantInit").css("display", "none");
    }

    $("#pairingConfigDiv").css("display", "block");
    //  $("#checkoutButtonDiv").css("display", "none");
    $("#merchantInit").css("display", "none");
});


  (function($) {
      $.QueryString = (function(a) {
          if (a == "") return {};
          var b = {};
          for (var i = 0; i < a.length; ++i)
          {
              var p=a[i].split('=');
              if (p.length != 2) continue;
              b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
          return b;
      })(window.location.search.substr(1).split('&'))
  })(jQuery);