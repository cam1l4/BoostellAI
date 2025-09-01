<!-- src/componentes/Hero.vue -->
<template>
  <section id="top" class="hero-section relative flex flex-col justify-center items-center text-center text-white min-h-screen overflow-hidden"
  >
    <!-- Video de fondo con overlay -->
    <video autoplay muted loop playsinline class="hero-video absolute inset-0 w-full h-full object-cover">
      <source src="/Principal.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

    <!-- Contenido -->
    <div class="relative z-10 max-w-4xl px-6">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
        {{ translations.hero_headline_part1 }}
        <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          {{ translations.hero_headline_part2 }}
        </span>
      </h1>
      
      <p class="text-lg md:text-xl mb-10 text-gray-200 drop-shadow-md">
        {{ translations.hero_description }}
      </p>

      <a 
      href="https://wa.me/+36305936472?text=Hi%2C%20I%20am%20interested%20in%20your%20AI%20services."
      target="_blank" 
      class="btn-primary"
    >
        {{ translations.hero_cta }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>





