<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
  export default {
  data () {
    return {
      copyright: 'Copyright'
    }
  }
}
</script>

<style scoped>
footer {
  background: #222;
  position: fixed;
  width: 100%;
  bottom: 0;
}
p {
  color: lightgreen;
  text-align: center;
}
</style>
