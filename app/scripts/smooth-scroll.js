let smoothScroll = Vue.extend({
  props: ['link'],
  template: '<a data-scroll href="{{link}}"><div class="arrow"></div></a>'
});

Vue.component('smooth-scroll', smoothScroll);

new Vue({
  el: '.hero'
});
