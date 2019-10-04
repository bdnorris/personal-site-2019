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
      <transition name="panel-contents">
        <div v-if="panelSlug === 'pugsley'">
          <p>"Because George wants to invite him to the ball," said Fred sarcastically. "Because we want to send a letter, you stupid great prat," said George. "Who d'you two keep writing to, eh?"  said Ron. "Nose out, Ron, or I'll burn that for you too," said Fred, waving his wand threateningly. "So . . . you lot got dates for the ball yet?" </p>
          <p>"George wants to invite him to the ball," said Fred sarcastically. "Because we want to send a letter, you stupid great prat," said George. "Who d'you two keep writing to, eh?"  said Ron. <a href="#">"Nose out, Ron, or I'll</a> burn that for you too," said Fred, waving his wand threateningly. "So . . . you lot got dates for the ball yet?" </p>
          <ul class="link-list">
            <li>
              <a href="#">Code Pen</a>
            </li>
            <li>
              <a href="#">Project Page</a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'heuristics'">
          http://architectingusability.com/2012/06/28/donald-normans-design-principles-for-usability/
          https://uploads.toptal.io/blog/image/123732/toptal-blog-image-1501712190014-f7387773306e657fd56f3d24b01c9ba2.png
        </div>
      </transition>
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
@import '../assets/mixins.scss';
@import '../assets/vendor/index.scss';

.panel {
  width: 100%;
  height: 100%;
  flex: 1 0 70%;
  background-color: $beige;
  padding: 1em 2.5em 2em 2em;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  overflow-y: scroll;
  h2 {
    color: $denim-light;
    font-size: 3em;
    line-height: 1;
    padding-right: 0.75em; // keep away from X
  }
  p {
    color: $text;
    &:first-of-type {
      margin-top: 1.5em;
    }
    a {
      color: $primary;
      font-weight: 600;
    }
  }
  @include breakpoint(large) {
    position: relative;
    margin-top: 0.25em;
  }
}

.close-button {
  @include button-reset;
  position: absolute;
  top: 2em;
  right: 2em;
  transform: scale(1);
  transition: transform 200ms ease;
  transform-origin: center center;
  &:hover {
    transform: scale(1.1);
  }
}

.panel-contents-enter-active, .panel-contents-leave-active {
  transition: opacity .5s;
}
.panel-contents-enter, .panel-contents-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>