<!-- .vue file is just an extension of a vue component. -->
<!-- This component has a template like other components -->
<template>
  <div id="app-body">
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

    <!-- Component Examples -->
    <h2>Component Examples</h2>
    <app-header></app-header>
    <app-footer></app-footer>
    <app-player></app-player>

    <!-- Props -->
    <h2>Props</h2>
    <props :title="titleProp"></props>
  </div>
</template>


<!-- Inside this html, data can be accessed by exporting an object inside the script tag -->
<script>
  // Nesting Components
  import nestedL from './nestedL.vue'

  // Component CSS
  import componentCSS from './componentCSS.vue'

  // Component Examples
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Player from './components/Player.vue'

  // Props
  import Props from './props.vue'

  export default {
  // Name of the component
  name: 'app',
  // We are returning the data like other compoenents
  data () {
    return {
      // Vue Files & The Root Component
      title: 'Vue Tutorial',

      // Props
      titleProp: 'Hello from root component to props',
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

      // Component Examples
      'app-header': Header,
      'app-footer': Footer,
      'app-player': Player,

      // Props
      'props': Props,
    },
}
</script>

<style>
body {
  margin-left: 0px;
}
p.first {
  color: purple;
}
</style>

<!-- Use scoped attribute to apply styles to this component only -->
<style scoped>
#app-body {
  margin-top: 100px;
  margin-bottom: 100px;
}
p.second {
  color: blue;
}
</style>
