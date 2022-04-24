<template>
  <div class="home_bg">
    <div class="home_bg_color">
      <div class="relative">
        <img :src="$t('startimg')" class="home_bg_title" alt="一剑钟情" />
        <div class="flex col icenter absolute zindex10 home_bg_xiangyue">
          <img src="../assets/images/start/2_ooo.png" alt="" class="top_icon" />
          <div class="start_info">
            <div class="video_box">
              <video-player
                @play="onPlayerPlay($event, 0)"
                class="video-player vjs-custom-skin vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptions[0]"
              ></video-player>
            </div>
            <div class="text_box">
              <p v-for="text in $t('startVideo')[0].des" :key="text.id">
                {{ text }}
              </p>
            </div>
          </div>
          <buttom @func="start" :text="$t('starttitle')" class="btn_view" />
        </div>
      </div>

      <img src="../assets/images/home/1_yun1.png" alt="" class="yun1" />
      <img src="../assets/images/home/1_yun2.png" alt="" class="yun2" />
    </div>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
import "video.js/dist/video-js.min.css";

import { videoPlayer } from "vue-video-player";
export default {
  components: { Buttom, videoPlayer },
  data() {
    return {
      playerOptions: [],
    };
  },
  created() {
    this.initVideo();
  },
  mounted() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // We listen to the resize event
    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      console.log(vh);
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },

  methods: {
    start() {
      //  跳转 site 页面

      this.$router.push(
        this.localeLocation({
          name: "site",
        })
      );
    },
    onPlayerPlay(player, index) {
      let that = this.$refs.videoPlayer;
      for (let i = 0; i < that.length; i++) {
        if (i != index) that[i].player.pause();
      }
    },
    initVideo() {
      for (let i of this.$t("startVideo")) {
        let config = {
          playbackRates: [1.0, 2.0, 3.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          language: "zh-CN",
          aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [
            {
              type: "video/mp4",
              src: i.cdn_video, //url地址
            },
          ],
          poster: i.cdn_cover, //封面地址
          notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true, //全屏按钮
          },
        };
        this.playerOptions.push(config);
      }
    },
  },
};
</script>

<style lang="css" scoped>
.home_bg {
  width: 100%;
  height: 200vh;
  /* height: calc(var(--vh, 1vh) * 100); */
  background: url("../assets/images/home/1_bg1.png") no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

@media only screen and (min-width: 1200px) {
  .home_bg {
    width: 100%;
    height: 1400px;
    background: url("../assets/images/home/1_bg1.png");
    background-size: contain;
    position: relative;
  }
}
.home_bg_color {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.home_bg_title {
  width: 100%;
}

.yun1 {
  position: absolute;
  top: 36px;
  width: 225px;
  left: 0;
}

.yun2 {
  position: absolute;
  top: 140px;
  width: 160px;
  right: 0;
}

.yun3 {
  width: 188px;
  position: absolute;
  z-index: 999;
}

.home_bg_xiangyue {
  top: 250px;
  left: 30px;
  right: 0px;
  /* width: 100%; */
  padding-bottom: 100px;
  background-size: 100% 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  background: url("../assets/images/start/2_bg.png");
}
.home_bg_xiangyue_box {
  height: 48px;
  background: #5e7153;
  margin-top: 120px;
  color: #f8e3a7;
  padding: 0px 42px;
  font-size: 28px;
}
.btn_view {
  position: absolute;
  bottom: -120px;
}

.top_icon {
  position: absolute;
  width: 80%;
  margin-right: 20px;
  top: -40px;
}
.start_info {
  width: 86%;
  margin-top: 80px;
  margin-right: 28px;
}
.start_info img {
  width: 100%;
}
.text_box {
  margin-top: 50px;
}

.text_box p {
  font-weight: 400;
  text-indent: 2em;
  letter-spacing: 0.2em;
  margin-top: 10px;
  color: #5e7153;
  text-align: justify;
  line-height: 42px;
  font-size: 28px;
  word-break: break-all;
}
</style>