<template>
  <div class="home_bg">
    <div class="home_bg_color">
      <div class="relative">
        <img :src="$t('indeximg')" class="home_bg_title" alt="一剑钟情" />
        <div class="flex col icenter absolute zindex10 home_bg_xiangyue">
          <div class="home_bg_xiangyue_box flex row icenter">
            <span style="padding: 2px 0px; display: block">{{
              $t("power")
            }}</span>
          </div>
          <img
            src="https://static.zinete.com/jipiao.png"
            alt="票"
            class="piao"
          />

          <div class="btn_view absolute">
            <buttom @func="start" :text="$t('indextitle')" />
          </div>
        </div>
      </div>
      <!-- <img src="../assets/images/home/1_yun1.png" alt="" class="yun1" />
      <img src="../assets/images/home/1_yun2.png" alt="" class="yun2" /> -->
      <img src="../assets/images/home/1_yun3.png" alt="" class="yun3" />
    </div>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
export default {
  components: { Buttom },
  head(app) {
    return {
      title: app.$t("des"),
    };
  },
  methods: {
    start() {
      // 跳转到 start 页面
      this.$router.push(
        this.localeLocation({
          name: "start",
        })
      );
    },
  },
};
</script>

<style lang="css" scoped>
.home_bg {
  width: 100%;
  height: 100vh;
  background: url("../assets/images/home/1_bg1.png");
  background-size: contain;
}

@media only screen and (min-width: 1200px) {
  .home_bg {
    width: 100%;
    height: 1600px;
    background: url("../assets/images/home/1_bg1.png");
    background-size: contain;
    position: relative;
  }
}

/* .home_bg_color {
  width: 100%;
  height: 100%;
  background: #0e2613c2;
  position: relative;
} */

/* .home_mt {
  top: 20px;
} */

.yun1 {
  position: absolute;
  top: 36px;
  width: 225px;
  left: 0;
}

.yun2 {
  position: absolute;
  top: 212px;
  width: 160px;
  right: 0;
}

.yun3 {
  bottom: 40%;
  width: 188px;
  position: absolute;
  z-index: 999;
}

.home_bg_title {
  width: 100%;
}

.home_bg_xiangyue {
  top: 480px;
  left: 0px;
  right: 0px;
  width: 100%;
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