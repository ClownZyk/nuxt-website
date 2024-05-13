<template>
  <div>
    <banner :data="bannerData"></banner>
    <part1></part1>
    <part2></part2>
    <part3></part3>
    <part4></part4>
    <part5></part5>
    <part6></part6>
  </div>
</template>
<script setup name="coffee">
import { ref, onMounted } from 'vue'
import part1 from './components/part1.vue'
import part2 from './components/part2.vue'
import part3 from './components/part3.vue'
import part4 from './components/part4.vue'
import part5 from './components/part5.vue'
import part6 from './components/part6.vue'
definePageMeta({
  path: '/coffee'
})
onMounted(() => {
  getBannerData()
})
const bannerData = ref([])
const getBannerData = async () => {
  const imageModule = {
    img: (await import('@/assets/images/img4.png')).default
  }
  bannerData.value.push(imageModule)
}
</script>