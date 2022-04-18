<template>
  <div class="home_bg">
    <div class="home_bg_color">
      <div style="padding: 40px 0px 0px">
        <div
          v-for="(items, index) in city"
          :key="items.id"
          class="relative"
          style="margin-bottom: 40px"
        >
          <!--  -->
          <div class="flex col icenter zindex10 home_bg_xiangyue">
            <img
              src="../assets/images/start/2_ooo.png"
              alt=""
              class="top_icon"
            />
            <div class="start_info">
              <img :src="items.title" alt="" />
              <div class="car_bg">
                <img
                  src="../assets/images/location/3_car.png"
                  alt=""
                  :style="`left: ${items.progress}`"
                />
              </div>
              <div class="car_bg_btn_view">
                <div class="car_bg_btn" @click="changeLocation(index)">
                  <span>下车游览</span>
                </div>
              </div>

              <div
                class="text_box"
                :style="index !== location ? 'display: none' : 'display: block'"
              >
                <!-- <img src="../assets/images/start/2_img1.png" alt="" /> -->
                <div class="video_box">
                  <video-player
                    @play="onPlayerPlay($event, index)"
                    class="video-player vjs-custom-skin vjs-big-play-centered"
                    ref="videoPlayer"
                    :options="playerOptions[index]"
                  ></video-player>
                </div>
                <p>
                  有一座城，既有千年文化的沉淀，又有灵秀深邃的美景，她是著名的中国青瓷之都、中国宝剑之邦。这座城就是地处浙江省西南部的龙泉市。
                </p>
                <p>
                  浮翠的山峦，环抱着温柔的瓯江源头之水，千年的窑火见证着中国造物之美，千锤百炼的锻打记录着了这座城市的历史跫音，在这里所有的相遇都是久别重逢，一起走进龙泉，去遇见刻在骨子里的诗情画意。
                </p>
                <!--   v-for="url in items.shangxi"
                  :key="url.key" -->
                <div class="cover_box">
                  <div
                    class="cover_box_bg"
                    v-for="url in items.shangxi"
                    :key="url.id"
                  >
                    <img :src="url" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  -->
        </div>
      </div>

      <div class="flex row jcenter">
        <buttom text="分享本次行程" />
      </div>
    </div>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
import "video.js/dist/video-js.min.css";

import { videoPlayer } from "vue-video-player";
import title1 from "../assets/images/location/3_title1.png";
import title2 from "../assets/images/location/3_title2.png";
import title3 from "../assets/images/location/3_title3.png";
import title4 from "../assets/images/location/3_title4.png";
import title5 from "../assets/images/location/3_title5.png";
import title6 from "../assets/images/location/3_title6.png";

export default {
  components: { Buttom, videoPlayer },
  data() {
    return {
      playerOptions: [],
      location: 0,
      city: [
        {
          title: title1,
          progress: "5%",
          cover: "../video/cover2.jpg",
          video: "../video/video2.mp4",
          shangxi: [
            "../video/01/1.jpg",
            "../video/01/2.jpg",
            "../video/01/3.jpg",
            "../video/01/4.jpg",
          ],
        },
        {
          title: title2,
          progress: "20%",
          cover: "../video/cover3.jpg",
          video: "../video/video3.mp4",
          shangxi: [
            "../video/02/1.jpg",
            "../video/02/2.jpg",
            "../video/02/3.jpg",
            "../video/02/4.jpg",
          ],
        },
        {
          title: title3,
          progress: "30%",
          cover: "../video/cover4.jpg",
          video: "../video/video4.mp4",
          shangxi: [
            "../video/03/1.jpg",
            "../video/03/2.jpg",
            "../video/03/3.jpg",
            "../video/03/4.jpg",
          ],
        },
        {
          title: title4,
          progress: "40%",
          cover: "../video/cover5.jpg",
          video: "../video/video5.mp4",
          shangxi: [
            "../video/04/1.jpg",
            "../video/04/2.jpg",
            "../video/04/3.jpg",
            "../video/04/4.jpg",
          ],
        },
        {
          title: title5,
          progress: "60%",
          cover: "../video/cover6.jpg",
          video: "../video/video6.mp4",
          shangxi: [
            "../video/05/1.jpg",
            "../video/05/2.jpg",
            "../video/05/3.jpg",
            "../video/05/4.jpg",
          ],
        },
        {
          title: title6,
          progress: "80%",
          cover: "../video/cover7.jpg",
          video: "../video/video7.mp4",
          shangxi: [
            "../video/06/1.jpg",
            "../video/06/2.jpg",
            "../video/06/3.jpg",
            "../video/06/4.jpg",
          ],
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
    changeLocation(index) {
      this.location = index;
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
  height: 100% !important;
  background: url("../assets/images/home/1_bg1.png");
  background-size: contain;
  position: relative;
}
.home_bg_color {
  width: 100%;
  height: 100%;
  background: #0e2613c2;
  padding-bottom: 100px;
}

.home_bg_title {
  width: 100%;
}

.home_bg_xiangyue {
  top: 100px;
  left: 0px;
  right: 0px;
  width: 100%;

  padding-bottom: 80px;
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
  margin-top: 30px;
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
.car_bg {
  background: url("../assets/images/location/3_lu.png");
  position: relative;
  background-size: contain;
  height: 44px;
  margin: 30px 0px;
}
.car_bg img {
  position: absolute;

  top: -22px;
  width: 120px;
}

.car_bg_btn_view {
  display: flex;
  justify-content: flex-end;
}
.car_bg_btn {
  cursor: pointer;
  width: 212px;
  height: 72px;
  background: #6c8c5d;
  border: 3px solid #3f4a38;
  border-radius: 28px;
  color: #f8e3a7;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.2em;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}

.cover_box {
  width: 100%;
  flex-wrap: wrap;
  display: flex;

  justify-content: space-between;
}
.cover_box_bg {
  width: 48%;
  height: 184px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/location/3_img_bg.png") no-repeat;
  background-size: contain;
}
.cover_box_bg img {
  width: 70%;
  margin-right: 8%;
}

.cover_box_bg img:hover {
  cursor: pointer;
  transition: all 0.6s ease-out;
  transform: scale(1.5);
}
</style>