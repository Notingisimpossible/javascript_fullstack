<template>
  <div id="app">
    <div class="mb30">vue 组件通信的各种方式</div>
    <p>导航：
      <router-link to="/D1">1.父子组件通信</router-link>
      <router-link to="/D2">2.父子组件通信more</router-link>
      <router-link to="/D3">3.子父组件通信</router-link>
      <router-link to="/D3">4.兄弟组件通信</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
