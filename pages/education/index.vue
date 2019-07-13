<template>
  <header class="container banner">
    <Navigation :current="this.$route.name" />
    <main class="">
      <h1 class="title">
        Education
      </h1>
      <h2 class="subtitle">
        Web Designer/Developer
      </h2>
    </main>
  </header>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  mounted: function() {
    document.querySelector('body').classList.add('secondary-page')
  },
  destroyed: function() {
    document.querySelector('body').classList.remove('secondary-page')
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/variables.scss';

</style>
