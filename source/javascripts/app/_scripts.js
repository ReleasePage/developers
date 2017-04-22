(function () {
  $(function() {
    $('pre.highlight').each(function (i, el) {
      var $el = $(el);
      var height = prevParagraph($el).height() + 25;
      const css = {
        position: 'relative',
        top: (-height) + 'px'
      };
      $el.prevUntil('*:not(pre):not(blockquote)').css(css);
      $el.css(css);
      $el.nextUntil('*:not(pre):not(blockquote)').css(css);
    });
  });

  function prevParagraph($el) {
    var $prev = $el.prev();
    while (!$prev.is('*:not(pre):not(blockquote)')) {
      $prev = $prev.prev();
    }
    return $prev;
  }
}());
