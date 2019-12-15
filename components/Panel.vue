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
          <p>Very much *in progress* and *untested*, this is a little static site generator I put together to utilize my favorite tools with some opinionated Sass starter files.</p>
          <p>It uses Pug or HTML, Sass, and a great little library called webpack-stream that allows Webpack style JS module compilation to be used with Gulp. Meant for little sites where you want some developer convenience but don't want to go with a full framework.</p>
          <p>It also has an option to inject styles to the head of your HTML instead, making it good for developing landing pages that have to get pasted into a third party system.</p>
          <ul class="link-list">
            <li>
              <a
                href="https://github.com/bdnorris/pugsley"
                target="_blank"
              >
                View on GitHub
              </a>
            </li>
            <li>
              <a
                href="https://pugsley.netlify.com/"
                target="_blank"
              >
                Project Page
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'bookmark'">
          <p>Another very much in progress project, I wanted to try and make my own CRUD app to help manage all of my bookmarks and links. Third party bookmark sites aren't really around anymore, and browser bookmark systems leave a lot to be desired.</p>
          <p>Specifically, how can I utilize different searching and filtering patterns in javascript to make it so I can find what I need when I need it?</p>
          <ul class="link-list">
            <li>
              <a
                href="https://github.com/bdnorris/bookmark-crud"
                target="_blank"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'haiku'">
          <p>
            This project started when my friend Joey had compiled a list of haiku phrases in a Google Spreadsheet and asked if I could do anything interesting with it. <a href="https://github.com/bdnorris/haiku/">This was the result</a>.
          </p>
          <p>
            Feeling like the idea had some legs, I thought it would be a good opportunity to learn a little <a href="https://www.meteor.com/#!">Meteor.js</a>. I created an app that would randomly pull five or seven syllable lines from a Mongo DB. Meteor made it trivially easy to add an administrative backend to enter new lines, or delete old ones.
          </p>
          <ul class="link-list">
            <li>
              <a
                href="https://github.com/bdnorris/haiku-meteor"
                target="_blank"
              >
                View on GitHub
              </a>
            </li>
            <li>
              <a
                href="https://haiku-jb.herokuapp.com/"
                target="_blank"
              >
                Project Page
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'diary'">
          <p>Really just for my own use, but I'm sharing it out anyway, an exhaustive list of everything I do during my day job.</p>
          <ul class="link-list">
            <li>
              <a
                href="https://dev-diary.netlify.com/"
                target="_blank"
              >
                Project Page
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'uilib'">
          <p>
            Codepen is a really great tool and perfect for working out and storing code snippets and UI elements. I thought a good way to use this tool would be to creating common web UI components into a library of pens. Each pen is meant to do one thing, that could then be picked up and integrated into a website.
          </p>
          <p>
            I also felt I was too reliant on jQuery, and wanted to get more experience writing UI components and manipulating the DOM with modern, vanilla javascript. A work in progress, I will add more as I complete them.
          </p>
          <ul class="link-list">
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/wpdxJB"
                target="_blank"
              >
                01: Tabs
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/GyOMbm"
                target="_blank"
              >
                01: Modal
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/VyQNqQ"
                target="_blank"
              >
                03: Animated Navigation Indicator
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/JMgVKB"
                target="_blank"
              >
                04: Scroll Progress Indicator
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/WMbPbw"
                target="_blank"
              >
                05: Animated Form Labels
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/pajdNp"
                target="_blank"
              >
                06: Custom Checkboxes and Radio Buttons
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/eVWNWy"
                target="_blank"
              >
                07: Stateful Buttons
              </a>
            </li>
            <!-- <li>
              <a href="https://codepen.io/bdnorris/pen/XZyjaO">08: Download Warning</a>
            </li> -->
            <li>
              <a
                href="https://codepen.io/bdnorris/pen/KYjvEd"
                target="_blank"
              >
                Getters and Setters JS Pattern for UI Control
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'heuristics'">
          <p>
            I found the need to define some metrics for reporting on and measuring the usability of the website. After some research from Nielsen/Norman group and others, I found I could probably synthesize my own based on my research. 
          </p>
          <ul class="link-list">
            <li>
              <a 
                href="https://www.notion.so/norrisstuff/UX-My-Heuristics-and-Scoring-3cec4e98092241a7aeb4ce6dd0382a56"
                target="_blank"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'scroll'">
          <p>While working on the idea for the first student project in DES-440, it occurred to me that a very popular affect on the web is animating items as they come into the viewport, and it was likely I would be asked how this was done.</p>
          <p>A popular library for this is <a href="https://wowjs.uk/">Wow.js</a>. But I thought it would be useful and educational to attempt to write my own. I ended up working with it a bit and letting students use it on their projects.</p>
          <p>It’s is dependent on jQuery though. Since I wrote this, I've found <a href="https://github.com/terwanerik/ScrollTrigger">ScrollTriggers by Erik Terwan</a>. It solves the exact same problem with a lot more features and it's just vanilla Javascript.</p>
          <ul class="link-list">
            <li>
              <a
                href="https://github.com/bdnorris/scroll-detection-script"
                target="_blank"
              >
                View on GitHub
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === 'colophon'">
          <p>This site is built with <a href="https://nuxtjs.org/guide#static-generated-pre-rendering-">Nuxt.js's static generation mode</a>.</p>
          <p>The typefaces are Freight Display and Freight Text Pro by Joshua Darden.</p>
        </div>
        <div v-if="panelSlug === '340'">
          <p>Developed for Graphic Design and Illustration majors who have no prior experience building websites, this course serves as an introduction to modern web design and development techniques.</p>
          <p>A course website was developed during in-class demos and used to store all course materials.</p>
          <ul class="link-list">
            <li>
              <a
                href="http://msu.briannorris.io/"
                target="_blank"
              >
                Course Website
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === '440'">
          <p>Designed as a continuation of DES-330, this course offers more in-depth project work, focusing on contemporary processes and workflow.</p>
          <p>All materials are available on the course website.</p>
          <ul class="link-list">
            <li>
              <a
                href="http://msu.briannorris.io/"
                target="_blank"
              >
                Course Website
              </a>
            </li>
          </ul>
        </div>
        <div v-if="panelSlug === '390'">
          <p>Similar to my course for Graphic Design Majors, this course is designed for Media and Journalism majors. Much less coding, a little more strategy.</p>
          <p>Very much in progress...</p>
          <ul class="link-list">
            <li>
              <a href="http://msu.briannorris.io/">Course Website</a>
            </li>
          </ul>
        </div>
      </transition>
    </article>
  </div>
</template>

<script>
import Icons from '~/components/Icons/Icons.vue'

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
  height: calc(100% - 4px);
  flex: 1 0 70%;
  background-color: $beige;
  padding: 1em 2.5em 1em 2em;
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