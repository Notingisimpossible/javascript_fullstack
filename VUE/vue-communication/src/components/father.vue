<template>
  <div class="container">
      <h2>父组件</h2>
      <p>
          从子组件获取的消息为:
          <span class="red">{{Msg}}</span>
      </p>
      <child v-on:childMsg="getMsg"></child>
  </div>

</template>

<script>
import child from './child'
export default {
    data () {
        return {
            Msg: ''
            }
    },
    components: {
        child
    },
    methods: {
        getMsg (e) {
        this.Msg = e
    }
    }
    
}
</script>

<style>
.red {
    color: red;
}
</style>
