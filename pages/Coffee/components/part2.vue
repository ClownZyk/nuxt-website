<template>
  <div class="part" v-intersection-observer="onIntersectionObserver">
    <div class="title">TOP1</div>
    <div class="desc wrap">
      南京最美咖啡店之一<br />
      大众点评咖啡厅区域排名好评榜/服务榜/环境榜
    </div>
    <div class="main wrap">
      <!-- <img src="../assets/img1.png" alt=""> -->
      <div class="img-item" style="--animate-delay: 0.5s;">
        <img src="../assets/img2.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img3.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img4.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
      </div>
      <div class="img-item" style="--animate-delay: 1s;">
        <img src="../assets/img5.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img6.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img7.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img8.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
        <img src="../assets/img9.png" :class="{'animate__animated animate__delay-1s animate__zoomIn': targetIsVisible}" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { vIntersectionObserver } from '@vueuse/components'
const { targetIsVisible, onIntersectionObserver } = useElementAnimationOnce()
</script>
<style lang="scss" scoped>
.part {
  background-color: #f7f7f7;
  padding-bottom: 80px;
  .title {
    font-size: map-get($map: $fontMap, $key: huge);
    font-weight: bold;
    color: #333333;
    text-align: center;
    padding: 40px 0;
  }
  .desc {
    text-align: center;
    font-size: map-get($map: $fontMap, $key: big);
  }

  .main {
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    overflow: hidden;
    .img-item {
      display: flex;
      margin: 4px 0;
      img {
        margin: 0 4px;
      }
    }
  }
}
</style>
