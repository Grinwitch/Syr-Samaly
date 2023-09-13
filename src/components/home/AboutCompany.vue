<script setup>
  import { defineComponent } from 'vue';
</script>

<template>
  <div>
    <div class="about-company">
      <img src="@/assets/img/about-img-1.svg" alt="" class="about-company-background-img about-company-first-background">
      <div class="container">
        <div class="about-company__content">
          <div class="about-company-content__left">
            <div class="about-company-content__left-photo">
              <img src="@/assets/img/logo.png" alt="logo photo" class="about-company-content__left-img">
              <br>
              Сыр самалы
            </div>
            <div class="about-company-content__left-info">
              <div class="about-company-content__left-title">О компании</div>
              <div class="about-company-content__left-descr">
                <p>ТОО «Нұр дәуір-құрылыс» – строительная компания республиканского уровня с полным циклом работ –
                  от разработки концепции застройки и строительства до сдачи объектов с последующей эксплуатацией.
                  У нас собственное дизайн-бюро, производственная база, площадью 4 га, два щебеночных карьера и один
                  песчаный, дробильно-сортировочные комплексы, строительные машины и механизмы.</p>
                <p>Мы создаём масштабные жилые, социальные и коммерческие проекты с внутренней инфраструктурой,
                  отвечающие всем потребностям современного городского жителя.</p>
              </div>
            </div>
          </div>
          <div class="about-company-content__right">
            <img src="@/assets/img/order-img-1.svg" alt="" class="about-company-content__right-background">
            <div class="about-company-content-right__statistic">
              <div class="about-company-content-right__statistic-years about-company-content-right__statistic-block">
                <div class="about-company-content-right__statistic-block-title">17</div>
                <div class="about-company-content-right__statistic-descr">лет на рынке</div>
              </div>
              <div class="about-company-content-right__statistic-houses about-company-content-right__statistic-block">
                <div class="about-company-content-right__statistic-block-title">17</div>
                <div class="about-company-content-right__statistic-descr">жилых <br> комплексов</div>
              </div>
              <div class="about-company-content-right__statistic-built about-company-content-right__statistic-block">
                <div class="about-company-content-right__statistic-block-title">700 000 м²</div>
                <div class="about-company-content-right__statistic-descr">застроено</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>