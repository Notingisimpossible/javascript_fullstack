<template>
  <button :class="'i-button-size' + size" @click="sureClick">
    <slot name="icon">/</slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, options) {
  for(let i =  0; i < options.length; i++){
    if(options[i] === value){
      return true
    }
  }
  return false
}
export default {
  props: {
    size: {
      // type: String,
      validator (value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    }
  },
  data() {
    return {
      message: '子组件内容'
    }
  },
  methods: {
    handleClick(){
      this.$emit('on-click')
    },
    sureClick() {
      this.handleClick()
      this.$emit('sendMsg', this.message)
    }
  },
}
</script>

<style scoped>
button{
  border: 1px solid yellow;
  background-color: yellow;
  color: aqua;
}
  .i-button-sizelarge{
    padding: 8px 10px
  }
  .i-button-sizedefault{
    padding: 6px 8px
  }
  .i-button-sizesmall{
    padding: 4px 6px
  }
</style>