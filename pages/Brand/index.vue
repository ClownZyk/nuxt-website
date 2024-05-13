<template>
  <div>
    <banner :data="bannerData"></banner>
    <part1></part1>
    <part2></part2>
    <part3></part3>
    <part4></part4>
  </div>
</template>
<script setup name="brand">
import { ref, onMounted } from 'vue'
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
definePageMeta({
  path: '/brand'
})
onMounted(() => {
  getBannerData()
})
const bannerData = ref([])
const getBannerData = async () => {
  const imageModule = {
    title: '关于云极',
    desc: '云极小超创立于南京，专注于青年人群的数字化私域商业体系。通过构建新型私域零售渠道，驱动云极小超智慧门店、即时闪电云仓与云极数字化技术平台高效链接，深度挖掘办公场景下的消费需求，将云仓供应链、零售小超、新式餐饮、咖啡饮品、企业服务、团购集采、智能售卖设备等核心服务形成生态体系，以数字科技驱动园区及商业办公楼宇的即时零售渠道创新，为青年用户场景化需求提供更智慧更有温度的精准服务。',
    img: (await import('@/assets/images/img9.png')).default
  }
  bannerData.value.push(imageModule)
}
</script>

