
let coffee = Vue.extend({
  template: `<div class="coffee coffee-cup"></div>`
});

Vue.component('my-coffee', coffee);
new Vue({
  el: '#computerAndCoffee'
});
