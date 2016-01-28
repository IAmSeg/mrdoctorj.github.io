// TODO: remove for production
Vue.config.debug = true;

// @header
new Vue({
  el: '#header',
  data: {
    links: [
      {url: '#about', title: 'About'},
      {url: '#projects', title: 'Projects'},
      {url: '#contact', title: 'Contact'}
    ]
  }
});

// @links
new Vue({
  el: '#links',
  data: {
    links: [
      {url: 'https://twitter.com/WillAJohnson', logo: '/images/twitter.svg#twitter',
      viewbox: '0 0 246 209', title: 'twitter'},
      {url: 'https://github.com/MrDoctorJ', viewbox: '0 0 256 250',
      logo: '/images/github.svg#github', title: 'github'},
      {url: 'http://codepen.io/willalanjohnson/', viewbox: '0 0 256 256',
      logo: '/images/codepen.svg#codepen', title: 'codepen'}
    ]
  }
});

// @about
new Vue({
  el: '#about',
  data: {
    message: 'About Me',
    aboutText: `I'm a Web Developer from a small town in Missouri.
      I drink lots of coffee, write lots of code and watch lots of football.`,
    aboutText2: `If you'd like to get in touch, or see what I'm up to,
      <br>checkout <a href="#projects">my projects</a> or <a href=#"contact">give me a shout</a>!`
  }
});

// @projects
new Vue({
  el: '#projects',
  data: {
    message: 'Projects'
  }
});

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
              <div class="macbook-base"></div>`
});

Vue.component('my-macbook', macbook);
new Vue({
  el: '#macbook'
});

// Open macbook
// Check if its in view
function isScrolledIntoView(elem)
{
  let el = $('#macbook');

  let docViewTop = $(window).scrollTop();
  let docViewBottom = docViewTop + $(window).height();

  let elemTop = el.offset().top;
  let elemBottom = elemTop + el.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

window.setInterval(() => {
  if (isScrolledIntoView())
    window.setTimeout(openMacbook, 300);
}, 1000);

function openMacbook() {
  document.querySelector('.macbook').classList.remove('macbook-close');
}
