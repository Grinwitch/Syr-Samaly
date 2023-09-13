<script setup>
  import { defineComponent } from "vue";
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import '@splidejs/vue-splide/css';
</script>

<script>
  export default defineComponent({
    name: "SDetails"
  })
</script>

<template>
  <section class="s-details">
    <div class="s-details__decor-img-block">
      <img src="@/assets/img/details-img-2.svg" class="s-details__decor-img">
    </div>


    <div class="s-details__container container">
      <div class="flex s-details__first-block">
        <div class="s-details__first-left-img-block">
          <img src="@/assets/img/ARBAT1.jpg" class="s-details__first-img">
        </div>

        <div class="s-details__first-right-img-block">
          <img src="@/assets/img/mini_AMPH.jpg" class="s-details__first-img">
        </div>
      </div>

      <div class="s-details__second-info-block">
        <img src="@/assets/img/details-img-1.svg" class="s-details__decor-img">

        <div class="flex s-details__second-info-container">
          <div class="s-details__second-info-item">
            <p class="second-info-item__txt second-info-item__fr-txt">Школа на </p>
            <div class="second-info-item__price">1200</div>
            <p class="second-info-item__txt">мест</p>
          </div>

          <div class="s-details__second-info-item">
            <p class="second-info-item__txt second-info-item__fr-txt">Детский сад на</p>
            <div class="second-info-item__price">320</div>
            <p class="second-info-item__txt">мест</p>
          </div>

          <div class="s-details__second-info-item">
            <p class="second-info-item__txt second-info-item__fr-txt">Протяженность <br>пешеходных зон</p>
            <div class="second-info-item__price">3.5</div>
            <p class="second-info-item__txt">мест</p>
          </div>

          <div class="s-details__second-info-item s-details__second-info-item-ls">
            <p class="second-info-item__txt second-info-item__fr-txt">Площадь застройки</p>
            <div class="second-info-item__price">30</div>
            <p class="second-info-item__txt">км</p>
          </div>

          <div class="s-details__second-info-item s-details__ml3-5">
            <p class="second-info-item__txt second-info-item__fr-txt">Количество жителей</p>
            <div class="second-info-item__price">35 000</div>
            <p class="second-info-item__txt">чел</p>
          </div>

          <div class="s-details__second-info-item">
            <p class="second-info-item__txt second-info-item__fr-txt">Площадь мест отдыха</p>
            <div class="second-info-item__price">630</div>
            <p class="second-info-item__txt">м²</p>
          </div>

        </div>
      </div>

      <div class="flex s-details__third-photo-block">
        <div class="s-details__third-left-img-block">
          <img src="@/assets/img/ARBAT2.jpg" class="s-details__first-img">
        </div>

        <div class="s-details__third-right-img-block">
          <img src="@/assets/img/ECO.jpg" class="s-details__first-img">
        </div>
      </div>

      <div class="s-details__third-slider-block">
        <Splide :options="{ rewind: true, pagination: false, type: 'loop'}">
          <SplideSlide class="flex s-details__third-slide-block">
            <div class="third-slide__info-block">
              <div class="third-slide__slide-num-block">
                <div class="flex third-slide__slide-num-container">
                  <div class="third-slide__slide-num third-slide__slide-num-style">01</div>
                  <span class="third-slide__slide-num-style" style="padding: 0 7.5px;">/</span>
                  <p class="third-slide__slide-count third-slide__slide-num-style">2</p>
                </div>
              </div>

              <div class="third-slide__info-container">
                <pre class="third-slide__info-block-text">Современная <br>школа</pre>
                <div class="third-slide__info-block-desc">
                <p>На территории микрорайона запланировано
                  строительство государственной школы на 1200
                  мест. Школа будет оснащена компьютерными
                  классами и поделена на функциональные зоны:
                  учебная, учебно-опытная,
                  физкультурно-спортивная, хозяйственная и
                  зона отдыха.
                </p>
              </div>
              </div>
            </div>

            <div class="third-slide__photo-block">
              <img src="@/assets/img/pic-benefits-1.jpg">
            </div>
          </SplideSlide>

          <SplideSlide class="flex s-details__third-slide-block">
            <div class="third-slide__info-block">
              <div class="third-slide__slide-num-block">
                <div class="flex third-slide__slide-num-container">
                  <div class="third-slide__slide-num third-slide__slide-num-style">02</div>
                  <span class="third-slide__slide-num-style" style="padding: 0 7.5px;">/</span>
                  <p class="third-slide__slide-count third-slide__slide-num-style">2</p>
                </div>
              </div>

              <div class="third-slide__info-container">
                <pre class="third-slide__info-block-text">Развивающий <br>детский сад</pre>
                <div class="third-slide__info-block-desc">
                <p>Государственный детский сад на 320 мест будет
                   построен рядом со школой на территории
                   микрорайона. Особенность детсада в
                   функциональном зонировании. Пространство
                   поделено на игровые кабинеты и формирует
                   развивающую среду для детей.
                </p>
              </div>
              </div>
            </div>

            <div class="third-slide__photo-block">
              <img src="@/assets/img/pic-benefits-2.jpg">
            </div>
          </SplideSlide>

        </Splide>
      </div>

    </div>
  </section>
</template>

