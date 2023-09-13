<script setup>
  import { defineComponent } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent({
    data() {
      return {
        roomActive: 'first',
        area: 'low'
      }
    }
  })
</script>

<template>
  <div>
    <div class="appartment">
      <div class="container">
        <div class="appartment__content">
          <div class="appartment-content__default">
            <div class="appartment-content__left">
              <div class="appartment-content__left-block-top">
                <h2 class="section__title">Выбери свою квартиру</h2>
                <div class="appartment-content__left-block-rooms">
                  <span class="appartment-content__left-block-rooms-text">Комнаты:</span>
                  <ul class="appartment-content__left-block-rooms-list">
                    <li class="appartment-content__left-block-rooms-point">
                      <button @click="roomActive = 'first'" class="appartment-content__left-block-rooms-button appartment-left-active">1 комн.</button>
                    </li>
                    <li class="appartment-content__left-block-rooms-point">
                      <button @click="roomActive = 'second'" class="appartment-content__left-block-rooms-button">2 комн.</button>
                    </li>
                    <li class="appartment-content__left-block-rooms-point">
                      <button @click="roomActive = 'third'" class="appartment-content__left-block-rooms-button">3 комн.</button>
                    </li>
                  </ul>
                </div>
                <div class="appartment-content__left-block-area">
                  <span class="appartment-content__left-block-area-text">Площадь:</span>
                  <ul class="appartment-content__left-block-area-list">
                    <li class="appartment-content__left-block-area-point">
                      <button class="appartment-content__left-block-area-button appartment-left-active" id="area1">39.35 м²</button>
                    </li>
                    <li class="appartment-content__left-block-area-point">
                      <button class="appartment-content__left-block-area-button" id="area2">40.85 м²</button>
                    </li>
                    <li class="appartment-content__left-block-area-point">
                      <button class="appartment-content__left-block-area-button" id="area3">44.35 м²</button>
                    </li>
                    <li class="appartment-content__left-block-area-point">
                      <button class="appartment-content__left-block-area-button" id="area4">45.27 м²</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="appartment-content__left-block-bottom">
                <h4 class="appartment-content__left-block-bottom-title">Условия покупки:</h4>
                <ul class="appartment-content__left-block-bottom-list">
                  <li class="appartment-content__left-block-bottom-point">
                    <div class="appartment-content__left-block-bottom-list-button">Оплата 100%</div>
                  </li>
                  <li class="appartment-content__left-block-bottom-point">
                    <div class="appartment-content__left-block-bottom-list-button">Рассрочка</div>
                  </li>
                  <li class="appartment-content__left-block-bottom-point">
                    <div class="appartment-content__left-block-bottom-list-button">Ипотека</div>
                  </li>
                </ul>
                <button class="appartment-content__left-block-bottom-button">Оставить заявку</button>
              </div>
            </div>
            <div class="appartment-content__right">
              <div class="appartment-content__right-thumbnail">
                <Transition name="apart">
                  <div v-if="roomActive === 'first'" class="appartment-content__right-thumbnail-block">
                    <img src="@/assets/img/render-1.jpg" alt="apart photo" class="appartment-content__right-thumbnail-img">
                    <button class="appartment-content__right-button">
                      <img src="@/assets/img/search.png" alt="btn ico" class="appartment-content__right-button-icon"> Увеличить
                    </button>
                  </div>
                  <div v-else-if="roomActive === 'second'" class="appartment-content__right-thumbnail-block">
                    <img src="@/assets/img/render-2.jpg" alt="apart photo" class="appartment-content__right-thumbnail-img">
                    <button class="appartment-content__right-button">
                      <img src="@/assets/img/search.png" alt="btn ico" class="appartment-content__right-button-icon"> Увеличить
                    </button>
                  </div>
                  <div v-else-if="roomActive === 'third'" class="appartment-content__right-thumbnail-block">
                    <img src="@/assets/img/render-4.jpg" alt="apart photo" class="appartment-content__right-thumbnail-img">
                    <button class="appartment-content__right-button">
                      <img src="@/assets/img/search.png" alt="btn ico" class="appartment-content__right-button-icon"> Увеличить
                    </button>
                  </div>
                </Transition>
              </div>
              <div class="appartment-content__right-pagination">
                <ul class="appartment-content__right-pagination-list">
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                  <li class="appartment-content__right-pagination-point">
                    <img src="@/assets/img/render-1.jpg" alt="pag photo" class="appartment-content__right-pagination-img">
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="appartment-content__commercion">
            <div class="appartment-content__left"></div>
            <div class="appartment-content__right"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>