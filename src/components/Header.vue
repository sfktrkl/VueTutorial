<template>
  <header>
    <h1>{{title}}</h1>
  </header>
</template>

<script>
  export default {
  data () {
    return {
      title: 'Vue Tutorials'
    }
  }
}
</script>

<style scoped>
header {
  background: lightgreen;
  position: fixed;
  width: 100%;
  top: 0;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
