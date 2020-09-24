import Vue from 'vue'
import App from './App.vue'

// We have root vue instance which is controlling the #app.
// We are rendering the root component App.vue which is
// imported above to #app element.
new Vue({
  el: '#app',
  render: h => h(App)
})
