(function () {
  var toggle = document.getElementById('navToggle');
  var panel = document.getElementById('mobilePanel');
  if (!toggle || !panel) return;

  function closePanel() {
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    var open = panel.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closePanel);
  });
})();
