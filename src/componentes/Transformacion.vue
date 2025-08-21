<template>
  <section id="transformacion" class="transformation-section">
    <video class="transformation-video" autoplay loop muted playsinline>
      <source src="/transformacion.mp4" type="video/mp4">
    </video>
    <div class="transformation-content text-center">
      <h2 class="section-heading">{{ translations.transformation_heading }}</h2>
      <p class="max-w-3xl mx-auto mt-4">{{ translations.transformation_description }}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div class="container-box"><h3>{{ translations.benefit1_title }}</h3><p>{{ translations.benefit1_description }}</p></div>
        <div class="container-box"><h3>{{ translations.benefit2_title }}</h3><p>{{ translations.benefit2_description }}</p></div>
        <div class="container-box"><h3>{{ translations.benefit3_title }}</h3><p>{{ translations.benefit3_description }}</p></div>
        <div class="container-box"><h3>{{ translations.benefit4_title }}</h3><p>{{ translations.benefit4_description }}</p></div>
        <div class="container-box"><h3>{{ translations.benefit5_title }}</h3><p>{{ translations.benefit5_description }}</p></div>
        <div class="container-box"><h3>{{ translations.benefit6_title }}</h3><p>{{ translations.benefit6_description }}</p></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>
