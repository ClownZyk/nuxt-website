<template>
  <div class="part" v-intersection-observer="onIntersectionObserver">
    <div class="title">现在与未来</div>
    <div class="desc wrap">云极数字零售技术</div>
    <div class="main wrap">
      <div class="tabs">
        <div class="tab-item">现在 NOW</div>
        <div class="tab-item active">未来 FUTURE</div>
      </div>
      <div class="content">
        <div class="content-left">
          <div class="content-item" :style="{'--animate-delay': 0.2 + index * 0.4 + 's'}" v-for="(item, index) in leftData" :key="index" :class="{'animate__animated animate__delay-1s animate__flipInX': targetIsVisible}">
            <div class="item-icon">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
            </div>
            <div class="item-info">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-desc" v-html="item.desc"></div>
            </div>
          </div>
        </div>
        <div class="content-middle">
          <img src="../assets/img2.png" alt="" />
        </div>
        <div class="content-right">
          <div class="content-item" :style="{'--animate-delay': 0.2 + index * 0.4 + 's'}" v-for="(item, index) in rightData" :key="index" :class="{'animate__animated animate__delay-1s animate__flipInX': targetIsVisible}">
            <div class="item-icon">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="`#${item.icon}`"></use>
              </svg>
            </div>
            <div class="item-info">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-desc" v-html="item.desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'

const { targetIsVisible, onIntersectionObserver } = useElementAnimationOnce()
const leftData = ref([
  {
    title: '云极V8',
    desc: '供应链系统',
    icon: 'icon-yunjiV8'
  },
  {
    title: '云极V6',
    desc: '智慧零售系统',
    icon: 'icon-yunjiV6'
  },
  {
    title: 'GemBI',
    desc: '商业智能数据<br />分析系统',
    icon: 'icon-GemBI'
  },
  {
    title: 'Gemsuper One',
    desc: '商业智能硬件<br />解决方案',
    icon: 'icon-a-GemsuperOne'
  },
  {
    title: '云极SCRM',
    desc: '超级用户关系系统',
    icon: 'icon-yunjiSCRM'
  }
])
const rightData = ref([
  {
    title: '云极智慧供应链',
    desc: '智能云仓 智联速配 <br /> 毛细物流 无人配送',
    icon: 'icon-yunjizhihuigongyinglian'
  },
  {
    title: '云极AI零售云',
    desc: '云计算 云存储 数字用户 <br /> 上下游供应链智能云技术',
    icon: 'icon-yunjiAIlingshouyun'
  },
  {
    title: '云极VR超级零售',
    desc: '虚拟现实场景 线上线下融合<br />千人千面 万店互联',
    icon: 'icon-yunjiVRchaojilingshou'
  },
  {
    title: '云极超级门店',
    desc: '场景化 数字化 智能化 <br /> 全域式 体验式 情感式',
    icon: 'icon-yunjichaojimendian'
  }
])
</script>
<style lang="scss" scoped>
.part {
  background-color: #ffffff;
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
    .tabs {
      display: flex;
      box-shadow: 3px 3px 12px 1px rgba(0, 0, 0, 0.05);
      border-radius: 2px;
      overflow: hidden;
      .tab-item {
        flex: 1;
        text-align: center;
        font-size: 22px;
        font-weight: bold;
        padding: 8px 0;
        &.active {
          background-color: #2d82f5;
          color: #ffffff;
        }
      }
    }
    .content {
      display: flex;
      margin-top: 80px;
      align-items: center;
      .content-middle {
        flex: 1;
        text-align: center;
      }
      .content-right,
      .content-left {
        .content-item {
          display: flex;
          margin-top: 24px;
          .item-icon .icon {
            font-size: 64px;
            margin: 0 24px;
          }
          .item-title {
            font-size: 20px;
            font-weight: bold;
          }

          .item-desc {
            font-size: 16px;
            margin-top: 4px;
          }
        }
      }
      .content-left .content-item {
        flex-direction: row-reverse;
        .item-title {
          text-align: right;
        }
        .item-desc {
          text-align: right;
        }
      }
    }
  }
}
</style>
