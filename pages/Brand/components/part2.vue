<template>
  <div class="part">
    <div class="title">发展路径</div>
    <div class="desc wrap">关于云极</div>
    <div class="main wrap">
      <img src="../assets/img2.png" alt="" />
      <div class="content">
        <div class="content-item" style="padding-right: 60px">
          <div class="label">在园区办公场景<br />建立线下智慧店</div>
          <div class="summary">
            通过整合园区资源优势与商业运营能力，合作/建立云极线下智慧门店，强刚需、高信任、标准化、社群化。
          </div>
        </div>
        <div class="content-item" style="padding-right: 36px">
          <div class="label">通过中央厨房完<br />成餐食供应体系</div>
          <div class="summary">
            通过区域中央加工厨房，承担政府学校企业相关配餐服务，同时对门店提供半成品预制菜加工和餐食供应链。
          </div>
        </div>
        <div class="content-item" style="padding-left: 0px">
          <div class="label">建分布式云仓完<br />成即时零售闭环</div>
          <div class="summary">
            通过分布式云仓建立区域毛细物流体系，利用云极数字化平台将企业采购和员工消费从社区家庭转向云极平台。
          </div>
        </div>
        <div class="content-item" style="padding-left: 0px">
          <div class="label">100个城市可复制<br />1000个标准模型</div>
          <div class="summary">
            通过云极自研数字化系统、标准化模型实现跨地区快速复制，市场规模超百亿，成为办公场景零售赛道No.1。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.part {
  background-color: #ffffff;
  padding-bottom: 80px;
  .title {
    font-size: map-get($map: $fontMap, $key: huge);
    font-weight: bold;
    color: #333333;
    text-align: center;
    padding: 40px 0;
  }
  .desc {
    text-align: center;
    font-size: map-get($map: $fontMap, $key: big);
  }

  .main {
    text-align: center;
    .content {
      display: flex;
      margin: 0 auto;
      .content-item {
        flex: 0 0 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
        .label {
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        }
        .summary {
          margin-top: 24px;
          background: #f8f9fa;
          text-align: left;
          border-radius: 4px;
          width: 253px;
          padding: 16px;
        }
      }
    }
  }
}
</style>
