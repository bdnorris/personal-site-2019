<template>
  <section class="container">
    <Navigation :current="this.$route.name" />
    <div class="content">
      <h1 class="title">
        Projects
      </h1>
      <h2 class="subtitle">
        Web Designer/Developer
      </h2>
    </div>
  </section>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  created: function() {
    document.querySelector('body').classList.add('secondary-page')
  },
  destroyed: function() {
    document.querySelector('body').classList.remove('secondary-page')
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/variables.scss';

  :root {
    background-color: $main;
  }

</style>