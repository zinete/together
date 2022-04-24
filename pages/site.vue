<template>
  <div class="home_bg_color">
    <div class="home_bg">
      <div class="mian" v-for="(items, index) in $t('city')" :key="items.id">
        <div class="header">
          <el-image
            :src="items.title"
            lazy
            style="width: 80%; margin: 60px auto 5px"
            fits="cover"
          ></el-image>
          <div class="bg_lu">
            <img
              src="../assets/images/location/3_lu.png"
              style="width: 90%"
              alt=""
            />
            <el-image
              lazy
              :style="`left: ${items.progress}`"
              :src="items.tips"
              class="bg_lu_car"
              alt=""
              fits="cover"
            />
          </div>

          <div
            @click="onChecked(index)"
            style="
              font-size: 0px;

              cursor: pointer;
              user-select: none;
              width: 80%;
              margin: 0 auto;
            "
            class="flex jend"
          >
            <div class="btn_go">
              <span>{{ $t("sitetitle") }}</span>
            </div>
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

              <div
                style="
                  width: 80%;
                  padding: 20px 0px;
                  margin: 0px auto;
                  gap: 12px;
                  display: grid;
                  grid-template-columns: 2fr 50%;
                "
              >
                <div v-for="url in items.shangxi" :key="url.id">
                  <div class="cover_box_bg">
                    <el-image
                      class="elimg"
                      :src="url.img"
                      lazy
                      @click.self="showBigImage($event)"
                      fits="cover"
                    ></el-image>

                    <big-img
                      :visible="photoVisible"
                      :url="bigImgUrl"
                      @closeClick="
                        () => {
                          photoVisible = false;
                        }
                      "
                    ></big-img>
                  </div>
                  <span
                    style="
                      font-size: 12px;
                      color: #5e7153;
                      margin-top: 4px;
                      display: block;
                      text-align: center;
                    "
                    >{{ url.des }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </el-collapse-transition>
        <div class="footer"></div>
      </div>
      <div class="flex row jcenter">
        <buttom :text="$t('sitego')" @func="showShare" />
      </div>
    </div>
    <share-pop @confirm="showShare" title="" :mtTop="'-300px'" :show="share">
      <img :src="$t('share')" style="width: 100%; font-size: 0" />
    </share-pop>
  </div>
</template>

<script>
import Buttom from "../components/Buttom.vue";
import "video.js/dist/video-js.min.css";

import { videoPlayer } from "vue-video-player";

import SharePop from "../components/SharePop.vue";
import BigImg from "../components/BigImg.vue";
export default {
  components: { Buttom, videoPlayer, SharePop, BigImg },
  data() {
    return {
      text: false,
      playerOptions: [],
      share: false,
      location: 0,
      photoVisible: false,
      bigImgUrl: "",
    };
  },

  created() {
    this.initVideo();
  },
  methods: {
    showBigImage(e) {
      console.log(e.currentTarget.src);
      //点击图片函数，点击后，把photoVisible设置成true
      if (e != "") {
        this.photoVisible = true;
        this.bigImgUrl = e.currentTarget.src;
      }
    },
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

<style lang="scss" scoped>
.home_bg::before {
  content: "";

  position: fixed;
  z-index: -1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: url("https://static.zinete.com/3_bg.png") no-repeat;
  background-size: cover;
}

.home_bg {
  display: block;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
}
.home_bg_color {
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
}
.btn_go {
  background: #6c8c5d;
  border: 3px solid #3f4a38;
  box-sizing: border-box;
  border-radius: 24px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  padding: 8px 22px;
  margin: 20px 0px 8px 0px;
  display: block;
}

@media only screen and (min-width: 1200px) {
  .home_bg::before {
    width: 750px;
    margin: 0 auto;
  }
  .mid {
    background-attachment: scroll !important;
  }
}

.jend {
  justify-content: flex-end;
}

.mian:first-child {
  padding-top: 40px;
}
.mian {
  font-size: 0px;

  width: 100%;
}

.bg_lu {
  position: relative;
  display: flex;
  align-items: center;

  justify-content: center;
}

.cover_box {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  /* margin: 80px auto 0px; */
  padding-bottom: 40px;
}

.cover_box_bg {
  position: relative;
  width: 100%;
  height: 184px;

  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/location/3_img_bg.png") no-repeat;
  background-size: 100% 100%;
}
.cover_box_bg .elimg {
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
  width: 240px;
  top: -40px;
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
  background-attachment: fixed;
  /* width: 100%; */
}
.text_main p {
  /* height: 1000px; */
  font-size: 28px;
  text-indent: 2em;
  letter-spacing: 0.2em;
  text-align: justify;
  word-break: break-all;
  margin-top: 28px;
  color: #5e7153;
  line-height: 42px;
}
.footer {
  vertical-align: baseline;
  background: url("../assets/images/location/bottom.png") no-repeat 0px -54px;
  background-size: cover;
  background-size: 100% 100%;
  height: 100px;
  margin-top: -10px;
}
</style>