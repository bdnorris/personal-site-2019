<template>
  <div class="site-wrapper">
    <header class="container banner">
      <Navigation
        class="header-navigation"
        :current="this.$route.name"
      />
      <div class="">
        <h1 class="title">
          Brian Norris
        </h1>
        <h2 class="subtitle">
          Web Designer/Developer
        </h2>
      </div>
    </header>
    <main class="container container--home">
      <p>
        Hi, I’m Brian Norris. I have 16 years experience working for advertising and media agencies as a graphic designer and web developer. I’m currently a Web Developer at The Marlin Network in Southwest Missouri and instruct Web Design courses for design majors at Missouri State University.
      </p>
      <p>
        I work with graphic designers, engineers, copywriters and user experience designers to deliver functional user experiences on the web. Find me through the various channels below, or take a look at some of my educational resources or my extra-curricular projects.
      </p>
      <section class="networks">
        <h3>The Networks</h3>
        <ul>
          <li>
            <a
              href="https://dribbble.com/bdnorris"
              target="_blank"
            >
              <Networks network="dribbble" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bdnorris"
              target="_blank"
            >
              <Networks network="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brian-norris-b401ab37/"
              target="_blank"
            >
              <Networks network="linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/bdnorris"
              target="_blank"
            >
              <Networks network="codepen" />
            </a>
          </li>
        </ul>
      </section>
    </main>
    <!-- <Footer /> -->
    <Navigation
      class="footer-navigation"
      :current="this.$route.name"
    />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation'
// import Footer from '~/components/Footer'
import Networks from '~/components/Icons/Networks'

export default {
  components: {
    Navigation,
    Networks
    // Footer
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

  section.networks {
    & > ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      & > li {
        padding: 1em 1.5em 1em 0;
      }
    }
  }

</style>
