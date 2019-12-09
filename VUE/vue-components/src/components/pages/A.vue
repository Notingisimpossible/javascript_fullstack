<template>
  <div class="a-test">
    AAA
    <testb></testb>
  </div>
</template>

<script>
import B from './B'


export default {
  provide: {
    name: '无敌'
  },
  components: {
  'testb': B
}
}
</script>

<style>

</style>