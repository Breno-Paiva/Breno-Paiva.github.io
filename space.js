$('#navv').affix({
    offset: {
      top: function () {
        return ($('.space-header').outerHeight())
      }
    }
  });
