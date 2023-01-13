<template>
  <div class="notfound">
    <div class="wrapper">
      <div class="big">页面不见了！</div>
      <div class="small">
        首页瞧瞧，点击<router-link to="/">这里</router-link>进入首页
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.notfound {
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url("../assets/not.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.notfound .wrapper {
  position: absolute;
  top: 14%;
  right: 32%;
  // width: 635px;
  font-size: 19px;
  line-height: 29px;
  -webkit-font-smoothing: antialiased; //用来控制字体渲染时的平滑效果，使字体看起来更加清晰和舒服，在 Mac OS 和 ios 中表现比较明显，在 windows 中表现不明显
  padding: 20px;
}

.notfound .wrapper .big {
  font-size: 74px;
  font-weight: 700;
  line-height: 68px;
  margin-bottom: 48px;
}

.notfound .wrapper .small {
  position: absolute;
  left: 70px;
}

.notfound .wrapper a {
  color: #ffcc00;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
}

@media only screen and (max-width: 666px) {
  .notfound .wrapper {
    left: auto;
    right: 0;
    width: 100%;
    max-width: 450px;
    top: 35%;
  }
  .notfound .wrapper .big {
    font-size: 42px;
    line-height: 50px;
    margin-bottom: 15px;
  }
}
</style>
