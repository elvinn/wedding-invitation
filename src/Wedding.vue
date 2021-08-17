<template>
  <div class="wedding">
    <Editor />
    <BeiAn />
  </div>
</template>

<script>
  import Editor from "./components/Editor.vue"
  import BeiAn from "./components/BeiAn.vue"

  export default {
    props: [],
    components: {
      Editor,
      BeiAn,
    },
    name: 'Wedding'
  }

</script>

<style lang="less">
@import './assets/base.less';
html,
body{
  height: 100%;
}
.wedding{
  position: relative;
  max-width: 568px!important;
  height: 100%;
  min-height: 100%;
  margin: 0 auto;
  background: #2B2B48;
  perspective: 500px;
}
</style>
