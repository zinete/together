<template>
  <div class="home_bg_color">
    <div class="home_bg">
      <div class="flex jcenter px col">
        <div style="width: 100%; font-size: 0px; display: block">
          <div class="header_bg_box">
            <img src="../assets/images/location/header.png" class="header_bg" />
            <div class="header_bg_text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
              temporibus id alias. Magnam fugit quidem ullam ad corporis
              consequatur aut architecto totam voluptatum voluptates, incidunt,
              quo quia dolorem consectetur reprehenderit.
            </div>
          </div>
          <div class="mid_bg">
            <div style="margin-top: 200px">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate quod unde ullam, quisquam neque labore, eligendi
              ratione nam alias impedit culpa doloremque corrupti, quos sequi
              accusantium rem non. Sed, accusamus.
            </div>
          </div>
          <img src="../assets/images/location/footer.png" class="footer_bg" />
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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

.px {
  padding: 0px 32px;
}

.mid_bg {
  width: 100%;
}
.footer_bg {
  width: 100%;
}
.header_bg_box {
  position: relative;
}
.header_bg {
  width: 100%;

  left: 0;
  right: 0;
}

.header_bg_text {
  position: absolute;
  top: 120px;
  font-size: 28px;
}

.mid_bg {
  background-size: contain !important;
  background: url("../assets/images/location/mid.png") no-repeat;
}
</style>