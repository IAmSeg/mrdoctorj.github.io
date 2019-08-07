let arrow = Vue.extend({
  props: ['link'],
  template: '<div class="arrow-parent"><a class="arrow-link" data-scroll href="{{link}}"><div class="arrow"></div></a></div>'
});

Vue.component('arrow-scroll', arrow);

new Vue({
  el: '.hero'
});

new Vue({
  el: '#about'
});
