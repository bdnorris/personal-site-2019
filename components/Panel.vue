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
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
}

</style>