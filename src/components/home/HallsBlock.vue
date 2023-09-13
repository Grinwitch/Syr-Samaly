<script setup>
  import { defineComponent } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent({
    data() {
      return {
        hallsOptions: {
          type: 'loop',
          rewind: true,
          pagination: false,
          perPage: 3,
          perMove: 1,
          gap: 20,
          breakpoints: {
            1100: { perPage: 3},
            768: { perPage: 2},
            600: {perPage: 1}
          }
        }
      }
    }
  })
</script>

<template>
  <div>
    <div class="halls">
      <div class="container">
        <div class="halls__content">
          <h2 class="section__title">Холлы</h2>
          <p class="halls__content-descr">
            Дизайнерские холлы с первых шагов в дом создают приятное
            впечатление: пол выложен керамогранитными плитами, а стены
            облицованы деревянными панелями.
          </p>
          <Splide class="halls-content__gallery" :options="hallsOptions">
              <SplideSlide>
                <img src="@/assets/img/render-1.jpg" alt="halls photo" class="halls-content__gallery-img">
              </SplideSlide>
              <SplideSlide>
                <img src="@/assets/img/render-1.jpg" alt="halls photo" class="halls-content__gallery-img">
              </SplideSlide>
              <SplideSlide>
                <img src="@/assets/img/render-1.jpg" alt="halls photo" class="halls-content__gallery-img">
              </SplideSlide>
            <SplideSlide>
              <img src="@/assets/img/render-1.jpg" alt="halls photo" class="halls-content__gallery-img">
            </SplideSlide>
            <SplideSlide>
              <img src="@/assets/img/render-1.jpg" alt="halls photo" class="halls-content__gallery-img">
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  </div>
</template>