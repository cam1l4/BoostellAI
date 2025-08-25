<template>
  <section 
    id="top" 
    class="hero-section relative flex flex-col justify-center items-center text-center text-white min-h-screen overflow-hidden"
  >
    <!-- Video de fondo con overlay -->
    <video autoplay muted loop playsinline class="hero-video absolute inset-0 w-full h-full object-cover">
      <source src="/Principal.mp4" type="video/mp4" />
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

    <!-- Contenido -->
    <div class="relative z-10 max-w-4xl px-6">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
        Haz crecer tu marca con 
        <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
          BoostellAI
        </span>
        y el poder de la 
        <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Inteligencia Artificial
        </span>
      </h1>
      
      <p class="text-lg md:text-xl mb-10 text-gray-200 drop-shadow-md">
        Automatiza tu contenido, conecta con tu audiencia y multiplica tus resultados en redes sociales gracias a nuestras soluciones de IA diseñadas para tu negocio.
      </p>

      <a 
        href="#contacto" 
        class="inline-block px-8 py-4 rounded-full text-lg font-semibold text-white 
               bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg hover:scale-105 
               transform transition duration-300 ease-in-out"
      >
        Impulsa tu negocio con BoostellAI
      </a>
    </div>
  </section>
</template>


<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>





