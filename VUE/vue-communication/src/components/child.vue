<template>
  <div class="child">
      <h3>
          子组件
      </h3>
      <div class="">子组件要发送的消息为：{{msg}}</div>
      <button @click="sendMsg">send message</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            msg: '我是子组件当中的数据'
        }
    },
    methods: {
        sendMsg () {
            this.$emit('childMsg', this.msg)
        }
    }
}
</script>

<style>

</style>