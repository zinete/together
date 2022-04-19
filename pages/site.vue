<template>
  <div class="home_bg_color">
    <div class="home_bg">
      <div class="mian" v-for="(items, index) in $t('city')" :key="items.id">
        <div class="header">
          <img
            :src="items.title"
            alt=""
            style="width: 80%; margin: 60px auto 30px"
          />
          <div class="bg_lu">
            <img
              src="../assets/images/location/3_lu.png"
              style="width: 90%"
              alt=""
            />
            <img
              :style="`left: ${items.progress}`"
              src="../assets/images/location/3_car.png"
              class="bg_lu_car"
              alt=""
            />
          </div>

          <div
            @click="onChecked(index)"
            style="
              font-size: 0px;
              margin-right: 32px;
              cursor: pointer;
              user-select: none;
            "
            class="flex jend"
          >
            <img
              src="../assets/images/location/btn.png"
              alt=""
              style="width: 100px; padding: 20px 0px 0px; display: block"
            />
          </div>
        </div>
        <el-collapse-transition>
          <div class="mid" v-show="items.checked">
            <div class="video_box">
              <video-player
                @play="onPlayerPlay($event, index)"
                class="video-player vjs-custom-skin vjs-big-play-centered"
                ref="videoPlayer"
                :options="playerOptions[index]"
              ></video-player>
            </div>
            <div class="text_main">
              <p
                style="width: 80%; margin: 0 auto"
                v-for="des in items.des"
                :key="des.id"
              >
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
          </div>
        </el-collapse-transition>
        <div class="footer"></div>
      </div>
      <div class="flex row jcenter" style="margin-top: 30px">
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
      text: false,
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

<style lang="scss" scoped>
.home_bg {
  width: 100%;
  height: 100% !important;
  background: url("../assets/images/location/3_bg1.png");
  background-size: contain;
  position: relative;
  background-attachment: fixed;
}
.home_bg_color {
  width: 100%;
  height: 100%;
  background: #0e2613c2;
  padding-bottom: 100px;
}

.jend {
  justify-content: flex-end;
}

.mian {
  font-size: 0px;
  padding-top: 80px;
  width: 100%;
}

.bg_lu {
  position: relative;
  display: flex;
  align-items: center;

  justify-content: center;
}

.cover_box {
  gap: 30px;
  width: 100%;

  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  margin: 40px auto 0px;
}
.cover_box_bg {
  width: 38%;
  height: 184px;
  /* margin-top: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/location/3_img_bg.png") no-repeat;
  background-size: 100% 100%;
}
.cover_box_bg img {
  width: 75%;
  /* margin-right: 6%; */
}

.video_box {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0px;
}
.bg_lu_car {
  position: absolute;
  width: 120px;
}
.header {
  background: url("../assets/images/location/top.png") no-repeat;
  vertical-align: baseline;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.mid {
  background: url("../assets/images/location/mid.png") no-repeat;

  flex-direction: column;
  background-size: 100% 100%;
  /* background-attachment: fixed; */
  /* width: 100%; */
}
.text_main {
  /* height: 1000px; */
  font-size: 32px;
  text-indent: 2em;
  letter-spacing: 0.2em;
  text-align: justify;
  margin-top: 28px;
  color: #5e7153;
  line-height: 42px;
}
.footer {
  vertical-align: baseline;
  background: url("../assets/images/location/bottom.png") no-repeat;
  background-size: cover;
  background-size: 100% 100%;
  height: 60px;
}
</style>