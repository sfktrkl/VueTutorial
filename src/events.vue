<template>
  <div>
    <button @click="change">Change</button>
  </div>
</template>

<script>
  export default {
  props: {
    title: String,
  },
  data () {
    return { }
  },
  methods: {
    change: function () {
        // Emit the event and also the data which will be passed
        // Use kebab-case in event names since they do not have any automatic case transformation
        this.$emit('change-title', 'Hello from component');
    },
  },
}
</script>

<style>

</style>

