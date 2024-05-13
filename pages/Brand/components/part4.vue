<template>
  <div class="part">
    <div class="title">门店展示</div>
    <div class="desc wrap">关于云极</div>
    <div class="main wrap">
      <div class="shop-container">
        <div class="shop-item">
          <img src="../assets/img15.jpg" alt="" />
          <div class="shop-name"><span>云极咖啡夜未央体育公园店</span></div>
        </div>
        <div class="shop-item">
          <img src="../assets/img17.jpg" alt="" />
          <div class="shop-name"><span>云极咖啡总统府店</span></div>
        </div>
        <div class="shop-item">
          <img src="../assets/img14.jpg" alt="" />
          <div class="shop-name"><span>云极咖啡VR店</span></div>
        </div>
        <div class="shop-item">
          <img src="../assets/img13.jpg" alt="" />
          <div class="shop-name"><span>云极咖啡玄武湖店</span></div>
        </div>
        <div class="shop-item">
          <img src="../assets/img16.jpg" alt="" />
          <div class="shop-name"><span>云极咖啡熙南里店</span></div>
        </div>
        <div class="shop-item">
          <img src="../assets/img18.jpg" alt="" />
          <div class="shop-name"><span>云极小超MIX3.0雨润大街店</span></div>
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
    margin-top: 24px;
    .shop-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      .shop-item {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        img {
          transition: all 0.2s;
        }
        .shop-name {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          color: #ffffff;
          font-size: 16px;
          font-weight: bold;
          padding: 8px 16px;
          background-color: rgba(0, 0, 0, 0.4);
          span {
            background: linear-gradient(to right, #ffffff, #ffffff) no-repeat right bottom;
            background-size: 0 2px;
            transition: background-size 400ms;
          }
        }
        &:hover {
          img {
            transform: scale(1.2);
          }
          .shop-name {
            span {
              background-position-x: left;
              background-size: 100% 2px;
            }
          }
        }
      }
    }
  }
}
</style>
