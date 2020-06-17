<template>
  <div class="main-wrapper">
    <div class="slide-wrapper">
      <swiper ref="swiper" :options="swiperOpt">
        <swiper-slide>
          <img src="./imgs/banner01.png" width="100%" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="./imgs/banner02.png" width="100%" alt />
        </swiper-slide>
        <swiper-slide>
          <img src="./imgs/banner03.png" width="100%" alt />
        </swiper-slide>
        <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
        <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      </swiper>
    </div>
    <div class="intro-wrapper">
      <div class="title">展会介绍</div>
      <div class="poster"></div>
    </div>
    <div class="intro-text">
      福州会展业按下“重启键”！经福州市政府同意，2020第35届中国·福州国际汽车展览会（以下简称“福州五一国际车展”）将于6月25日至28日在福州海峡国际会展中心举办，<br />
      展出规模6万平方米，150多家车商参展，呈现一场集品牌价值和产品技术内涵、时尚魅力为一体的汽车盛宴，降低疫情给汽车产业带来的影响，促进消费回暖，助推福州经济发展。<br />
      本届车展，是福州市贯彻落实党中央、国务院，省委、省政府有关决策部署，不遗余力推动市场经济复苏，提振消费信心、提升城市活力的重要举措，也是疫情发生后的福州首展。<br />
      业内人士表示，车展的举办，将为疫情防控常态化实现福州会展业复苏创造可借鉴的实践经验。
    </div>
    <div class="menu-wrapper">
      <div class="menu-item gg1"></div>
      <div class="menu-item gg2"></div>
      <div class="menu-item gg3"></div>
    </div>
    <div class="news-wrapper">
      <div class="title">新闻中心</div>
      <div class="item-wrapper">
        <div class="items-wrapper">
          <div class="item">
            <div class="text">天然气或实行阶梯式 居民电价或上调</div>
            <div class="date">04-03 10:43</div>
          </div>
          <div class="item">
            <div class="text">环渤海动力煤价报收610元/吨 下跌21元/吨</div>
            <div class="date">04-03 10:43</div>
          </div>
          <div class="item">
            <div class="text">天然气或实行阶梯式 居民电价或上调</div>
            <div class="date">04-03 10:43</div>
          </div>
          <div class="item">
            <div class="text">环渤海动力煤价报收610元/吨 下跌21元/吨</div>
            <div class="date">04-03 10:43</div>
          </div>
        </div>
        <div class="item-photo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOpt: {
        loop: true,
        autoplay: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    },
  },
};
</script>

<style lang="less" scoped>
.main-wrapper {
  .intro-wrapper {
    width: 1000px;
    padding-bottom: 60px;
    margin: 0 auto;
    text-align: center;
    .title {
      width: 120px;
      height: 60px;
      line-height: 60px;
      font-size: 28px;
      font-weight: 600;
      margin: 0 auto;
      border-bottom: 4px solid #2589e5;
    }
    .poster {
      margin-top: 40px;
      background-image: url('./imgs/news.jpg');
      width: 100%;
      height: 180px;
      background-size: 100% 100%;
    }
  }
  .intro-text {
    padding: 100px 0;
    height: 100px;
    line-height: 2;
    text-align: center;
    background-image: url('./imgs/introBGI.jpeg');
    background-size: 100% 100%;
    color: #fff;
  }
  .menu-wrapper {
    margin: 60px auto;
    padding: 30px 0;
    width: 1000px;
    display: flex;
    justify-content: center;
    background-image: url('./imgs/introBGI.jpeg');
    background-size: 100% 100%;
    .menu-item {
      width: 200px;
      height: 200px;
      margin: 0 25px;
      &.gg1 {
        background-image: url('./imgs/menu1.png');
        background-size: 100% 100%;
      }
      &.gg2 {
        background-image: url('./imgs/menu2.png');
        background-size: 100% 100%;
      }
      &.gg3 {
        background-image: url('./imgs/menu3.png');
        background-size: 100% 100%;
      }
    }
  }
  .news-wrapper {
    width: 1000px;
    margin: 0 auto;
    .title {
      margin: 0 auto;
      padding: 10px 0 25px 0;
      font-size: 24px;
      text-align: center;
      border-bottom: 4px solid #a9b1b1;
    }
    .item-wrapper {
      display: flex;
      padding: 20px 0 50px 0;
      .items-wrapper {
        width: 550px;
        padding-right: 50px;
        .item {
          display: flex;
          padding: 15px 0;
          justify-content: space-between;
          cursor: pointer;
          border-bottom: 1px solid #e3e3e3;
          .text {
            color: #ababab;
          }
          .date {
            color: #bbb;
          }
        }
      }
      .item-photo {
        width: 400px;
        height: 220px;
        background-image: url('./imgs/banner03.png');
        background-size: 100% 100%;
      }
    }
  }
}
</style>
