<template>
  <div>
    <BannerBgFixed :data="bannerData" :bgImg="bannerBg"></BannerBgFixed>
    <shops></shops>
    <parts></parts>
    <supply></supply>
    <company></company>
    <vending></vending>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import Shops from './components/Shops.vue'
import Parts from './components/Parts.vue'
import Supply from './components/Supply.vue'
import Company from './components/Company.vue'
import Vending from './components/Vending.vue'
definePageMeta({
  path: '/home'
})
onMounted(() => {
  getBannerData()
})
const bannerData = ref([])
const bannerBg = ref(null)
const getBannerData = async () => {
  const banners = [
    {
      title: '云极小超MIX店',
      desc: '基于办公场景下的消费需求，提供鲜热餐食、即时零售、咖啡饮品等新型复合式服务，<br />为青年用户打造家庭、公司之外一个真正的第三空间。',
    },
    {
      title: '云极企业购',
      desc: '商业办公场景S-B-C即时零售 企业会员制私域电商平台<br />分布式闪电仓毛细物流小时达 嵌入式内购集采专属模块',
    },
    {
      title: '云极闪电仓',
      desc: '云极办公场景即时零售+私域电商创新模式<br />分布式商业体系一仓多店+毛细物流',
    },
  ]
  bannerData.value = banners
  bannerBg.value = (await import('@/assets/images/img1.jpg')).default
}
</script>
