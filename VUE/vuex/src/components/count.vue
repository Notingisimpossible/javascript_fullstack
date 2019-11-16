<template>
  <div class="count">
    {{count}}
    <button @click="addAction(10)">+</button>
    <button @click="reduceAction">异步-</button>
    <button @click="reduce">同步-</button>
    {{getcount}}
    <!-- {{$store.state.count}} -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'// mapState 自带方法
export default {
  data () {
    return {
      // mycount: null
    }
  },
  // computed: {//计算属性
  //   // myCount () {
  //   //   return this.$store.state.count
  //   // }

  // }
  // computed: mapState(['count'])//写法1
  // computed: mapState({//写法2
  //   count: state => state.count
  //   // myCount (state) {
  //   //   return state.count
  //   // }
  // })
  computed: {
    ...mapState([// 解构
      'count'
    ]),
    ...mapGetters([
      'getcount'
    ])
  },
  methods: {
    ...mapMutations([
      'add',
      'reduce'
    ]),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<style>

</style>
