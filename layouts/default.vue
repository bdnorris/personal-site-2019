<template>
  <div>
    <nuxt/>
  </div>
</template>


<script>
export default {
  name: 'Default',
  created: function() {
    this.$nuxt.$loading = true
  }
}
</script>