<script setup>
  import { defineComponent } from "vue";
</script>

<script>
  export default defineComponent({
    name: "ForBusiness"
  })
</script>

<template>
  <section class="for-business">
    <div class="for-business__container container">
      <div class="for-business__left-block flex__7">
        <div class="for-business__left-title-block">
          <h2>Самый востребованный бизнес можете открыть именно вы</h2>
        </div>
        <span class="com-info__label">
          Коммерческие помещения от <span class="color">77</span> до <span class="color">127 м<sup>2</sup></span>
        </span>

        <div class="flex for-business__left-com-info-items">
          <div class="flex for-business__left-com-info-item">
            <img src="@/assets/img/634816c3dff9clabel-svgrepo-com-1.svg">
            <span>от 415 000 тг./м<sup>2</sup></span>
          </div>

          <div class="flex for-business__left-com-info-item" style="margin:0">
            <img src="@/assets/img/634816c3e49c6walk-to-left-walk-move-stroll-svgrepo-com-1.svg">
            <span>35 000+ человек</span>
          </div>
        </div>

        <button type="button" name="button" class="btn1 btn1--gradient for-business__left-com-info-button">Получить консультацию</button>
      </div>

      <div class="for-business__right-block flex__5">
        <div class="for-business__right-img-block">
          <img src="@/assets/img/63480d2ee54551622315618_2-phonoteka_org-p-produktovii-magazin-art-krasivo-5.jpg">
        </div>
      </div>
    </div>
  </section>
</template>

