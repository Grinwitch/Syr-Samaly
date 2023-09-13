<script setup>
  import { defineComponent } from "vue";
</script>

<script>
  export default defineComponent({
    name: "AcqMethods"
  })
</script>

<template>
  <section class="acq-methods__block">
    <img src="@/assets/img/order-img-3.svg" class="acq-methods__first-img">
    <img src="@/assets/img/order-img-3.svg" class="acq-methods__second-img">

    <div class="acq-methods__container container">
      <div class="acq-methods__title text--uppercase" style="margin-bottom: 20px;">Способы приобретения</div>
      <div class="acq-methods__items">

        <div class="acq-methods__item pay-item">
          <img src="@/assets/img/Frame%2018.svg">
          <h4 class="acq-methods__title">100% оплата (минимальная цена за м2)</h4>
        </div>

        <div class="acq-methods__item pay-item">
          <img src="@/assets/img/Frame%2020.svg">
          <h4 class="acq-methods__title">Возможность покупки в рассрочку от застройщика</h4>
        </div>

        <div class="acq-methods__item pay-item">
          <img src="@/assets/img/logo%20(1)%201.svg">
          <h4 class="acq-methods__title">Ипотека от 5% годовых от bcc.kz</h4>
        </div>

      </div>

    </div>
  </section>
</template>

<style media="screen">
  .acq-methods__item{
    width: 33.33%;
  }

  .acq-methods__item img{
    height: 90px;
    float: start;
    width: fit-content;
  }

  .acq-methods__item .acq-methods__title{
    color: #fff;
    font-size: 20px;
    max-width: 300px;
    line-height: 140%;
  }

  .acq-methods__title{
    font-size: 25px;
    font-weight: 600;
    letter-spacing: .05em;
    color: #cfa36a;
  }

  .acq-methods__items{
    display: flex;
  }

  .acq-methods__block{
    position: relative;
    overflow: hidden;
    background: #09183b;
    padding: 60px 0;
  }

  .acq-methods__second-img{
    position: absolute;
    z-index: 0;
    mix-blend-mode: overlay;
    width: auto;
    height: auto;
    top: -90%;
    left: 75%;
  }

  .acq-methods__first-img{
    position: absolute;
    z-index: 0;
    mix-blend-mode: overlay;
    width: 400px;
    height: 400px;
    transform: translate3d(0px, 5.28073%, 0px);
    top: 25%;
    left: -5%;
  }
</style>
