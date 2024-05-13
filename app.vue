<template>
  <MHeader></MHeader>
  <NuxtPage :keepalive="true" />
  <MFooter></MFooter>
</template>
<script setup>
// useSeoMeta({
//   title: 'My Amazing Site1',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
useHead({
  script: [
    {
      src: '//at.alicdn.com/t/c/font_4197138_peflf2sfk5j.js',
      body: true
    }
  ]
})
</script>
