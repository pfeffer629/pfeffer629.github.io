$(document).ready( function() {
  $('.grid').masonry({
    columnWidth: 200,
    itemSelector: '.grid-item',
    isFitWidth: true
  });
});