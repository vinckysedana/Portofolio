document.addEventListener('DOMContentLoaded', function () {
  let parent = document.querySelector('.jumbotron'),
    topPanel = parent.querySelector('.top'),
    handle = parent.querySelector('.handle'),
    skewHack = 0,
    delta = 0;

  parent.addEventListener('mousemove', function (event) {
    handle.style.left = event.clientX + delta + 'px';

    topPanel.style.width = event.clientX + skewHack + delta + 'px';
  });
});
