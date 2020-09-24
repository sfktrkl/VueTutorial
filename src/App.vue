<!-- .vue file is just an extension of a vue component. -->
<!-- This component has a template like other components -->
<template>
  <div>
    <h1>{{title}}</h1>

    <!-- Vue Files & The Root Component -->
    <h2>Vue Files & The Root Component</h2>
    <p>{{greeting()}}</p>

    <!-- Nesting Componets-->
    <h2>Nesting Components</h2>
    <nestedG></nestedG>
    <nestedL></nestedL>

    <!-- Component CSS-->
    <h2>Component CSS</h2>
    <p class="first">From root element (first)</p>
    <p class="second">From root element (second)</p>
    <componentCSS></componentCSS>
  </div>
</template>


<!-- Inside this html, data can be accessed by exporting an object inside the script tag -->
<script>
  // Nesting Components
  import nestedL from './nestedL.vue'

  // Component CSS
  import componentCSS from './componentCSS.vue'

  export default {
  // Name of the component
  name: 'app',
  // We are returning the data like other compoenents
  data () {
    return {
      // Vue Files & The Root Component
      title: 'Vue Tutorial',
    }
    },
    methods: {
      // Vue Files & The Root Component
      greeting: function () {
        return 'Hello from the root component';
      },
    },
    computed: {

    },
    components: {
      // Nesting Components
      'nestedL': nestedL,

      // Component CSS
      'componentCSS': componentCSS,
    },
}
</script>

<style>
p.first {
  color: purple;
}
</style>

<!-- Use scoped attribute to apply styles to this component only -->
<style scoped>
p.second {
  color: blue;
}
</style>
