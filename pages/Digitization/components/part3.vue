<template>
  <div class="part">
    <div class="title">现在与未来</div>
    <div class="desc wrap">云极数字零售技术</div>
    <div class="main wrap">
      <div class="left">
        <div
          class="item"
          :class="{ active: activeBox.id === item.id }"
          v-for="item in boxData"
          :key="item.id"
          @click="onChangeBoxImg(item)"
        >
          <div class="item-title">{{ item.name }}</div>
          <div class="item-desc" v-html="item.desc"></div>
        </div>
      </div>
      <div class="right">
        <div
          class="img-item"
          v-for="item in boxData"
          :key="item.id"
          :class="{ visiable: activeBox.id === item.id }"
        >
          <img
            class="animate__animated"
            :class="[activeBox.id === item.id ? 'animate__fadeInRight' : 'animate__fadeOutRight']"
            :src="item.img"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const boxData = ref([])
const activeBox = ref({})
onMounted(() => {
  getBoxData()
})
const getBoxData = async () => {
  boxData.value = [
    {
      id: 1,
      name: '云极智慧零售V6系统',
      desc: '云极分布式数字零售系统<br />分布式部署 覆盖商业全场景',
      img: (await import('../assets/img5.jpg')).default
    },
    {
      id: 2,
      name: '云极供应链V8系统',
      desc: '云极分布式供应链系统<br /> 云仓 闪电仓 毛细物流全域链接',
      img: (await import('../assets/img5.jpg')).default
    },
    {
      id: 3,
      name: 'Gemsuper One',
      desc: '智慧零售一站式解决方案<br /> 智能硬件 开放接口 私域部署',
      img: (await import('../assets/img4.png')).default
    },
    {
      id: 4,
      name: 'GemBI商业数据分析',
      desc: '全域的数据分析及智能展示<br /> 驱动运营决策和精准营销',
      img: (await import('../assets/img7.jpg')).default
    },
    {
      id: 5,
      name: 'GemAI智能硬件应用',
      desc: '各类智能硬件的场景化应用<br /> 快速接入 数据联通 私有定制',
      img: (await import('../assets/img6.jpg')).default
    },
    {
      id: 6,
      name: 'SCRM超级用户管理',
      desc: '私域用户全域全息画像<br /> 数据采集、存储、分析及应用支撑',
      img: (await import('../assets/img4.png')).default
    }
  ]
  activeBox.value = boxData.value[0]
}
const onChangeBoxImg = (item) => {
  activeBox.value = item
}
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
    padding: 40px 0 10px;
  }
  .desc {
    text-align: center;
    margin-bottom: 40px;
    font-size: map-get($map: $fontMap, $key: big);
  }
  .main {
    display: flex;
    .left {
      flex: 0 0 260px;
      height: 660px;
      border-radius: 6px;
      background: url(../assets/img3.png) no-repeat;
      background-size: cover;
      padding-top: 20px;
      .item {
        margin-top: 20px;
        background-color: rgba(255, 255, 255, 0.4);
        width: 240px;
        padding: 20px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        color: #333333;
        transition: all 0.3s;
        cursor: pointer;
        &:hover,
        &.active {
          background-color: rgba(255, 255, 255, 0.8);
          box-shadow: 4px 4px 8px #dddddd;
        }
        &.active .item-desc {
          max-height: 60px;
        }
        .item-title {
          font-size: map-get($map: $fontMap, $key: big);
          font-weight: bold;
        }
        .item-desc {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 限制显示两行 */
          overflow: hidden;
          max-height: 0;
          transition: 0.8s 0.3s;
        }
      }
    }
    .right {
      position: relative;
      flex: 1;
      overflow: hidden;
      .img-item {
        position: absolute;
        width: 95%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
        &.visiable {
          visibility: visible;
        }
      }
    }
  }
}
</style>
