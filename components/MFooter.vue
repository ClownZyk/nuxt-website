<template>
  <div class="footer">
    <div class="wrap">
      <div class="footer-wrap">
        <div class="footer-left">
          <Logo color="#999999"></Logo>
          <div class="footer-item"><span>联系我们：</span>400-118-1215</div>
          <div class="footer-item">
            <span>地址信息：</span>南京市建邺区楠溪江东街85号金润国际西塔1105室
            <br />西安市高新区锦业路12号迈科商业中心15A
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-code">
            <img src="../assets/images/img2.png" alt="" />
            <div class="code-tip">扫码关注公众号</div>
          </div>
          <div class="footer-code">
            <img src="../assets/images/img3.png" alt="" />
            <div class="code-tip">扫码进入小程序</div>
          </div>
        </div>
      </div>
      <div class="copy-right">
        <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">苏ICP备19020295号-1</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
  background-color: #222222;
  padding: 40px 0 24px;
  .footer-wrap {
    display: flex;
    align-items: center;
    .footer-left {
      flex: 1;
      .footer-item {
        display: flex;
        color: #999999;
        font-size: 16px;
        margin-top: 8px;
      }
    }
    .footer-right {
      display: flex;
      .footer-code {
        margin-left: 20px;
        background-color: #ffffff;
        padding: 8px;
        .code-tip {
          color: #999999;
          text-align: center;
        }
      }
    }
  }
  .copy-right {
    color: #999999;
    padding-top: 24px;
    margin-top: 24px;
    text-align: center;
    text-decoration: underline;
  }
}
</style>
