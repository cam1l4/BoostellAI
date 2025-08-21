<template>
  <section id="top" class="hero-section relative flex flex-col justify-center items-center text-center text-white">
    <video autoplay muted loop playsinline class="hero-video">
      <source src="/Principal.mp4" type="video/mp4" />
    </video>
    <div class="relative z-10 max-w-3xl px-4">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
        {{ translations.hero_headline_part1 }}
        <span class="text-gradient"> {{ translations.hero_headline_part2 }}</span>
      </h1>
      <p class="text-lg md:text-xl mb-8">
        {{ translations.hero_description }}
      </p>
      <a href="#contacto" class="btn-primary">
        {{ translations.hero_cta }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>





