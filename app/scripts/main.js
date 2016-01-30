// TODO: remove for production
Vue.config.debug = true;

// @header
new Vue({
  el: '#header',
  data: {
    links: [
      { url: '#about', title: 'About' },
      { url: '#projects', title: 'Projects' },
      { url: '#contact', title: 'Contact' }
    ]
  }
});

// @links
new Vue({
  el: '#links',
  data: {
    links: [
      { url: 'https://twitter.com/WillAJohnson', logo: '/images/twitter.svg#twitter',
        viewbox: '0 0 246 209', title: 'twitter' },
      { url: 'https://github.com/MrDoctorJ', viewbox: '0 0 256 250',
        logo: '/images/github.svg#github', title: 'github' },
      { url: 'http://codepen.io/willalanjohnson/', viewbox: '0 0 256 256',
        logo: '/images/codepen.svg#codepen', title: 'codepen' }
    ]
  }
});

// @about
new Vue({
  el: '#about',
  data: {
    header: 'About Me',
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
    header: 'Open Source',
    desc: 'Here are some of my open source projects. See more on my <a href="https://github.com/MrDoctorJ/">GitHub.</a>',
    projects: [
      { url: 'https://github.com/MrDoctorJ/generator-future-webapp', title: 'generator-future-webapp',
        desc: 'A Yeoman generator to scaffold a front-end project using gulp, babel and cssnext.' },
      { url: 'https://github.com/MrDoctorJ/mrdoctorj.github.io', title: 'This website!',
        desc: 'The code for this website is on GitHub! Feel free to take a look!' }
    ]
  }
});

// @contact
new Vue({
  el: '#contact',
  data: {
    header: 'Contact',
    message: `Need a website build? Need help with a project?<br><br> I have experience with full stack web development
      and I embrace learning new technologies.<br><br> You can get in touch with me through the following methods.`,
    svgs: [
      { url: 'https://twitter.com/WillAJohnson', logo: '/images/twitter.svg#twitter',
        viewbox: '0 0 246 209', title: 'twitter' },
      { url: 'https://github.com/MrDoctorJ', viewbox: '0 0 256 250',
        logo: '/images/github.svg#github', title: 'github' },
      { url: 'http://codepen.io/willalanjohnson/', viewbox: '0 0 256 256',
        logo: '/images/codepen.svg#codepen', title: 'codepen' }
    ],
    pngs: [
      { url: '', path: 'images/linkedin.png', title: 'linkedin'},
      { url: 'mailto:will@willalanjohnson.com', path: 'images/email-icon.png', title: 'email'}
    ]
  }
});
