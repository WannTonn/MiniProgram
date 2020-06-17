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
    <div class="infro-wrapper">
      <p>展会介绍</p>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOpt: {
        loop: true,
        autoplay: true,
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
          }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.swiper.$swiper;
    }
  }
};
</script>

<style scoped>
</style>