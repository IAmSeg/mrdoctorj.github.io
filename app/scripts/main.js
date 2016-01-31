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
      <br>checkout <a data-scroll href="#projects">my projects</a> or <a data-scroll href="#contact">give me a shout</a>!`
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
        desc: `A Yeoman generator to scaffold a front-end project using gulp, babel and cssnext.<br>
              <div id="downloads"></div>` },
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
    message: `Need a website built? Need help with a project?<br><br> I have experience with full stack web development
      and I embrace learning new technologies.<br><br> You can get in touch with me through the following methods.`,
    svgs: [
      { url: 'https://twitter.com/WillAJohnson', logo: '/images/twitter.svg#twitter',
        viewbox: '0 0 246 209', title: 'twitter' },
      { url: 'https://github.com/MrDoctorJ', viewbox: '0 0 256 250',
        logo: '/images/github.svg#github', title: 'github' },
      { url: 'http://codepen.io/willalanjohnson/', viewbox: '0 0 256 256',
        logo: '/images/codepen.svg#codepen', title: 'codepen' },
      { url: 'https://www.linkedin.com/in/willalanjohnson', logo: 'images/linkedin.svg#linkedin', title: 'linkedin',
        viewbox: '0 0 550 486' },
      { url: 'mailto:will@willalanjohnson.com', logo: 'images/email-icon.svg#email', title: 'email',
        viewbox: '0 0 233 142' }
    ]
  }
});

// Projects
$.ajax({
  type: 'GET',
  url: 'https://storage.googleapis.com/generators.yeoman.io/cache.json'
}).done(data => {
  let result = $.grep(data, (n, i) => {
    return n.name === 'future-webapp';
  });
  $('#downloads').text(`Downloads: ${result[0].downloads}`);
});
