<template>
  <div>
    <p>{{title}}</p>
    <button @click="updateData">Update Data</button>
  </div>
</template>

<script>
  export default {
  data () {
    return { 
      title: 'data',
    }
  },
  methods: {
    updateData: function () {
      this.title = 'updated data';
    }
  },
  // Life-cycle hooks
  // https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  beforeCreate () {
    console.log('beforeCreate \ndata: '+ this.title + ' \nSince data does not initialized yet, we do not have an access to data yet');
  },
  created () {
    console.log('created \ndata: ' + this.title);
  },
  beforeMount () {
    console.log('beforeMount\nTemplate did not yet rendered.');
  },
  mounted () {
    console.log('mounted\nTemplate is now rendered.');
  },
  beforeUpdate () {
    console.log('beforeUpdate\nVirtual DOM did not yet updated.');
  },
  updated () {
    console.log('updated\nVirtual Dom is now updated');
  }
}
</script>

<style>

</style>
