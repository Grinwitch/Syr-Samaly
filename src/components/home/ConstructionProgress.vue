<script setup>
  import {defineComponent} from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent ({
    name: 'ConstructionProgress',
    data() {
      return {
        progressOptions: {
        rewind: true, 
        pagination: false, 
        perPage: 6, 
        gap: 20, 
        perMove: 1, 
        breakpoints: {
           1100: { perPage: 3}, 
           768: { perPage: 2}, 
           600: { perPage: 1}}
      }
      }
    },

    created() {
      window.addEventListener('load', this.windowLoadCheck);
    },
    mounted() {

      // let nextButton = document.querySelector('.progress-content__slider-container .splide__arrow--next');
      // let prevButton = document.querySelector('.progress-content__slider-container .splide__arrow--prev');
      // const ff = () => {

      //   setTimeout(changeImg, 500);
      //   function changeImg() {
      //     let activeEl = [];
      //     let decoreImg = document.createElement('img');
      //     let decoreImgBott = document.createElement('img');
      //     let progressList = document.querySelectorAll('.progress-content__slider-container .splide__slide');

      //     // this.addSetAtr(null, {'src': '/src/assets/img/history-img.svg'});

      //     decoreImg.setAttribute('src', '/src/assets/img/history-img.svg');
      //     decoreImgBott.setAttribute('src', '/src/assets/img/history-img.svg');

      //     decoreImg.setAttribute('class', 'progress-content__slider-img progress-first-slide-img');
      //     decoreImgBott.setAttribute('class', 'progress-content__slider-img progress-last-slide-img');

      //     progressList.forEach((elem) =>{
      //       if (elem.classList.contains('is-visible')){
      //         activeEl.push(elem);
      //         return 0
      //       }
      //       let dEl = elem.querySelector('img');
            
      //       if (dEl)
      //         dEl.remove(dEl)
      //     })


      //     activeEl[0].querySelector('.progress-content__slider-item').appendChild(decoreImg);
      //     activeEl[activeEl.length - 1].querySelector('.progress-content__slider-item').appendChild(decoreImgBott);

      //     activeEl.slice(1, activeEl.length - 1).forEach((elem) => {
      //       if (elem.querySelector('img'))
      //         elem.querySelector('img').remove();
      //     })

      //     console.log("jj")
      //   }
      // }

      // nextButton.addEventListener("click", ff);
      // prevButton.addEventListener("click", ff);
    
    },
    methods: {

      windowLoadCheck: function() {
        let startImg = document.createElement('img');
        let startImgBot = document.createElement('img');
        let startImgUrl = '/src/assets/img/history-img.svg'
        let startImgTopStyles = 'progress-content__slider-img progress-first-slide-img'
        let startImgBotStyles = 'progress-content__slider-img progress-last-slide-img'
        let elemArr = [];
        let startElem = document.querySelectorAll('.progress-content__slider-container .is-visible');
        startElem.forEach((elem) => {
          elemArr.push(elem);
        })
        if( window.innerWidth < 601) {
          elemArr[0].querySelector('.progress-content__slider-item').appendChild(startImg);
          elemArr[0].querySelector('img').setAttribute('src', startImgUrl);
          elemArr[0].querySelector('img').setAttribute('class', startImgTopStyles);
        }
        else if( window.innerWidth >= 600 ) {
          elemArr[0].querySelector('.progress-content__slider-item').appendChild(startImg);
          elemArr[0].querySelector('img').setAttribute('src', startImgUrl);
          elemArr[0].querySelector('img').setAttribute('class', startImgTopStyles);
          elemArr[elemArr.length - 1].querySelector('.progress-content__slider-item').appendChild(startImgBot);
          elemArr[elemArr.length - 1].querySelector('img').setAttribute('src', startImgUrl);
          elemArr[elemArr.length - 1].querySelector('img').setAttribute('class', startImgBotStyles);
        }
      },

      progressSlidingMounted: function() {
        let slideImg = document.createElement('img');
        let slideImgBot = document.createElement('img');
        let slideImgUrl = '/src/assets/img/history-img.svg';
        let slideImgTopStyles = 'progress-content__slider-img progress-first-slide-img';
        let slideImgBotStyles = 'progress-content__slider-img progress-last-slide-img';
        let slideList = document.querySelectorAll('.progress-content__slider-container .splide__slide');
        let slideElArr = [];
        slideList.forEach((el) => {
          if(el.classList.contains('is-visible')) {
            slideElArr.push(el);
          }
        })

        console.log(slideElArr);

        if ( window.innerWidth < 601 ) {
          slideElArr[0].querySelector('.progress-content__slider-item').appendChild(slideImg);
          slideElArr[0].querySelector('img').setAttribute('src', slideImgUrl);
          slideElArr[0].querySelector('img').setAttribute('class', slideImgTopStyles);
        }
        else if (window.innerWidth >= 601) {
          slideElArr[0].querySelector('.progress-content__slider-item').appendChild(slideImg);
          slideElArr[0].querySelector('img').setAttribute('src', slideImgUrl);
          slideElArr[0].querySelector('img').setAttribute('class', slideImgTopStyles);
          slideElArr[slideElArr.length - 1].querySelector('.progress-content__slider-item').appendChild(slideImgBot);
          slideElArr[slideElArr.length - 1].querySelector('img').setAttribute('src', slideImgUrl);
          slideElArr[slideElArr.length - 1].querySelector('img').setAttribute('class', slideImgBotStyles);
        }

      }
    },
  })
</script>

<template>
  <div>
    <div class="progress">
      <div class="container">
        <div class="progress__content">
          <h2 class="section__title">Ход строительства</h2>
          <div class="progress-content__slider">
            <Splide @splide:visible="progressSlidingMounted" :options="progressOptions" class="progress-content__slider-container">
              <SplideSlide>
                <div class="progress-content__slider-item">
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
                  <div class="progress-content__slider-title">Август 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Сентябрь 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Октябрь 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Ноябрь 2023</div>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div class="progress-content__slider-item">
                  <div class="progress-content__slider-title">Декабрь 2023</div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
