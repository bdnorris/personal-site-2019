<template>
  <div class="panel">
    <button
      type="button"
      class="close-button"
      @click="close"
    >
      <Icons icon="close" />
    </button>
    <article>
      <h2>
        {{ panelTitle }}
      </h2>
      <template v-if="panelSlug === 'balls'">
        <p>"Because George wants to invite him to the ball," said Fred sarcastically. "Because we want to send a letter, you stupid great prat," said George. "Who d'you two keep writing to, eh?"  said Ron. "Nose out, Ron, or I'll burn that for you too," said Fred, waving his wand threateningly. "So . . . you lot got dates for the ball yet?" </p>
      </template>
    </article>
  </div>
</template>

<script>
import Icons from '~/components/Icons.vue'

export default {
  name: "Panel",
  components: {
    Icons
  },
  props: {
    panelTitle: {
      type: String,
      required: true,
      default: 'Project'
    },
    panelSlug: {
      type: String,
      required: true,
      default: 'balls'
    }
  },
  methods: {
    close() {
      console.log('closed')
      this.$emit('closed')
    }
  },
}
</script>

<style scoped lang="scss">

@import '../assets/variables.scss';

article {
  // background-color: $second;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
  h2 {
    color: $second;
  }
  p {
    color: $text;
  }
}

</style>