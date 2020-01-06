<template>
  <div id="app">
    <h1>cliverSnail's blog</h1>
    <BlogPage></BlogPage>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import BlogPage from './components/BlogPage.vue';
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
      BlogPage,
    },
  })

  export default class App extends Vue {

  }
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
