import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const config = {
  modules: [Pagination],
  enabled: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      enabled: false,
      slidesPerView: 'all',
      spaceBetween: 0,
    },
  },
};

const brandsSwiper = new Swiper('.brands__swiper', config);
const electronicsSwiper = new Swiper('.electronics__swiper', config);
const pricesSwiper = new Swiper('.prices__swiper', config);
