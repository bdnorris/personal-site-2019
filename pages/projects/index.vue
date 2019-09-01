<template>
  <div class="site-wrapper">
    <header class="container banner">
      <Navigation
        class="header-navigation"
        :current="this.$route.name"
      />
      <div class="">
        <h1 class="title">
          Projects
        </h1>
        <h2 class="subtitle">
          Experiments and...
        </h2>
      </div>
    </header>
    <main class="container content">
      <nav class="projects">
        <button 
          type="button" 
          @click="loadPanel('balls')"
        >
          Paper Balls
        </button>
        <button 
          type="button" 
          @click="loadPanel('scroll')"
        >
          Scroll Detection
        </button>
        <button 
          type="button" 
          @click="loadPanel('haiku')"
        >
          Haiku Generator
        </button>
        <button 
          type="button" 
          @click="loadPanel('grid')"
        >
          Grid Experiments
        </button>
        <button 
          type="button" 
          @click="loadPanel('uilib')"
        >
          UI Library
        </button>
      </nav>
      <transition name="panel">
        <Panel 
          v-if="panel.open"
          :panel-title="panel.title"
          :panel-slug="panel.slug"
          @closed="closePanel"
        />
      </transition>
    </main>
    <Navigation
      class="footer-navigation"
      :current="this.$route.name"
    />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Panel from '~/components/Panel.vue'

export default {
  components: {
    Navigation,
    Panel
  },
  data: function() {
    return {
      panel: {
        title: '',
        slug: '',
        open: false,
      }
    }
  },
  mounted: function() {
    document.querySelector('body').classList.add('secondary-page')
  },
  destroyed: function() {
    document.querySelector('body').classList.remove('secondary-page')
  },
  methods: {
    closePanel: function () {
      console.log('close')
      this.panel.open = false
      this.panel.title = ''
      this.panel.slug = ''
    },
    loadPanel: function (slug) {
      this.panel.slug = slug
      switch(slug) {
        case 'balls':
          this.panel.title = "Paper Balls"
          break 
        case 'scroll':
          this.panel.title = "Scroll Detection"
          break 
        case 'haiku':
          this.panel.title = "Haiku Generator"
          break 
        case 'grid':
          this.panel.title = "Grid Experiments"
          break 
        case 'uilib':
          this.panel.title = "UI Library"
          break 
        default:  
          console.error("Unrecognized Title")
      }
      this.panel.open = true
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/variables.scss';
  @import '../../assets/mixins.scss';

  :root {
    background-color: $main;
  }

  button {
    @include underline-transition;
  }

</style>