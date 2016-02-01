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

new Vue({
  el: '#experiments',
  data: {
    header: 'Experiments',
    desc: 'Here are some of my experiments. See more on my <a href="http://codepen.io/willalanjohnson/">CodePen</a>.',
    embeds: [
      { script: `<p data-height="415" data-theme-id="0" data-slug-hash="epRbvb" data-default-tab="result" data-user="willalanjohnson" class='codepen'>See the Pen <a href='http://codepen.io/willalanjohnson/pen/epRbvb/'>Digital Business Card</a> by Will Johnson (<a href='http://codepen.io/willalanjohnson'>@willalanjohnson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
                  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>` },
      { script: `<p data-height="415" data-theme-id="0" data-slug-hash="vOmyqd" data-default-tab="result" data-user="willalanjohnson" class='codepen'>See the Pen <a href='http://codepen.io/willalanjohnson/pen/vOmyqd/'>iBooks</a> by Will Johnson (<a href='http://codepen.io/willalanjohnson'>@willalanjohnson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
          <script async src="//assets.codepen.io/assets/embed/ei.js"></script>` },
      { script: `<p data-height="573" data-theme-id="0" data-slug-hash="WQyYxR" data-default-tab="result" data-user="willalanjohnson" class='codepen'>See the Pen <a href='http://codepen.io/willalanjohnson/pen/WQyYxR/'>Pokemon Trainer Red</a> by Will Johnson (<a href='http://codepen.io/willalanjohnson'>@willalanjohnson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
          <script async src="//assets.codepen.io/assets/embed/ei.js"></script>` },
      { script: `  <p data-height="573" data-theme-id="0" data-slug-hash="jPwNVK" data-default-tab="result" data-user="willalanjohnson" class='codepen'>See the Pen <a href='http://codepen.io/willalanjohnson/pen/jPwNVK/'>WWDC15</a> by Will Johnson (<a href='http://codepen.io/willalanjohnson'>@willalanjohnson</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
          <script async src="//assets.codepen.io/assets/embed/ei.js"></script>` }
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
