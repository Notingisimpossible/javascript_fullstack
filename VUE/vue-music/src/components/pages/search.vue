<template>
  <v-search-box @click="onQueryChange">asdads</v-search-box>
</template>

<script>
import searchBox from '@/components/pages/searchBox'
export default {
  components: {
    'v-search-box': searchBox
  },
  methods: {
    onQueryChange () {
    }
  }
}
</script>

<style lang="stylus" scoped>
// @import '../../assets/css/function'
// .search
//   overflow hidden
//   &-boxword-wrapper
//   margin px2rem(4px)
</style>