<template>
  <div class="banner" :style="{'background-image': `url(${bgImg})`, 'background-position-x': `${bannerIndex * 50}%`}">
  <!-- <div class="banner" :style="{'background-image': `url(${bgImg})`}"> -->
    <el-carousel style="height: 41vw" height="100%" @change="onBannerSwitch" :pause-on-hover="false" indicator-position="none" :interval="5000">
      <el-carousel-item v-for="(item, index) in data" :key="index">
        <div class="banner-content">
          <div class="content-title animate__animated" :class="bannerIndex === index ? 'animate__backInLeft' : 'animate__backOutLeft'">{{ item.title }}</div>
          <div class="content-desc animate__animated" :class="bannerIndex === index ? 'animate__backInRight' : 'animate__backOutRight'" v-html="item.desc"></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup>
import { ref } from 'vue'
defineProps({
  data: {
    type: Array,
    default() {
      return []
    }
  },
  bgImg: {
    type: String,
    default: ''
  }
})
const bannerIndex = ref(0)
const onBannerSwitch = e => {
  bannerIndex.value = e
}
</script>
<style lang="scss" scoped>
.banner {
  --animate-duration: 1.6s;
  position: relative;
  background-size: 120%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  transition: 2s;
  .banner-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .content-title {
      color: #ffffff;
      font-size: 64px;
      font-weight: bold;
    }

    .content-desc {
      width: 1200px;
      text-align: center;
      font-size: map-get($map: $fontMap, $key: big);
      color: #ffffff;
    }
  }
}
</style>
