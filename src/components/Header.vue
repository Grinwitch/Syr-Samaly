<script setup>
  import { defineComponent } from 'vue';
</script>

<script>
  export default defineComponent({
    name: "Header",
    data(){
      return{
        links: {'О проекте':   {'link': "#", 'key':1},
                'Преимущества':{'link': "#", 'key':2},
                'Квартиры':    {'link': "#", 'key':3},
                'Презентация': {'link': "#", 'key':4},
                'Стройка':     {'link': "#", 'key':5},
                'О проекте':   {'link': "#", 'key':6},
                'Контакты':    {'link': "#", 'key':7}
              },
        headerActive: 'desktop',
        navHidden: true
      }
    },
    mounted(){
      addEventListener("scroll", (event) => {
        let headerEl = document.getElementById('header');
        let scrollY = window.scrollY, elemY = 0, elemHeight = 0;

        if(window.innerWidth > 600) {
          if (scrollY > 35 && window.innerWidth > 600){
            headerEl.style.background = "#fff";
            return headerEl.style.boxShadow = "2px 2px 8px rgba(0,77,60,.2)";
          }

          headerEl.style.boxShadow = "none";
          headerEl.style.background = "none";
        }

      });

      this.checkTemplateWidth();

      document.querySelector('body').style.overflow = "auto";

      addEventListener("scroll", (event) => {
        let headerMobileEl = document.getElementById('header-mobile');
        let burgerActive = document.querySelectorAll('.header-mobile__burger-line');
        let scrollY = window.scrollY, elemY = 0, elemHeight = 0;
        let burgerArr = [];
        burgerActive.forEach((el) => {
          burgerArr.push(el);
        });

        if (window.innerWidth <= 600) {
          if (scrollY > 35){
            headerMobileEl.style.background = "#fff";
            burgerArr[0].classList.add('header-mobile__burger-scrolled');
            burgerArr[1].classList.add('header-mobile__burger-scrolled');
            burgerArr[2].classList.add('header-mobile__burger-scrolled');
            return headerMobileEl.style.boxShadow = "2px 2px 8px rgba(0,77,60,.2)";
          }
          headerMobileEl.style.boxShadow = "none";
          headerMobileEl.style.background = "none";
          burgerArr[0].classList.remove('header-mobile__burger-scrolled');
          burgerArr[1].classList.remove('header-mobile__burger-scrolled');
          burgerArr[2].classList.remove('header-mobile__burger-scrolled');
        }
      })

    },
    methods: {
      checkTemplateWidth: function() {
        this.headerActive = 'desktop';
        if(window.innerWidth >= 991) {
          this.headerActive = 'desktop'
        }
        else {
          this.headerActive = 'mobile'
        }
      },
      openModalNav: function() {
        this.navHidden = !this.navHidden;
        let burgerButton = document.querySelector('.header-mobile-content__left-burger');
        burgerButton.classList.toggle('burger-active');
        let bodyStyles = document.querySelector('body');
        if (bodyStyles.style.overflow === "hidden") {
          bodyStyles.style.overflow = "auto";
        }
        else if (bodyStyles.style.overflow === "auto") {
          bodyStyles.style.overflow = "hidden";
        }
      }
    }
  })
</script>

<template>
  <header v-if="headerActive === 'desktop'" class="header" id="header">
    <div class="header__container">

      <div class="header__left-block">
        <div class="header__img-block">
          <img src="@/assets/img/logo.png">
        </div>

        <nav class="header__nav-block">
          <div class="header__nav-container">
            <ul class="header__nav-list-block">

              <li class="header__nav-list-item" v-for="key, link in links" v-bind:key="key">
                <a class="header__nav-list-item-link" href="#">{{link}}</a>
              </li>

            </ul>
          </div>
        </nav>
      </div>

      <div class="header__right-block">
        <div class="header__lang-block">RU</div>
        <div class="header__number-block">
          <a href="tel:+77777777777" data-role="tel"><i class="icon icon-phone"></i>+7 777 777 77 77</a>
        </div>
        <button type="button" class="header__feedback-button-block">
          Отправить заявку
        </button>
      </div>


    </div>
  </header>

  <header v-else-if = "headerActive === 'mobile'" class="header-mobile" id="header-mobile">
    <div class="container">
      <div class="header-mobile__content">
        <div class="header-mobile-content__left">
          <div class="header-mobile-content__left-photo">
            <img src="@/assets/img/logo.png" alt="logo" class="header-mobile-content__left-img">
          </div>
          <div @click="openModalNav()" class="header-mobile-content__left-burger">
            <span class="header-mobile__burger-line"></span>
            <span class="header-mobile__burger-line"></span>
            <span class="header-mobile__burger-line"></span>
          </div>
        </div>
        <Transition name="nav">
          <div v-if="!navHidden" class="header-mobile-content__right">
            <div class="header-mobile-content__right-block">
              <img src="@/assets/img/logo.png" alt="logo" class="header-mobile-content__right-block-logo">
              <h4 class="header-mobile-content__right-block-title">Сыр Самалы</h4>
              <nav class="header-mobile-content__right-menu">
                <ul class="header-mobile-content__right-list">
                  <li class="header-mobile-content__right-point" v-for="key, link in links" v-bind:key="key">
                    <a class="header-mobile-content__right-link" href="#">{{link}}</a>
                  </li>
                </ul>
              </nav>
              <div class="header-mobile-content__right-block-lang">
                <div class="header-mobile-content__right-block-lang-link">RU</div>
                <div class="header-mobile-content__right-block-lang-link">KZ</div>
              </div>
              <div class="header-mobile-content__right-block-phone">
                <a href="tel:++77777777777" class="header-mobile-content__right-block-phone-link">+7 777 777 77 77</a>
              </div>
              <button class="header-mobile-content__right-block-button header__feedback-button-block">Отправить заявку</button>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </header>

  <Transition name="overlay">
    <div v-if="!navHidden" class="header-overlay"></div>
  </Transition>
</template>

<style media="screen">

</style>
