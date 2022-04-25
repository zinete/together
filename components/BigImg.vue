<template>
  <div v-show="visible" @click="closeClick" class="showPhoto">
    <div>
      <img class="img" :src="url" alt="图片加载失败" />
      <p
        style="
          font-size: 14px;
          color: #fff;
          text-align: center;
          margin-top: 20px;
        "
      >
        {{ des }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    des: {
      type: String,
      default: "",
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      //子组件可以使用 $emit 触发父组件的自定义事件
      this.$emit("closeClick");
    },
  },
};
</script>
<style lang="css" scoped>
.showPhoto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.showPhoto .img {
  display: block;
  margin: auto 0;
  max-width: 100%;
  text-align: center;
  cursor: pointer;
}
</style>