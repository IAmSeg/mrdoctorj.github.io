// @macbook
let macbook = Vue.extend({
  template: `<div class="macbook macbook-close">
               <div class="macbook-lid">
                 <div class="macbook-screen">
                    <div class="macbook-content">
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                      <div class="macbook-code"></div>
                    </div>
                  </div>
                </div>
              <div class="macbook-lid-close"></div>
              <div class="macbook-base"></div>`
});

Vue.component('my-macbook', macbook);
new Vue({
  el: '#computerAndCoffee'
});

// Open macbook
// Check if its in view
function isScrolledIntoView(elem)
{
  let el = $('#computerAndCoffee');

  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = el.offset().top;
  let elemBottom = elemTop + el.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var i = window.setInterval(() => {
  if (isScrolledIntoView())
    window.setTimeout(openMacbook, 300);
}, 1000);

function openMacbook() {
  document.querySelector('.macbook').classList.remove('macbook-close');
  $('.macbook-lid-close').hide();
  window.clearInterval(i);
}
