let smoothScroll = Vue.extend({
  props: ['link'],
  template: '<a class="arrow-link" data-scroll href="{{link}}"><div class="arrow"></div></a>'
});

Vue.component('smooth-scroll', smoothScroll);

new Vue({
  el: '.hero'
});
