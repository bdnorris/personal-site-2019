<template>
  <div>
    <div class="top-decoration" />
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

<style lang="scss" scoped>

@import '../assets/variables.scss';
@import '../assets/mixins.scss';
@import '../assets/vendor/index.scss';


.top-decoration {
  height: 18px;
  width: 100%;
  background-color: $second;
}
</style>