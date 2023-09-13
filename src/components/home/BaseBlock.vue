<script setup>
  import { defineComponent } from "vue";
</script>

<script>
  export default defineComponent({
    name: "BaseBlock"
  })
</script>

<template>
  <div class="base-block">
    <div class="base-block__img-block" style="transition: all 0s; position: relative">
      <!-- <img src="@/assets/img/466fbe22-a97c-47e3-8b9a-732c07fb1e0b.jpeg" class="base-block__img"> -->

      <div class="base-block__location-name-block">
        <img src="@/assets/img/icon-pin.svg" class="base-block__location-name-img">
        Кызылорда, ул. Муратбекова, 2Е
      </div>

      <div class="base-block__obj-info-block">
        <div class="base-block__obj-developer-block">
          <div class="base-block__obj-developer-name text--uppercase">Застройщик</div>
          <img class="base-block__obj-developer-logo" src="@/assets/img/logo.png">
          <img src="@/assets/img/about-arrow.svg" class="base-block__obj-developer-logo-link-img">
          <div class="base-block__obj-developer-link">
            <a href="#" target="_blank" rel="noopener">syr-samaly.kz</a>
          </div>
        </div>

        <div class="base-block__obj-price-block">
          <p>от 295 000 тг/м</p>
        </div>

        <div class="base-block__obj-desc-block">
          <div class="base-block__obj-desc text--uppercase">Первоначальный взнос от</div>
          <div class="base-block__obj-price">20%</div>
        </div>

        <div class="base-block__obj-location-select">
          <img src="@/assets/img/promo-img.svg" class="base-block__obj-location-select-decore-img">
          <div class="base-block__obj-desc text--uppercase" style="margin: 0;">Новый район</div>
          <div class="base-block__obj-desc" style="font-weight: 400;">Город</div>
          <div class="base-block__obj-price">20%</div>
        </div>

      </div>

    </div>
  </div>
</template>
