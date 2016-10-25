/** Custom JS stuff */

if (typeof jQuery === 'function') {
  jQuery(document).ready(function(){

    $('#done').click(function(event) {
      $(this).toggleClass('wow');
    });

  });
}