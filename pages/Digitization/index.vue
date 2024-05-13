<template>
  <div>
    <banner :data="bannerData"></banner>
    <part1></part1>
    <part2></part2>
    <part3></part3>
  </div>
</template>
<script setup name="digitization">
import { ref, onMounted } from 'vue'
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
definePageMeta({
  path: '/digitization'
})
onMounted(() => {
  getBannerData()
})
const bannerData = ref([])
const getBannerData = async () => {
  const imageModule = {
    title: '数智云极',
    desc: '  云极小超智慧零售系统经过多年自主研发的技术积累，并经历了多阶段、全天候、全体系的实际使用，具备较强的商业运营能力，主要在智慧门店管理、连锁供应链管理、采购、门店IOT智能硬件集成与管理、SCRM超级用户关系管理、收银结算、智能进销存、财务数据管理与分析、物流配送、无人智能售卖机等多方面为云极小超智慧零售门店赋能，目前已在云极体系门店实际商用，效率高、稳定性好，多项核心技术目前已申报知识产权专利保护，技术实际应用能力在同行业中处于领先水平。',
    img: (await import('@/assets/images/img9.png')).default
  }
  bannerData.value.push(imageModule)
}
</script>
