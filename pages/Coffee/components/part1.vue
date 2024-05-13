<template>
  <div class="part wrap">
    <div class="left">
      <div class="title">
        <span class="title-ch">关于我们</span>
        <span class="title-en">Brand Introduction</span>
      </div>
      <div class="desc">
        云极咖啡创立于江苏南京，是云极旗下专业咖啡品牌，2020年12月首家云极咖啡独立品牌门店在
        南京玄武湖畔开业，云极咖啡专注于都市精品咖啡体验，设备精选La Marzocco、Mahlkonig、
        Fiorenzato等国际一线品牌、咖啡豆选自埃塞俄比亚、哥伦比亚、印度尼西亚等产地精品豆种，
        国际专业烘焙水准，同时更注重场景化打造，在城市各类地标风景线、城市景区为您奉上一杯更专
        业更有温度的云极咖啡。
      </div>
      <div class="slogo">
        <img src="@/assets/slogo.svg" alt="" />
      </div>
    </div>
    <div class="right">
      <img src="../assets/img1.png" alt="" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.part {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 600px;
  .left {
    flex: 0 0 50%;
    padding-right: 60px;
    .title {
      .title-ch {
        font-size: 22px;
        color: #333333;
        font-weight: bold;
      }
      .title-en {
        font-size: 20px;
        color: #333333;
        margin-left: 16px;
      }
    }
    .desc {
      line-height: 40px;
      margin-top: 40px;
    }
    .slogo {
      margin-top: 12px;
    }
  }
  .right {
    flex: 0 0 50%;
    margin-left: 40px;
  }
}
</style>
