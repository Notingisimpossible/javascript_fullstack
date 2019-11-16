<template>
  <div class="child">
    <h3>兄弟组建2(传递状态给组件1)</h3>
    <div>
      <button @click="sendMsg">send message</button>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return{
      title: '我是child2的数据'
    }
  },
  method: {
    sendMsg() {
      this.$emit('test',this.title)
    }
  }
}
</script>