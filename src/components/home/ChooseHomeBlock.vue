<script setup>
    import { defineComponent } from 'vue';
</script>

<script>
  export default defineComponent({
    data() {
      return {
        currentHomeState: 'homeOne'
      }
    },
    mounted() {
      const firstHome = document.getElementById("first-home");
      const secondHome = document.getElementById("second-home");
      const thirdHome = document.getElementById("third-home");
      const fourthHome = document.getElementById("fourth-home");
      const fifthHome = document.getElementById("fifth-home");
      const sixthHome = document.getElementById("sixth-home");
      const seventhHome = document.getElementById("seventh-home");
      if (firstHome.getContext) {
        const ctx = firstHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";
        ctx.moveTo(0, 18);
        ctx.lineTo(27, 120);

        ctx.lineTo(215, 149);

        ctx.lineTo(290, 124);

        ctx.lineTo(290, 20)

        ctx.lineTo(95, 0)

        ctx.lineTo(0, 18);
        ctx.fill();
      }

      if(secondHome.getContext) {
        const ctx = secondHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";

        ctx.moveTo(159, 2);
        ctx.lineTo(5, 33);

        ctx.lineTo(102, 42);

        ctx.lineTo(102, 147);

        ctx.lineTo(146, 150);

        ctx.lineTo(270, 110);

        ctx.lineTo(290, 12);

        ctx.lineTo(159, 2);
        ctx.fill();
      }

      if(thirdHome.getContext) {
        const ctx = thirdHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";

        ctx.moveTo(144, 0);
        ctx.lineTo(13, 27);

        ctx.lineTo(13, 33);

        ctx.lineTo(130, 43);

        ctx.lineTo(105, 145);

        ctx.lineTo(139, 150)

        ctx.lineTo(250, 115);

        ctx.lineTo(288, 7);

        ctx.lineTo(144, 0);

        ctx.fill();
      }

      if(fourthHome.getContext) {
        const ctx = fourthHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";
        ctx.moveTo(75, 3);

        ctx.lineTo(10, 44);

        ctx.lineTo(6, 148);

        ctx.lineTo(125, 67);

        ctx.lineTo(237, 88);

        ctx.lineTo(295, 45);

        ctx.lineTo(75, 3)

        ctx.fill();
      }

      if(fifthHome.getContext) {
        const ctx = fifthHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";
        ctx.moveTo(115, 0);

        ctx.lineTo(0, 17);

        ctx.lineTo(60, 127);

        ctx.lineTo(230, 150);

        ctx.lineTo(285, 135);

        ctx.lineTo(255, 45);

        ctx.lineTo(300, 35);

        ctx.lineTo(300, 18);

        ctx.lineTo(115, 0);

        ctx.fill();
      }

      if(sixthHome.getContext) {
        const ctx = sixthHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "#f50";
        ctx.fillStyle = "#ffffff77";
        ctx.moveTo(190, 0);

        ctx.lineTo(5, 55);

        ctx.lineTo(115, 85);

        ctx.lineTo(215, 105);

        ctx.lineTo(215, 150);

        ctx.lineTo(290, 120);

        ctx.lineTo(300, 125);

        ctx.lineTo(300, 17);

        ctx.lineTo(190, 0)

        ctx.fill();
      }


      if(seventhHome.getContext) {
        const ctx = seventhHome.getContext("2d");

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.fillStyle = "#ffffff77";
        ctx.moveTo(180, 0);

        ctx.lineTo(0, 32);

        ctx.lineTo(132, 48);

        ctx.lineTo(132, 135);

        ctx.lineTo(260, 150);

        ctx.lineTo(300, 140);

        ctx.lineTo(295, 10);

        ctx.lineTo(180, 0);

        ctx.fill();
      }

    },

    methods: {

    }
  })
</script>

<template>
    <div>
        <div class="choose-plan">
            <div class="container">
                <div class="choose-plan__content">
                    <div class="choose-plan-content__left">
                        <div class="choose-plan-content__left-photo">
                            <img src="@/assets/img/render-4.jpg" alt="" class="choose-plan-content__left-img">
                          <canvas @click="currentHomeState = 'homeOne'" class="choose-plan__figure" id="first-home"></canvas>
                          <canvas @click="currentHomeState = 'homeTwo'" class="choose-plan__figure" id="second-home"></canvas>
                          <canvas @click="currentHomeState = 'homeThree'" class="choose-plan__figure" id="third-home"></canvas>
                          <canvas @click="currentHomeState = 'homeFour'" class="choose-plan__figure" id="fourth-home"></canvas>
                          <canvas @click="currentHomeState = 'homeFive'" class="choose-plan__figure" id="fifth-home"></canvas>
                          <canvas @click="currentHomeState = 'homeSix'" class="choose-plan__figure" id="sixth-home"></canvas>
                          <canvas @click="currentHomeState = 'homeSeven'" class="choose-plan__figure" id="seventh-home"></canvas>
                        </div>
                    </div>
                    <div class="choose-plan-content__right">
                        <div v-if="currentHomeState === 'homeOne'" class="choose-plan-content__right-info">
                            <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                                <div class="choose-plan-content__right-info-title">№ дома</div>
                                <h4 class="choose-plan-content__right-info-count">1</h4>
                            </div>
                            <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                                <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                                <h4 class="choose-plan-content__right-info-count">24</h4>
                            </div>
                            <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                                <div class="choose-plan-content__right-info-title">Общая площадь</div>
                                <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                            </div>
                            <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                                <div class="choose-plan-content__right-info-title">Этажность</div>
                                <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                            </div>
                        </div>
                      <div v-else-if="currentHomeState === 'homeTwo'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">2</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>
                      <div v-else-if="currentHomeState === 'homeThree'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">3</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>
                      <div v-else-if="currentHomeState === 'homeFour'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">4</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>
                      <div v-else-if="currentHomeState === 'homeFive'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">5</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>
                      <div v-else-if="currentHomeState === 'homeSix'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">6</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>
                      <div v-else-if="currentHomeState === 'homeSeven'" class="choose-plan-content__right-info">
                        <div class="choose-plan-content__right-info-number choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">№ дома</div>
                          <h4 class="choose-plan-content__right-info-count">7</h4>
                        </div>
                        <div class="choose-plan-content__right-info-flat choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Кол-во квартир</div>
                          <h4 class="choose-plan-content__right-info-count">24</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Общая площадь</div>
                          <h4 class="choose-plan-content__right-info-count">450 кв. м.</h4>
                        </div>
                        <div class="choose-plan-content__right-info-area choose-plan-content__right-info-block">
                          <div class="choose-plan-content__right-info-title">Этажность</div>
                          <h4 class="choose-plan-content__right-info-count">9 этажей.</h4>
                        </div>
                      </div>

                    </div>
                </div>
            </div>
            <img src="@/assets/img/order-img-3.svg" alt="" class="choose-plan__background-img">
        </div>
    </div>
</template>