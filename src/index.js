import { square } from './fun';
// import { Badge } from 'rollup_vue';

import Vue from 'vue';
import App from './components/App.vue';

// import '../node_modules/phila-standards/dist/css/phila-standards.min.css';

const vm = new Vue({
  el: '#vue-app',
  render: h => h(App)
  // store
});

// console.log('Badge:', Badge);

document.getElementById('test').innerHTML = square(10);