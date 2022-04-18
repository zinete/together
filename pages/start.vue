<template>
  <div class="home_bg">
    <div class="home_bg_color">
      <div class="relative">
        <img
          src="../assets/images/start/2_title.png"
          class="home_bg_title"
          alt="一剑钟情"
        />
        <div class="flex col icenter absolute zindex10 home_bg_xiangyue">
          <img src="../assets/images/start/2_ooo.png" alt="" class="top_icon" />
          <div class="start_info">
            <!-- <img src="../assets/images/start/2_img1.png" alt="" /> -->
            <div class="video_box">
              <video-player
                @play="onPlayerPlay($event, 0)"
                class="video-player vjs-custom-skin vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptions[0]"
              ></video-player>
            </div>
            <div class="text_box">
              <p>
                有一座城，既有千年文化的沉淀，又有灵秀深邃的美景，她是著名的中国青瓷之都、中国宝剑之邦。这座城就是地处浙江省西南部的龙泉市。
              </p>
              <p>
                浮翠的山峦，环抱着温柔的瓯江源头之水，千年的窑火见证着中国造物之美，千锤百炼的锻打记录着了这座城市的历史跫音，在这里所有的相遇都是久别重逢，一起走进龙泉，去遇见刻在骨子里的诗情画意。
              </p>
            </div>
          </div>
          <buttom @func="start" text="开启本次行程" class="btn_view" />
        </div>
      </div>
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
      city: [
        {
          progress: "0%",
          cover: "../video/cover1.jpg",
          video: "../video/video1.mp4",
        },
      ],
    };
  },
  created() {
    this.initVideo();
  },
  methods: {
    start() {
      //  跳转 location 页面
      this.$router.push("/location");
    },
    onPlayerPlay(player, index) {
      let that = this.$refs.videoPlayer;
      for (let i = 0; i < that.length; i++) {
        if (i != index) that[i].player.pause();
      }
    },
    initVideo() {
      for (let i of this.city) {
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
              src: i.video, //url地址
            },
          ],
          poster: i.cover, //封面地址
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
  top: 240px;
  left: 0px;
  right: 0px;
  width: 100%;
  padding-bottom: 40px;
  background-size: 92% 100% !important;
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
  width: 80%;
  margin-top: 80px;
  margin-right: 20px;
}
.start_info img {
  width: 100%;
}
.text_box {
  margin-top: 20px;
  font-size: 28px;
  font-weight: 400;
}

.text_box p {
  text-indent: 1em;
  letter-spacing: 0.2em;
  margin-top: 10px;
  color: #5e7153;
  line-height: 34px;
}
</style>