<template>
  <div>
    <nuxt />
  </div>
</template>


<script>
// import 'normalize.css';

export default {
  name: 'Default',
  created: function() {
    this.$nuxt.$loading = true
  }
}
</script>