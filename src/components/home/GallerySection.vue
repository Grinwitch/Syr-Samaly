<script setup>
import {defineComponent} from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent ({ 
    data() {
      return {
        galleryOptions: {
          rewind: true, 
          pagination: false, 
          type: 'loop', 
          perPage: 3, 
          gap: 20, 
          perMove: 1, 
          breakpoints: { 
            1100: { perPage: 3}, 
            768: { perPage: 2}, 
            600: {perPage: 1}}
        }
      }
    },
    mounted() {
      
    }
  })
</script>

<template>
  <div class="gallery">
    <div class="container">
      <div class="gallery__content">
        <h2 class="section__title">Галерея</h2>
        <Splide :options="galleryOptions" class="gallery__content-slider">
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-1.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-2.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-3.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-4.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-5.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-6.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-7.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-8.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
          <SplideSlide>
            <div class="gallery__content-item">
              <img src="@/assets/img/render-9.jpg" alt="gallery photo" class="gallery__content-img">
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<style media="screen">
.gallery {
    width: 100%;
    padding: 70px 0 70px;
}

.gallery__content {
    width: 100%;
}

.gallery__content-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 25px;
}

.gallery__content-item {
    width: 100%;
    cursor: pointer;
}

.gallery__content-img {
    object-fit: cover;
}
</style>
