<script>
import { defineComponent } from "vue";

</script>

<template>
  <div>
    <footer class="footer">
      <img src="@/assets/img/order-img-3.svg" alt="" class="footer__content-background-img footer-first-background-img">
      <div class="container">
        <div class="footer__content">
          <div class="footer-content__left footer-content__block">
            <div class="footer-content__left-map">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6531652c1851bcb3470ada438f705d7b03ba25e9168d9e8580d2224cb3382d70&amp;source=constructor" width="100%" height="500" frameborder="0"></iframe>
            </div>
          </div>
          <div class="footer-content__right footer-content__block">
            <h3 class="footer-content__right-title">Контакты</h3>
            <a href="tel:+77777777777" class="footer-content__right-phone">
              <img src="@/assets/img/viber.png" alt="phone icon" class="footer-content__right-phone-icon">
              +7 (777) 777-77-77
            </a>
            <div class="footer-content__right-address">
              <img src="@/assets/img/pin.png" alt="address icon" class="footer-content__right-address-icon">
              Адрес: Республика Казахстан, г. Кызылорда, ул. Муратбекова, 2Е
            </div>
            <ul class="footer-content__right-socials">
              <li class="footer-content__right-socials-point">
                <a href="#" class="footer-content__right-socials-link">
                  <img src="@/assets/img/instagram.png" alt="social icon" class="footer-content__right-socials-icon">
                </a>
              </li>
              <li class="footer-content__right-socials-point">
                <a href="#" class="footer-content__right-socials-link">
                  <img src="@/assets/img/facebook.png" alt="social icon" class="footer-content__right-socials-icon">
                </a>
              </li>
            </ul>
            <div class="footer-content__right-copyright">© Syr Samaly 2023. Все права защищены</div>
            <div class="footer-content__right-descr">Вся информация на сайте предоставлена с целью изучения спроса потенциальных покупателей и не является публичной офертой. Договоры купли-продажи будут заключаться после ввода объекта в эксплуатацию.</div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
