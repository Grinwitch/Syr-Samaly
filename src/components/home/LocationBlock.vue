<script setup>
  import { defineComponent } from 'vue';
</script>

<template>
  <div>
    <div class="location">
      <div class="container">
        <div class="location__content">
          <div class="location__content-left">
            <img src="@/assets/img/details-img-1.svg" class="location__content-left-img-background">
            <h2 class="section__title">Расположение</h2>
            <h3 class="location__content-suptitle">Удачное сочетание спокойствия и городского комфорта</h3>
            <p class="location__content-descr">
              Жилой комплекс Syr Samaly находится по адресу ул. Муратбекова, 2Е. Здесь близ 
              открываются прекрасные виды на город и реку Сырдарью, а сам район является 
              современным благоустроенным, с продуманной инфраструктурой
            </p>
          </div>
          <div class="location__content-right">
            <div class="location__content-map">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6531652c1851bcb3470ada438f705d7b03ba25e9168d9e8580d2224cb3382d70&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>