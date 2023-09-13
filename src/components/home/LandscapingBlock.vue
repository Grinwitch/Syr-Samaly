<script setup>
  import { defineComponent } from "vue";
</script>

<template>
  <div>
    <div class="landscaping">
      <div class="container">
        <div class="landscaping__content">
          <h2 class="section__title">Благоустройство</h2>
          <h3 class="landscaping__suptitle">Место спокойствия</h3>
          <p class="landscaping__content-descr">
            Внутренняя территория комплекса разделена на функциональные
            пространства, рассчитанные на каждого жителя: детские площадки,
            спортивные зоны, места для отдыха и прогулок, газоны и аллеи.
          </p>
          <div class="landscaping-content__items">
            <div class="landscaping-content__item">
              <img src="@/assets/img/Rectangle_253.jpg" alt="landscaping photo" class="landscaping-content__item-img">
              <h4 class="landscaping-content__item-title">Счастливые дети</h4>
              <p class="landscaping-content__item-text">
                Благодаря грамотному зонированию, дети готовы больше времени проводить на улице,
                общаться и изучать окружающий мир. Здесь каждый ребёнок найдёт развлечение по душе
              </p>
            </div>
            <div class="landscaping-content__item">
              <img src="@/assets/img/Rectangle_252.jpg" alt="landscaping photo" class="landscaping-content__item-img">
              <h4 class="landscaping-content__item-title">Отдых в спокойствии</h4>
              <p class="landscaping-content__item-text">
                Открытые пространства, свежий воздух и тень деревьев - лучшее место для
                качественного отдыха и общения с близкими. Чтобы оказаться на набережной
                реки понадобится всего несколько минут, а ощущение покоя и умиротворения
                останется надолго
              </p>
            </div>
            <div class="landscaping-content__item">
              <img src="@/assets/img/Rectangle_255.jpg" alt="landscaping photo" class="landscaping-content__item-img">
              <h4 class="landscaping-content__item-title">Паркинг</h4>
              <p class="landscaping-content__item-text">
                Подземный паркинг - это дополнительный комфорт и безопасность вашего автомобиля.
                Отсюда на лифте можно подняться на нужный этаж, что очень удобно в зимние
                холодные дни.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>