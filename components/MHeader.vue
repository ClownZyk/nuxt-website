<template>
  <div class="header" :class="{ 'header-solid': headerOpacity >= 1 }">
    <div class="wrap">
      <div class="header-wrap">
        <div class="logo">
          <Logo :color="headerTextColor"></Logo>
        </div>
        <div class="menus">
          <template v-for="menu in menus" :key="menu.path">
            <nuxt-link v-if="menu.path" :to="menu.path" custom v-slot="{ isActive, navigate }">
              <div class="menu-item" :class="{ active: isActive }" @click="navigate">
                {{ menu.label }}
              </div>
            </nuxt-link>
            <div v-else-if="menu.key === 'contact'" class="menu-item" @click="scrollBottom">
              {{ menu.label }}
            </div>
            <a v-else-if="menu.href" :href="menu.href" class="menu-item" target="_blank">{{
              menu.label
            }}</a>
            <div class="menu-item" v-else>{{ menu.label }}</div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useMenusStore } from '@/stores/modules/menus.js'
import { useWindowScroll } from '@vueuse/core'
const menus = useMenusStore().usedMenus
const route = useRoute()
const { y } = useWindowScroll()
const headerOpacity = computed(() => {
  if (route.meta.solidHeader) return 1
  return y.value / 300 >= 1 ? 1 : y.value / 1000
})
const headerTextColor = computed(() => {
  const colorHex = 255 - Math.floor((255 - 51) * headerOpacity.value)
  return `rgb(${colorHex},${colorHex},${colorHex})`
})
// computed()
const scrollBottom = () => {
  window.scrollTo({
    top: 1000000, // 指定滚动的垂直位置
    behavior: 'smooth' // 使用平滑滚动效果
  })
}
</script>
<style lang="scss" scoped>
.header {
  --header-opacity: v-bind(headerOpacity);
  --headerHeight: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, var(--header-opacity));

  &.header-solid {
    border-bottom: 1px solid #dddddd;
  }
  .header-wrap {
    display: flex;
    align-items: center;
    height: var(--headerHeight);
  }

  .logo {
    // position: absolute;
    // left: 86px;
    // top: 50%;
    // transform: translateY(-50%);
    flex: 1;
  }

  .menus {
    display: flex;
    align-items: center;
    height: 100%;

    &::before {
      content: '';
      flex: 1;
    }

    .menu-item {
      color: v-bind(headerTextColor);
      font-size: map-get($map: $fontMap, $key: big);
      margin: 0 20px;
      position: relative;
      line-height: var(--headerHeight);
      height: 100%;
      cursor: pointer;

      &.active::after {
        content: '';
        position: absolute;
        bottom: 16px;
        width: 20px;
        height: 4px;
        background-color: v-bind(headerTextColor);
        left: 50%;
        margin-left: -10px;
      }
    }
  }
}
</style>
