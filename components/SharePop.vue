<template>
  <transition name="dialog">
    <div v-if="showSelf" class="dialog" :style="{ 'z-index': zIndex }">
      <div
        class="dialog-mark"
        @click.self="closeMyself"
        :style="{ 'z-index': zIndex + 1 }"
      ></div>

      <div
        class="dialog-sprite"
        :style="{
          'z-index': zIndex + 2,
          height: dialogHeight,
          transform: transform,
          'margin-top': mtTop,
        }"
      >
        <!-- 弹窗的主题内容 -->
        <section class="dialog-body">
          <slot></slot>
        </section>

        <!-- 按钮 -->
        <section class="dialog-footer">
          <img
            @click="confirm"
            src="../assets/images/start/close.jpg"
            style="width: 40px; height: 40px"
          />
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    //弹窗组件是否显示 默认不显示 必传属性
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    dialogHeight: {
      type: String,
      default: "420px",
      required: false,
    },
    transform: {
      type: String,
      default: "-",
      required: false,
    },
    mtTop: {
      type: String,
      default: "-210px",
      required: false,
    },
    icon: {
      type: Boolean,
      default: false,
      required: false,
    },

    showCancel: {
      typs: Boolean,
      default: true,
      required: false,
    },
    cancelText: {
      type: String,
      default: "取消",
      required: false,
    },
    confirmText: {
      type: String,
      default: "确定",
      required: false,
    },
    pySize: {
      type: String,
      default: "20%",
      required: false,
    },
  },
  data() {
    return {
      name: "dialog",
      showSelf: false,
      zIndex: this.getZIndex(),
      bodyOverflow: "",
    };
  },
  watch: {
    show(val) {
      if (!val) {
        this.closeMyself();
      } else {
        this.forbidScroll();
        this.showSelf = val;
      }
    },
  },
  created() {
    this.showSelf = this.show;
  },

  methods: {
    /** 禁止页面滚动 */
    forbidScroll() {
      this.bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    },

    /**  每次获取之后 zindex 自动增加 */
    getZIndex() {
      let zIndexInit = 20211129;
      return zIndexInit++;
    },

    /** 取消按钮操作 */
    cancel() {
      this.$emit("cancel", false);
    },

    /** 确认按钮操作 */
    confirm() {
      this.$emit("confirm", false);
    },

    /** 点击遮罩关闭弹窗 */
    closeMyself(event) {
      this.showSelf = false;
      this.sloveBodyOverflow();
    },

    /** 恢复页面的滚动 */
    sloveBodyOverflow() {
      document.body.style.overflow = this.bodyOverflow;
    },
  },
};
</script>

<style lang="scss" scoped>
// 弹窗动画
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.15s;
}

.dialog-enter,
.dialog-leave-active {
  opacity: 0;
}
// 最外层 设置position定位
// 遮罩 设置背景层，z-index值要足够大确保能覆盖，高度 宽度设置满 做到全屏遮罩
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  // 内容层 z-index要比遮罩大，否则会被遮盖
  .dialog-mark {
    position: absolute;
    top: 0;
    height: 0;
    width: 100%;
    height: 100%;
    background: #081c00;
    opacity: 0.85;
    /* backdrop-filter: blur(10px); */
  }
}

@media only screen and (min-width: 1200px) {
  .dialog-sprite {
    left: 40% !important;
    right: 40% !important;
  }
}
.dialog-sprite {
  // 移动端使用felx布局
  left: 10%;
  right: 10%;
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;

  overflow: hidden;
  z-index: 23456765435;
  /* background: #fff; */

  /* border-radius: 20px; */

  .section_bg {
    background: linear-gradient(
      107.25deg,
      #fff0e0 6.57%,
      #edf7e7 46.56%,
      #dbffef 86.54%
    );
  }
  .dialog-body {
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .dialog-footer {
    position: relative;
    display: flex;
    width: 100%;
    margin-top: 30px;
    cursor: pointer;
    justify-content: center;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      /* height: 1px; */
      /* background: #ddd; */
      /* transform: scaleY(0.5); */
    }
    .btn {
      flex: 1;
      text-align: center;
      padding: 15px;
      font-size: 17px;
      &:nth-child(2) {
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 1px;
          height: 100%;
          background: #ddd;
          transform: scaleX(0.5);
        }
      }
    }
    .btn-confirm {
      color: #43ac43;
    }
  }
}
</style>
