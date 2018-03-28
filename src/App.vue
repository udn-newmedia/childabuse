<template>
  <div id="app">
    <Indicator></Indicator>
    <router-view/>
  </div>
</template>

<script>
import {Indicator} from 'udn-newmedia-vue-components'
export default {
  name: 'App',
  components: {
    Indicator,
  },
  mounted() {
  }
}
</script>

<style>
#app {
  font-size: 16px;
  line-height: 1.5;
  font-family: Arial, "Microsoft JhengHei", "微軟正黑體", sans-serif;
  word-wrap: break-word;
  text-align: justify;
  height: 100%;
}
</style>
