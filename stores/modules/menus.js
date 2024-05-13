import { defineStore } from 'pinia'
const menus = [
  {
    label: '首页',
    path: '/home'
  },
  {
    label: '云极品牌',
    path: '/brand'
  },
  {
    label: '云极咖啡',
    path: '/coffee'
  },
  {
    label: '数智云极',
    path: '/digitization'
  },
  {
    label: '分布式商业',
    // path: '/distributed'
  },
  {
    label: '加入我们',
    // href: 'https://www.baidu.com',
  },
  {
    label: '联系我们',
    key: 'contact'
    // path: '/contact'
  }
]
export const useMenusStore = defineStore('menus', {
  state: () => {
    return {
      menus
    }
  },
  getters: {
    usedMenus: state => state.menus.filter(v => !v.hidden)
  }
})
