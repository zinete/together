<template>
  <div class="home_bg">
    <div class="home_bg_color">
      <div class="relative">
        <img
          src="../assets/images/home/1_title.png"
          class="home_bg_title"
          alt="一剑钟情"
        />
        <div class="flex col icenter absolute zindex10 home_bg_xiangyue">
          <div class="home_bg_xiangyue_box flex row icenter">
            <span>相约一场“奇遇”之旅</span>
          </div>
          <img src="../assets/images/home/1_piao.png" alt="票" class="piao" />

          <div class="btn_view absolute">
            <buttom @func="start" text="即刻出发" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
export default {
  components: { Buttom },
  methods: {
    start() {
      // 跳转到 start 页面
      this.$router.push("/start");
    },
  },
};
</script>

<style lang="css" scoped>
.home_bg {
  width: 100%;
  height: 1400px;

  background: url("../assets/images/home/1_bg1.png");
  background-size: contain;
  position: relative;
}

.home_bg_color {
  width: 100%;
  height: 100%;
  background: #0e2613c2;
}

.home_bg_title {
  width: 100%;
}

.home_bg_xiangyue {
  top: 480px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-size: 92% 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background: url("../assets/images/home/1_bg2.png");
}
.home_bg_xiangyue_box {
  height: 48px;
  background: #5e7153;
  margin-top: 120px;
  color: #f8e3a7;
  padding: 0px 42px;
  font-size: 28px;
}
.piao {
  margin-top: 40px;
  width: 100%;
}
.btn_view {
  bottom: 80px;
}
</style>