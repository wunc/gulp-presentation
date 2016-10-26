/** Custom JS stuff */

if (typeof jQuery === 'function') {
  jQuery(document).ready(function(){

    $('#done').click(function(event) {
      $(this).toggleClass('wow');
    });

  });
}

/**
 * Iterate over an HTMLCollection and perform an action on each element.
 * @param  {HTMLCollection} collection
 * @param  {function} action
 */
function iterateCollection(collection, action) {
  for (var i = 0; i < collection.length; i++) {
    action(collection[i]);
  }
}

/**
 * Add 'show' class to an element.
 * @param  {HTMLElement} element
 */
function addShowClass(element) {
  element.className += ' show';
}

/**
 * Removes 'show' class from an element.
 * @param  {HTMLElement} element
 */
function removeShowClass(element) {
  element.className = element.className.replace(/ \bshow/g, '');
}

/**
 * Adds a down click action to an element.
 * @param  {HTMLElement} element
 */
function downClick(element) {
  element.addEventListener('click', function() {
    Reveal.down();
  });
}

/** @type {string} The name of the class for the clickable down indicator elements */
var down_click_class = 'down-slide-link';

// When a slide has an available down route, show appearable child elements for that slide.
// Otherwise, hide all appearable elements in the presentation.
Reveal.addEventListener( 'slidechanged', function( event ) {
  if (Reveal.availableRoutes().down) {
    iterateCollection(Reveal.getCurrentSlide().getElementsByClassName(down_click_class), addShowClass);
  } else {
    iterateCollection(document.getElementsByClassName(down_click_class), removeShowClass);
  }
});

// When the user clicks on down indicator elements, go down.
iterateCollection(document.getElementsByClassName(down_click_class), downClick);