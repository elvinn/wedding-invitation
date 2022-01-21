<template>
  <div class="beian">
    <a href="https://beian.miit.gov.cn/">{{ beiAnText }}</a>
  </div>
</template>

<script>
  export default {
    data() {
      let beiAnText = ''
      switch (location.host) {
        case 'husttic.com':
        case 'www.husttic.com':
          beiAnText = '鄂ICP备15023442号-1'
          break;
        case 'elvinn.cn':
        default:
          beiAnText = '鄂ICP备15023442号-2'
      }
      return {
        beiAnText,
      }
    }
  }
</script>

<style scoped lang="less">
  .beian {
    z-index: 100;
    position: fixed;
    bottom: 1em;
    width: 100%;
    text-align: center;

    a {
      color: white;
      text-decoration: underline;
    }
  }
</style>
