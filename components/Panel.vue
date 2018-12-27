<template>
  <article>
    {{ panelTitle }}
  </article>
</template>

<script>

export default {
  props: {
    panelTitle: {
      type: String,
      required: true,
      default: 'Project'
    }
  },
  
}
</script>

<style scoped lang="scss">

@import '../assets/variables.scss';

article {
  background-color: $second;
  position: fixed;
  top: 6em;
  right: 6em;
  bottom: 6em;
}

</style>