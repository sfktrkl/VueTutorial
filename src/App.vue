<!-- .vue file is just an extension of a vue component. -->
<!-- This component has a template like other components -->
<template>
  <div>
    <h1>{{title}}</h1>

    <!-- Vue Files & The Root Component -->
    <h2>Vue Files & The Root Component</h2>
    <p>{{greeting()}}</p>
  </div>
</template>


<!-- Inside this html, data can be accessed by exporting an object inside the script tag -->
<script>
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

    }
}
</script>

<style>

</style>
