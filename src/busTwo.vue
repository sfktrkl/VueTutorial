<template>
  <div>
    <p>{{title}}</p>
    <button @click="changeTitle">Change titles</button>
  </div>
</template>

<script>
  import { bus } from './main'

  export default {
  data () {
    return { 
      title: 'Title from component two',
    }
  },
  methods: {
    changeTitle: function () {
      bus.$emit('titleChanged', 'Changed title');
    }
  },
  // Listen the event from the point which component is first created.
  // Hence, use the 'created' life cycle hook.
  created () {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style>

</style>
