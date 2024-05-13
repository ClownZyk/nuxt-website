<template>
  <div class="company">
    <div class="content wrap">
      <div class="left">
        <div class="title">云极企业购</div>
        <div class="desc">直通企业的S-B-C超级渠道私域电商与智慧零售充分融合</div>
        <div class="module">
          <div class="module-item">
            <img src="../assets/index-img11.png" alt="">
          </div>
          <div class="module-item">
            <img src="../assets/index-img12.png" alt="">
          </div>
          <div class="module-item">
            <img src="../assets/index-img13.png" alt="">
          </div>
          <div class="module-item">
            <img src="../assets/index-img14.png" alt="">
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/index-img10.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.company {
  height: 700px;
  background-image: url(../assets/index-img9.png);
  background-repeat: no-repeat;
  background-size: cover;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    .left {
      margin-right: 12px;
      .title {
        font-size: map-get($map: $fontMap, $key: huge);
        font-weight: bold;
        color: #ffffff;
      }
      .desc {
        font-size: map-get($map: $fontMap, $key: big);
        color: #ffffff;
      }

      .module {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 80px;
      }
    }
  }
}
</style>
