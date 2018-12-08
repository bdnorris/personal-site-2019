<template>
  <nav>
    <nuxt-link 
      v-if="current != 'index'" 
      to="/">Home</nuxt-link>
    <nuxt-link 
      v-if="current != 'projects'" 
      to="/projects">Projects</nuxt-link>
    <nuxt-link 
      v-if="current != 'education'" 
      to="/education">Education</nuxt-link>
  </nav>
</template>

<script>
// import Navigation from '~/components/Navigation.vue'

export default {
  // components: {
  //   Navigation
  // }
  props: {
    current: {
      type: String,
      required: true,
    }
  },
  created: function() {
    console.log('current', this.current)
  }
}
</script>

