<script setup>
  import { defineComponent } from "vue";
  import BaseBlock from "@/components/home/BaseBlock.vue";
  import AcqMethods from "@/components/home/AcqMethods.vue";
  import ForBusiness from "@/components/home/ForBusiness.vue";
  import SDetails from "@/components/home/SDetails.vue";
  import BackCall from "@/components/home/BackCall.vue";
  import GallerySection from "@/components/home/GallerySection.vue";
  import ConstructionProgress from "@/components/home/ConstructionProgress.vue";
  import Advantages from "@/components/home/Advantages.vue";
  import AboutCompany from "@/components/home/AboutCompany.vue";
  import LocationBlock from "@/components/home/LocationBlock.vue";
  import LandscapingBlock from "@/components/home/LandscapingBlock.vue";
  import AppartmentBlock from "@/components/home/AppartmentBlock.vue";
  import HallsBlock from '@/components/home/HallsBlock.vue';
  import ChooseHomeBlock from "../components/home/ChooseHomeBlock.vue";
  // import MapSection from "@/components/home/MapSection.vue";
</script>

<script type="text/javascript">
  export default defineComponent({
    name: "HomeView",
  })
</script>

<template>
  <div class="home">
    <!-- First Base Block -->
    <BaseBlock/>
    <!-- Second Payment Method Block -->
    <AcqMethods/>
    <!-- Location Block -->
    <LocationBlock/>
    <!-- Third Commerce Block -->
    <ForBusiness/>
    <!-- Fourth Project About Block -->
    <SDetails/>
    <!-- Back call block -->
    <BackCall/>
    <!-- Appartments Block -->
    <AppartmentBlock/>
    <!-- Other Blocks -->
    <!-- About Company Block -->
    <AboutCompany/>
    <!-- Progress Block -->
    <ConstructionProgress/>
    <!--  Halls Block  -->
    <HallsBlock/>
    <!-- Choose Home Block -->
    <ChooseHomeBlock/>
    <!--  Landscaping Block  -->
    <LandscapingBlock/>
    <!-- Advantages Block -->
    <Advantages/>
    <!-- Gallery Block -->
    <GallerySection/>
  </div>
</template>

<style media="screen">
  .home{

  }
</style>
