<template>
  <div>
    <header class="container banner">
      <Navigation :current="this.$route.name" />
      <div class="">
        <h1 class="title">
          Brian Norris
        </h1>
        <h2 class="subtitle">
          Web Designer/Developer
        </h2>
      </div>
    </header>
    <main class="container">
      <p>
        Hi, I’m Brian Norris. I have 16 years experience working for advertising and media agencies as a graphic designer and web developer. I’m currently a Web Developer at The Marlin Network in Southwest Missouri and instruct Web Design courses for design majors at Missouri State University.
      </p>
      <p>
        I work with graphic designers, engineers, copywriters and user experience designers to deliver functional user experiences on the web. Find me through the various channels below, or take a look at some of my educational resources or my extra-curricular projects.
      </p>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
  created: function() {
    // console.log('router',this.$route)
  }
}

</script>

<style scoped lang="scss">
  @import '../assets/variables.scss';

  // :root {
  //   background-color: transparent;
  // }

</style>
