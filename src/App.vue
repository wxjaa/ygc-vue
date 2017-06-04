<template>
  <div  id="app ">
  <router-view></router-view>
  </div>
</template>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import 'style/sm.css';
  @import 'http://at.alicdn.com/t/font_uodmd3dmml5wmi.css';
  @import 'style/base.css';
</style>
<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
