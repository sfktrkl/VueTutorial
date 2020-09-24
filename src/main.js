import Vue from 'vue'
import App from './App.vue'

//                  Nesting Components - Example                    
//                                                                  
//                  >>                      >>  Links Component     
//                  >>  Header Component    >>                      
//                  >>                      >>  Login Component     
//                  >>                                              
// Root Component   >>  Article Component                           
//                  >>                                              
//                  >>                                              
//                  >>  Footer Component                            
//                  >>                                              

// Register the component globally
import nestedG from './nestedG.vue'
Vue.component('nestedG', nestedG);

// We have root vue instance which is controlling the #app.
// We are rendering the root component App.vue which is
// imported above to #app element.
new Vue({
  el: '#app',
  render: h => h(App)
})
