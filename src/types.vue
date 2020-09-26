<template>
  <div>
    <p>From component: {{name}} and {{obj.name}}</p>
    <button @click="change">Change</button>
  </div>
</template>

<script>
  export default {
  props: {
    name: String,
    obj: Object,
  },
  data () {
    return { }
  },
  methods: {
    change: function () {
        this.obj.name = 'New Name';
        this.name = 'New Name';
    },
  },
}
</script>

<style>

</style>
