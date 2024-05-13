<template>
  <div class="parts" v-intersection-observer="onIntersectionObserver">
    <div class="title">云极小超MIX店</div>
    <div class="container">
      <div class="wrap">
        <div
          class="content"
          :class="{ 'animate__animated animate__delay-1s animate__slideInLeft': targetIsVisible }"
        >
          <div class="label"><img src="../assets//index-img6.png" alt="" /></div>
          <div class="text">
            基于用户在商业及办公场景下的每日综合消费
            需求，MIX3.0店提供鲜热餐食、零售便利、咖啡烘焙等综合业态的新型复合式门店形式，通过
            品牌塑造、产品研发、体验升级、消费便利等诸多方式,为青年用户打造家庭、公司之外一个真
            正的第三空间。
          </div>
        </div>
        <div
          class="view-img"
          :class="{ 'animate__animated animate__delay-1s animate__slideInRight': targetIsVisible }"
        >
          <img src="../assets/index-img7.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { vIntersectionObserver } from '@vueuse/components'
const { targetIsVisible, onIntersectionObserver } = useElementAnimationOnce()
</script>
<style lang="scss" scoped>
.parts {
  --animate-delay: 0.3s;
  background-color: #f7f7f7;
  overflow: hidden;
  .title {
    font-size: map-get($map: $fontMap, $key: huge);
    font-weight: bold;
    color: #333333;
    text-align: center;
    padding: 40px 0;
  }
  .container {
    display: flex;
    align-items: center;
    height: 580px;
    background-image: url(../assets/index-img5.png);
    background-repeat: no-repeat;
    background-position: left;

    .content {
      .text {
        width: 420px;
        color: #ffffff;
        font-size: map-get($map: $fontMap, $key: big);
        margin-top: 40px;
      }
    }

    .view-img {
      position: absolute;
      left: 450px;
      top: 50%;
      width: 1020px;
      margin-top: -120px;
      border: 10px solid #ffffff;
      border-radius: 12px;
    }
  }
}
</style>
