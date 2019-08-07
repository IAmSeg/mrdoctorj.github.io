// footer
let footer = Vue.extend({
  template: `<footer class="footer">&copy; 2016 Will Johnson</footer>`
});

Vue.component('my-footer', footer);
new Vue({
  el: 'body'
});
