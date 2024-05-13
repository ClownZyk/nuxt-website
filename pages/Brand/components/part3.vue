<template>
  <div class="part">
    <div class="title">旗下品牌</div>
    <div class="desc wrap">关于云极</div>
    <div class="main wrap">
      <div class="brand-container">
        <div class="brand-item">
          <img src="../assets/img3.png" alt="">
        </div>
        <div class="brand-item">
          <img src="../assets/img4.png" alt="">
        </div>
        <div class="brand-item">
          <img src="../assets/img5.png" alt="">
        </div>
        <div class="brand-item">
          <img src="../assets/img6.png" alt="">
        </div>
        <div class="brand-item">
          <img src="../assets/img7.png" alt="">
        </div>
        <div class="brand-item">
          <img src="../assets/img8.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.part {
  background-color: #f7f7f7;
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
    .brand-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 12px;
      .brand-item {
        background-color: #ffffff;
        padding: 20px 40px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
}
</style>
