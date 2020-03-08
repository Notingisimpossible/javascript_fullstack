<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
// import Search from './components/Search'
export default {
  name: 'App',
  components: {
    // 'search': Search //注册组件
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  padding: 0 15px;
}
</style>
