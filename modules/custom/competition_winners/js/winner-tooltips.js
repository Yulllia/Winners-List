(function (Drupal) {
  Drupal.behaviors.winnerTooltip = {
    attach: function (context, settings) {
      const elements = once('winnerTooltip', '.winner-title, .winner-subtitle', context);

      elements.forEach(function (el) {
        if (!(el instanceof Element)) return;

        if (el.scrollWidth > el.clientWidth) {
          el.setAttribute('title', el.textContent.trim());
        } else {
          el.removeAttribute('title');
        }
      });
    }
  };
})(Drupal);