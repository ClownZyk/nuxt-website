<template>
  <div class="supply">
    <div class="title">云极供应链</div>
    <div class="wrap desc">
      为云极连锁门店提供商品供应链支持；为企业提供各类型场景化集采服务；企业购提供办公场景的即时零售服务；为企业及员工提供小时达区域速配
    </div>
    <div class="content wrap">
      <div class="content-img">
        <img src="../assets/index-img8.png" alt="" />
      </div>
      <div class="content-cate">
        <div class="cate-item">
          <div class="cate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yunjiAIlingshouyun"></use>
            </svg>
          </div>
          <div class="cate-name">分布式云仓</div>
        </div>
        <div class="cate-item">
          <div class="cate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye-yunjishandiancang"></use>
            </svg>
          </div>
          <div class="cate-name">云极闪电仓</div>
        </div>
        <div class="cate-item">
          <div class="cate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye-yunjimaoxiwuliu"></use>
            </svg>
          </div>
          <div class="cate-name">云极毛细物流</div>
        </div>
        <div class="cate-item">
          <div class="cate-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shouye-yunjikuajing"></use>
            </svg>
          </div>
          <div class="cate-name">云极跨境</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.supply {
  background-color: #f7f7f7;
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

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 120px 80px 0;

    .content-cate {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      .cate-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .cate-icon {
          background-color: #ffffff;
          .icon {
            font-size: 64px;
          }
        }
        .cate-name {
          margin-top: 4px;
          font-size: map-get($map: $fontMap, $key: big);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
