<template>
  <div class="site-wrapper">
    <header class="container banner">
      <Navigation
        class="header-navigation"
        :current="this.$route.name"
      />
      <div class="">
        <h1 class="title">
          Education
        </h1>
        <h2 class="subtitle">
          Course Materials
        </h2>
      </div>
    </header>
    <main class="container content">
      <nav class="projects">
        <button 
          type="button" 
          @click="loadPanel('340')"
        >
          <span>DES-340</span>
        </button>
        <button 
          type="button" 
          @click="loadPanel('440')"
        >
          <span>DES-440</span>
        </button>
        <!-- <button 
          type="button" 
          @click="loadPanel('390')"
        >
          <span>MED-390</span>
        </button> -->
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
      // console.log('close')
      this.panel.open = false
      this.panel.title = ''
      this.panel.slug = ''
    },
    loadPanel: function (slug) {
      this.panel.slug = slug
      switch(slug) {
        case '340':
          this.panel.title = "Web Design for Design Majors"
          break 
        case '440':
          this.panel.title = "Advanced Web Design for Design Majors"
          break 
        case '390':
          this.panel.title = "Interactive Web Design"
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