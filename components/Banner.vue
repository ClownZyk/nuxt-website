<template>
  <div class="banner">
    <el-carousel style="height: 31vw" height="100%" @change="onBannerSwitch" :pause-on-hover="false" indicator-position="none">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <div class="banner-item">
          <div class="banner-content">
            <div class="content-title animate__animated animate__backInLeft">{{ item.title }}</div>
            <div
              class="content-desc animate__animated animate__backInRight"
              v-html="item.desc"
            ></div>
          </div>
          <img class="banner-img" :src="item.img" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
defineProps({
  data: {
    type: Array,
    default() {
      return []
    }
  }
})
const onBannerSwitch = (e) => {}
</script>
<style lang="scss" scoped>
.banner-item {
  position: relative;
  .banner-content {
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-title {
      color: #ffffff;
      font-size: 64px;
      font-weight: bold;
      margin-bottom: 24px;
    }

    .content-desc {
      width: 1200px;
      text-align: center;
      font-size: map-get($map: $fontMap, $key: big);
      color: #ffffff;
    }
  }
  .banner-img {
    width: 100%;
  }
}
</style>
