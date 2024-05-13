<template>
  <div class="wrap shop" v-intersection-observer="onIntersectionObserver">
    <div class="shop-title animate__delay-1s" style="--animate-delay: 0.4s" :class="{'animate__animated animate__fadeInUp': targetIsVisible}">即时零售+私域电商</div>
    <div class="shop-label animate__delay-1s" style="--animate-delay: 0.6s" :class="{'animate__animated animate__fadeInUp': targetIsVisible}">专注于园区办公场景的即时零售创新渠道</div>
    <div class="shop-desc animate__delay-1s" style="--animate-delay: 0.8s" :class="{'animate__animated animate__fadeInUp': targetIsVisible}">
      云极小超创立于南京，专注于青年人群的数字化私域商业体系。通过构建新型私域零售渠道，驱动云极小超智慧门店、即时闪电云仓与云极数字化技术平台高效链接，深度挖掘办公场景下的消费需求，将云仓供应链、零售小超、新式餐饮、咖啡饮品、企业服务、团购集采、智能售卖设备等核心服务形成生态体系，以数字科技驱动园区及商业办公楼宇的即时零售渠道创新，为青年用户场景化需求提供更智慧更有温度的精准服务。+私域电商
    </div>
    <div class="shop-parts">
      <div class="shop-parts-item animate__delay-1s" :style="{'--animate-delay':  (index * 0.2) + 0.8 + 's'}" :class="{'animate__animated animate__fadeInUp': targetIsVisible}" v-for="(shop, index) in ShopParts" :key="index">
        <img :src="shop.img" alt="" />
        <p class="item-label">{{ shop.label }}</p>
        <p class="item-desc">{{ shop.desc }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
const { targetIsVisible, onIntersectionObserver } = useElementAnimationOnce()
onMounted(() => {
  getShopParts()
})
const ShopParts = ref([])
const getShopParts = async () => {
  ShopParts.value = [
    {
      label: '云极云仓',
      desc: '实体门店 刚需服务',
      img: (await import('../assets/index-img1.png')).default
    },
    {
      label: '云极闪电仓',
      desc: '毛细物流 小时速达',
      img: (await import('../assets/index-img2.png')).default
    },
    {
      label: '云极小超MIX店',
      desc: '实体门店 刚需服务',
      img: (await import('../assets/index-img3.png')).default
    },
    {
      label: '云极企业购',
      desc: '直通企业的S-B-C超级渠道',
      img: (await import('../assets/index-img4.png')).default
    }
  ]
}
</script>

<style lang="scss" scoped>
.shop {
  background-color: #ffffff;
  color: #333333;
  padding: 100px 0 68px;
  overflow: hidden;
  .shop-title {
    font-size: map-get($map: $fontMap, $key: huge);
    text-align: center;
    font-weight: bold;
  }
  .shop-label {
    font-size: map-get($map: $fontMap, $key: large);
    text-align: center;
    font-weight: bold;
    margin-top: 16px;
  }
  .shop-desc {
    font-size: map-get($map: $fontMap, $key: big);
    text-indent: 2em;
    margin-top: 40px;
  }
  .shop-parts {
    display: flex;

    .shop-parts-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .item-label {
        font-size: map-get($map: $fontMap, $key: big);
        font-weight: bold;
      }
    }
  }
}
</style>
