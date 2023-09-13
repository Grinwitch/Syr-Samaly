<script setup>
  import { defineComponent } from "vue";
</script>

<script>
  export default defineComponent({
    name: "BackCall"
  })
</script>

<template>
  <section class="back-call">
    <img src="@/assets/img/order-img-1.svg" class="back-call__decor-img-first">
    <img src="@/assets/img/order-img-2.svg" class="back-call__decor-img-second">
    <img src="@/assets/img/order-img-3.svg" class="back-call__decor-img-third">

    <div class="back-call__container container">

      <div class="back-call__title-block">
        Оставьте заявку и наш менеджер
        <br>
        обязательно с вами свяжется
      </div>

      <div class="flex back-call__form-block">
        <div class="flex back-call__inputs-block">
          <div class="back-call__first-input-block">
            <input type="text" class="back-call__first-input" placeholder="Введите имя">
          </div>

          <div class="back-call__second-input-block">
            <input type="text" class="back-call__second-input" placeholder="+7">
          </div>
        </div>

        <button type="button" name="button" class="btn1 btn1--gradient for-business__left-com-info-button">Получить консультацию</button>

      </div>

    </div>
  </section>
</template>
