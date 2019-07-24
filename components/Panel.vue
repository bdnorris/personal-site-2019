<template>
  <div>
    <button
      type="button"
      @click="close"
    >
      <svg
        width="32px"
        height="32px"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg" 
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Design-5.1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="Desktop-Copy-2"
            transform="translate(-916.000000, -377.000000)"
            fill="#3B516B"
          >
            <g
              id="Group"
              transform="translate(916.000000, 377.000000)"
            >
              <rect
                id="Rectangle-4"
                transform="translate(16.000000, 16.000000) rotate(-45.000000) translate(-16.000000, -16.000000) "
                x="14"
                y="-4"
                width="4"
                height="40"
              />
              <rect
                id="Rectangle-4"
                transform="translate(16.000000, 16.000000) rotate(-315.000000) translate(-16.000000, -16.000000) "
                x="14"
                y="-4"
                width="4"
                height="40"
              />
            </g>
          </g>
        </g>
      </svg>
    </button>
    <article>
      <h2>
        {{ panelTitle }}
      </h2>
    </article>
  </div>
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
  background-color: $second;
  // position: absolute;
  // top: 0;
  // left: 0;
  // right: 0;
  // bottom: 0;
}

</style>