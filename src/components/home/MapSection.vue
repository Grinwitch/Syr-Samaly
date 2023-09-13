<script setup>
import { defineComponent } from "vue";
import './assets/css/map-section.css';
</script>

<template>
  <div>
    <div class="map-section">
      <div class="container">
        <div class="map-section__content">
          <div class="map-section-content__item-map">
          </div>
          <div class="map-section-content__item-info">
            <h3 class="map-section-content__item-info-title">Будьте всегда вовремя</h3>
            <div class="map-section-content__item-info-photo">
              <img src="@/assets/img/render-15.jpg" alt="map photo" class="map-section-content__item-info-img">
              <div class="map-section-content__item-info-descr">
                <p>
                  ЖК Сыр Самалы расположен на правом берегу реки Сырдарьи рядом с ЦОН-ом. Данное престижное ЖК
                  класса люкс дарит преимущества высокого уровня жизни.
                </p>
                <p>
                  Для жителей Сыр самалы открываются прекрасные виды на территорию всего города Кызылорда, а также
                  на реку Сырдарью, расположенную недалеко от территории жилого комплекса.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
