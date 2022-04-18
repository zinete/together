<template>
  <div class="btn" @click="onPress">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String | Number,
      default: "开启本次行程",
    },
  },
  methods: {
    onPress() {
      this.$emit("func");
    },
  },
};
</script>

<style lang="css" scoped>
.btn {
  width: 412px;
  height: 90px;
  display: flex;
  color: #b92d1f;
  font-size: 40px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 45px;
  background: url("../assets/images/home/1_btn_bg.png");
  background-size: 100% 100%;
  cursor: pointer;
  animation: fadebtn 1s linear alternate infinite;
}

@keyframes fadebtn {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
</style>