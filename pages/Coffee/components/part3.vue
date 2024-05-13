<template>
  <div class="wrap">
    <el-carousel height="600px">
      <el-carousel-item>
        <div class="part">
          <div class="right">
            <img src="../assets/img16.jpg" alt="" />
          </div>
          <div class="left">
            <div class="title">
              <span class="title-ch">云极咖啡熙南里店</span>
            </div>
            <div class="desc">
              云极咖啡熙南里店是以非遗文化为主题，以金陵文脉为元素，文化科技相结合的主题咖啡店。本店坐落于南京城南熙南里文化街区大板巷主街，采用云极咖啡体系一店一景一设计的理念，融入南京本地传统设计元素，产品以主题咖啡饮品、非遗文化系列产品为主，每月开设非遗文化展陈活动，大师到店线上线下实时互动，得到非遗协会和多位非遗传承人的大力支持，新媒体全景宣传，打造非遗文化咖啡的最美小店。
            </div>
            <div class="slogo">
              <img src="@/assets/slogo.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="part wrap">
          <div class="right">
            <img src="../assets/img13.jpg" alt="" />
          </div>
          <div class="left">
            <div class="title">
              <span class="title-ch">云极咖啡玄武湖店</span>
            </div>
            <div class="desc">
              云极咖啡创始店，坐落于南京玄武湖十里长堤湖畔，也是南京最美咖啡店之一。春季龙舟竞技充满活力，夏季荷塘莲叶波光粼粼，秋季红叶飘舞落日映霞，冬季一杯咖啡雪意暖心。不管什么时节，也不管什么心情，来此喝一杯云极咖啡，眺望最美南京城市天际线，真正体会到“万物可爱，生活向上！”
            </div>
            <div class="slogo">
              <img src="@/assets/slogo.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="part wrap">
          <div class="right">
            <img src="../assets/img14.jpg" alt="" />
          </div>
          <div class="left">
            <div class="title">
              <span class="title-ch">云极咖啡VR店</span>
            </div>
            <div class="desc">
              云极咖啡VR店坐落于玄武湖梁州湖畔，是云极元宇宙科技主题咖啡店。本店有先进的VR全景沉浸式体验设施，通过第一视角空中俯瞰玄武湖，眺望金陵城。本店不定期举办各类科技类沙龙互动活动，也是科协、航协以及各科技类机构经常性科普活动点之一。
            </div>
            <div class="slogo">
              <img src="@/assets/slogo.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="part wrap">
          <div class="right">
            <img src="../assets/img15.jpg" alt="" />
          </div>
          <div class="left">
            <div class="title">
              <span class="title-ch">云极咖啡夜未央体育公园店</span>
            </div>
            <div class="desc">
              云极咖啡夜未央体育公园店坐落于河西新城科技园核心区域，西城夜未央运动街区的中心位置，毗邻篮球场、足球场、射箭馆，是云极咖啡第一家早C晚A型门店。门店设计风格采用户外露营风，自然惬意，放松心情，在紧张工作之余喝一杯咖啡、酌一杯小酒，或是约上三五个好友，打一场球出汗之余，叙美好时光。
            </div>
            <div class="slogo">
              <img src="@/assets/slogo.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="part wrap">
          <div class="right">
            <img src="../assets/img17.jpg" alt="" />
          </div>
          <div class="left">
            <div class="title">
              <span class="title-ch">云极咖啡总统府店</span>
            </div>
            <div class="desc">
              云极咖啡总统府店坐落于南京总统府景区中山堂片区，与南京金陵金箔集团共同打造的南京首家以非遗金箔文创产品为主题的联名咖啡店。店内民国文化与非遗文化交相呼应，总统府定制主题咖啡到店必点，成为来南京旅游必到打卡集章点。
            </div>
            <div class="slogo">
              <img src="@/assets/slogo.svg" alt="" />
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
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
      text-align: right;
      margin-top: 12px;
    }
  }
  .right {
    flex: 0 0 50%;
    margin-left: 40px;
  }
}
</style>
