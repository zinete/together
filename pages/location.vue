<template>
  <div class="home_bg_color">
    <div class="home_bg">
      <div style="padding: 40px 0px 0px">
        <div
          v-for="(items, index) in $t('city')"
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
                <div class="car_bg_btn" @click="onChecked(index)">
                  <span>下车游览</span>
                </div>
              </div>
              <el-collapse-transition>
                <div class="text_box" v-show="items.checked">
                  <div class="video_box">
                    <video-player
                      @play="onPlayerPlay($event, index)"
                      class="video-player vjs-custom-skin vjs-big-play-centered"
                      ref="videoPlayer"
                      :options="playerOptions[index]"
                    ></video-player>
                  </div>
                  <p v-for="des in items.des" :key="des.id">
                    {{ des }}
                  </p>
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
              </el-collapse-transition>
            </div>
          </div>
          <!--  -->
        </div>
      </div>

      <div class="flex row jcenter">
        <buttom text="分享本次行程" @func="showShare" />
      </div>
    </div>

    <share-pop
      @confirm="showShare"
      title=""
      :mtTop="'-300px'"
      :dialogHeight="'600px'"
      :show="share"
    >
      <img
        src="../assets/images/start/share.png"
        style="width: 100%; font-size: 0"
      />
    </share-pop>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
import "video.js/dist/video-js.min.css";

import { videoPlayer } from "vue-video-player";

import SharePop from "../components/SharePop.vue";

export default {
  components: { Buttom, videoPlayer, SharePop },
  data() {
    return {
      playerOptions: [],
      share: false,
      location: 0,
    };
  },
  created() {
    this.initVideo();
  },
  methods: {
    onChecked(key) {
      this.$t("city").forEach((item) => {
        if (item.key === key) {
          item.checked ? (this.checkedAll = false) : null;
          item.checked = !item.checked;
        }
      });
      !this.$t("city").some((item) => item.checked === false)
        ? (this.checkedAll = true)
        : null;
    },
    showShare() {
      this.share = !this.share;
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
      for (let i of this.$t("city")) {
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
  background: url("../assets/images/location/3_bg1.png");
  background-size: contain;
  position: relative;
}
.home_bg_color {
  width: 100%;
  height: 100%;
  background: #3a4934;
  padding-bottom: 100px;
}

.home_bg_title {
  width: 100%;
}

.home_bg_xiangyue {
  padding-bottom: 80px;
  background-size: 92% 100% !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  /* background-attachment: fixed !important; */
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
  margin-top: 30px;
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

/* .cover_box_bg img:hover {
  cursor: pointer;
  transition: all 0.6s ease-out;
  transform: scale(1.5);
} */
</style>