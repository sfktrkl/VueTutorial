<template>
  <p>{{title}}</p>
</template>

<script>
  import { bus } from './main'

  export default {
  data () {
    return { 
      title: 'Title from component one',
    }
  },
  created () {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }

}
</script>

<style>

</style>
