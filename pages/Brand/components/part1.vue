<template>
  <div class="part">
    <div class="title">核心业务体系</div>
    <div class="desc wrap">关于云极</div>
    <div class="main wrap">
      <img src="../assets/img1.png" alt="">
    </div>
  </div>
</template>
<style lang="scss" scoped>
.part {
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

  .main {
    text-align: center;
    img {
      width: 90%;
    }
  }
}
</style>
