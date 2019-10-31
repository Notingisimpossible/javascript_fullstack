<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue' // 导入标签
export default {
  name: 'App',
  components: {
    'v-header': header // 声 名组件
  }
}
</script>

<style>

</style>
