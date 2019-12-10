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
          @click="loadPanel('pugsley')"
        >
          <span>Pugsley</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('bookmark')"
        >
          <span>Bookmark </span><span>CRUD</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('haiku')"
        >
          <span>Haiku </span><span>Generator</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('diary')"
        >
          <span>Dev </span><span>Diary</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('uilib')"
        >
          <span>UI </span><span>Library</span>
        </button>
        <button
          type="button"
          @click="loadPanel('heuristics')"
        >
          <span>Usability </span><span>Heuristics</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('scroll')"
        >
          <span>Scroll </span><span>Detection</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('colophon')"
        >
          <span>Colophon</span>
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
        case 'pugsley':
          this.panel.title = "Pugsley"
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
        case 'heuristics':
          this.panel.title = "Usability Heuristics"
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
    background-color: $primary;
  }



</style>