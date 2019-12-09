<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @on-click="btn1"><i slot="icon">*</i>按钮</i-button>
    <i-button size="default" @sendMsg="getMsg">中等</i-button>
    <div>{{message}}</div>
    <i-button size="small" @on-click="btn2">提交</i-button>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello World',
      message: ''
    }
  },
  methods: {
    btn1(){
      console.log('hello')
    },
    btn2(){
      console.log('world')
    },
    getMsg(message) {
      this.message = message
    }
  },
  components:{
    'i-button': button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
