<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {

}
</script>

<style lang="scss">
@import url('./assets/css/reset.css');
//为什么要重置样式 在不同的浏览器中，默认样式会有所不同。css重置样式主要是为了让各个浏览器的CSS样式有一个统一的基准。
 //我们可以通过重置样式，把浏览器的默认样式全部去掉，设置一个统一的标准。这样，
 //我们的网页页面在不同的浏览器下显示的效果就是一样的了。
//reset.css 重置网页样式，去掉浏览器的默认样式，相当于把网页变成一张白纸
*{
   padding:0;
   margin:0;
}

html,body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
