<script setup>
  import {defineComponent} from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent ({
    name: 'ConstructionProgress',
    mounted() {
      addEventListener("click", (nextButton, prevButton) => {
        nextButton = document.querySelector('.progress-content__slider-container .splide__arrow--next');
        prevButton = document.querySelector('.progress-content__slider-container .splide__arrow--prev');

        setTimeout(changeImg, 500)
        function changeImg() {
          let progressList = document.querySelectorAll('.progress-content__slider-container .is-visible');
          let progressHiddenList = document.querySelectorAll('.progress-content__slider-container .splide__slide');
          let imageUrl = '/src/assets/img/history-img.svg';
          let firstElemImgClass = 'progress-content__slider-img progress-first-slide-img';
          let lastElemImgClass = 'progress-content__slider-img progress-last-slide-img';
          console.log(progressHiddenList);
          for(let i = 0; i < progressList.length; i++) {

            let progressElem = progressList[i];
            let createImg = document.createElement('img');
            let childElem = progressElem.querySelector('.progress-content__slider-item');
            if(i === 0 ) {
              childElem.appendChild(createImg);
              createImg.setAttribute('src', imageUrl);
              createImg.setAttribute('class', firstElemImgClass);
            }
            if(i === progressList.length - 1) {
              childElem.appendChild(createImg);
              createImg.setAttribute('src', imageUrl);
              createImg.setAttribute('class', lastElemImgClass);
            }

          }

          for(let k = 0; k < progressHiddenList.length; k++) {
            let progressHiddenElem = progressHiddenList[k];
            let progressCheckVisible = progressHiddenElem.classList.contains('is-visible');
            console.log(progressCheckVisible);
            if(progressCheckVisible === false) {
              progressHiddenElem.removeChild('img');
            }
          }
        }
      })
    }
  })
</script>

<template>
  <div>
    <div class="progress">
      <div class="container">
        <div class="progress__content">
          <h2 class="section__title">Ход строительства</h2>
          <div class="progress-content__slider">
            <Splide :options="{ rewind: true, pagination: false, type: 'loop', perPage: 6, gap: 20, perMove: 1, breakpoints: { 1100: { perPage: 3}, 768: { perPage: 2}, 600: { perPage: 1}}}" class="progress-content__slider-container">
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <img src="@/assets/img/history-img.svg" alt="" class="progress-content__slider-img progress-first-slide-img">
                  <div class="progress-content__slider-title">Март 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Апрель 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Май 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Июнь 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Июль 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <img src="@/assets/img/history-img.svg" alt="" class="progress-content__slider-img progress-last-slide-img">
                  <div class="progress-content__slider-title">Август 2023</div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
