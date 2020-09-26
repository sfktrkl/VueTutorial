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

// Event Bus
// It is just a vue instance which will emit events and listens them.
// Import this to both components which will use the data.
export const bus = new Vue({});

// We have root vue instance which is controlling the #app.
// We are rendering the root component App.vue which is
// imported above to #app element.
new Vue({
  el: '#app',
  render: h => h(App)
})
