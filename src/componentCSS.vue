<template>
  <!-- Only one root element should be defined -->
  <div>
    <!-- Style tag in the root element will also applied to this element -->
    <p class="first">From nested component (first)</p>
    <!-- Since second style is defined in a scoped style it will not be affected -->
    <p class="second">From nested component (second)</p>
  </div>
</template>

<script>
  export default {
  data () {
    return { }
  }
}
</script>

<style>
/* This style will override the root component */
p.first {
  color: green;
}
</style>

<!-- Use scoped attribute to apply -->
<style scoped>
p.second {
  color: red;
}
</style>

