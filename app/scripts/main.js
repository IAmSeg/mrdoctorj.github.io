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
