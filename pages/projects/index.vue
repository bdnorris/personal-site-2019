<template>
  <div>
    <header class="container banner">
      <Navigation
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
          v-if="panelTitle.open"
          :panel-title="panelTitle.title"
        />
      </transition>
    </main>
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
      panelTitle: {
        title: '',
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
    loadPanel: function (title) {
      switch(title) {
        case 'balls':
          this.panelTitle.title = "Paper Balls"
          break 
        case 'scroll':
          this.panelTitle.title = "Scroll Detection"
          break 
        case 'haiku':
          this.panelTitle.title = "Haiku Generator"
          break 
        case 'grid':
          this.panelTitle.title = "Grid Experiments"
          break 
        case 'uilib':
          this.panelTitle.title = "UI Library"
          break 
        default:  
          console.error("Unrecognized Title")
      }
      this.panelTitle.open = true
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../../assets/variables.scss';

  :root {
    background-color: $main;
  }

</style>