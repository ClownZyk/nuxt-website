<template>
  <div class="vending" v-intersection-observer="onIntersectionObserver">
    <div class="title">AI无人便利柜平台</div>
    <div class="content wrap">
      <div class="desc">
        基于计算机视觉的商品识别技术，针对货柜场景定制训练识别模型。消费者打开货柜门后，随意取出、放回商品，通过AI摄像头识别货柜内拿取过程并校验结果，关门后实现系统自动结账。Gembox系列设备提供高精度、可扩展、低成本的商品识别方案，适配主流立式货柜，通过摄像头自动识别消费者拿取的商品，无需逐个扫码，一次性选购关门结账，提升购物体验。
      </div>
      <div class="detail">
        <div class="left">
          <div class="box-type">
            <div
              class="type-item"
              :style="{ '--animate-delay': index * 0.2 + 's' }"
              :class="{
                'animate__animated animate__delay-1s animate__bounceInLeft': targetIsVisible,
                active: activeBox.id === item.id
              }"
              v-for="(item, index) in boxData"
              :key="item.id"
              @click="onChangeBoxImg(item)"
            >
              {{ item.name }}
            </div>
          </div>
          <div class="box-img">
            <img :src="activeBox.img" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="item">
            <div class="item-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye--yicixingkegoumaiduozhongshangpin"></use>
              </svg>
            </div>
            <div class="item-main">
              <div class="item-title">一次性可购买多种商品</div>
              <div class="item-desc">
                用户打开货柜门后，可反复拿出、放回商品，支持一次性购买多种商品，体验流畅自然
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye-yunyingchengbendi"></use>
              </svg>
            </div>
            <div class="item-main">
              <div class="item-title">运营成本低</div>
              <div class="item-desc">
                基于视觉技术的商品识别方案，替代原有机械臂、RFID等传统方式，大大减少运营投入
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-icon">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouye--xinshangpinzidonghuaruku"></use>
              </svg>
            </div>
            <div class="item-main">
              <div class="item-title">新商品自动化入库</div>
              <div class="item-desc">
                新增商品通过采集装置一键式完成图像采集工作，自动上传入库，迅速完成商品扩充
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { vIntersectionObserver } from '@vueuse/components'
const { targetIsVisible, onIntersectionObserver } = useElementAnimationOnce()
onMounted(() => {
  getBoxData()
})
const boxData = ref([])
const activeBox = ref({})
const getBoxData = async () => {
  boxData.value = [
    {
      id: 1,
      name: 'Gembox G1系列',
      img: (await import('../assets/index-img15.png')).default
    },
    {
      id: 2,
      name: 'Gembox G1X',
      img: (await import('../assets/index-img16.png')).default
    },
    {
      id: 3,
      name: 'Gembox G2系列',
      img: (await import('../assets/index-img17.png')).default
    },
    {
      id: 4,
      name: 'Gembox G3系列',
      img: (await import('../assets/index-img18.png')).default
    },
    {
      id: 5,
      name: '云极无人便利柜',
      img: (await import('../assets/index-img19.png')).default
    }
  ]
  activeBox.value = boxData.value[0]
}
const onChangeBoxImg = (item) => {
  activeBox.value = item
}
</script>
<style scoped lang="scss">
.vending {
  background-color: #f7f7f7;
  padding-bottom: 60px;
  .title {
    font-size: map-get($map: $fontMap, $key: huge);
    font-weight: bold;
    color: #333333;
    text-align: center;
    padding: 40px 0;
  }
  .content {
    .desc {
      font-size: map-get($map: $fontMap, $key: big);
    }
    .detail {
      display: flex;
      align-items: center;
      margin-top: 40px;
      .left {
        flex: 0 0 690px;
        height: 530px;
        background-image: url(../assets/index-img20.png);
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        .box-type {
          position: absolute;
          top: 20px;
          width: 260px;
          height: 490px;
          padding-top: 40px;
          box-shadow: 20px 20px 20px rgb(238, 238, 238, 0.8);
          .type-item {
            margin-top: 20px;
            background-color: rgba(255, 255, 255, 0.4);
            width: 200px;
            padding: 20px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            transition: all 0.3s;
            cursor: pointer;
            &:hover,
            &.active {
              background-color: rgba(255, 255, 255, 0.8);
              box-shadow: 4px 4px 8px #dddddd;
            }
          }
        }

        .box-img {
          position: absolute;
          top: 40px;
          right: 20px;
          width: 400px;
        }
      }
      .right {
        flex: 1;
        .item {
          display: flex;
          align-items: center;
          padding-left: 30px;
          margin: 40px 0;
          .item-icon {
            margin-right: 12px;
            .icon {
              font-size: 68px;
            }
          }
          .item-title {
            font-size: 20px;
            font-weight: bold;
          }
          .item-desc {
            font-size: 16px;
            margin-top: 14px;
          }
        }
      }
    }
  }
}
</style>
