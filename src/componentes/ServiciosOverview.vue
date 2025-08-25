<!-- src/componentes/ServiciosOverview.vue (Diseño 2x2) -->
<template>
  <section id="gestion-redes" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4">
      
      <!-- Título principal de la sección -->
      <h2 class="section-heading text-gradient leading-normal">{{ translations.services_heading }}</h2>
      
      <!-- Subtítulo y Descripción -->
      <h3 class="text-3xl font-bold mt-2 text-gray-800">{{ translations.service1_title }}</h3>
      <p class="max-w-3xl mx-auto mt-4 text-gray-600">{{ translations.service1_description }}</p>

      <!-- === MODIFICACIÓN CLAVE: Se cambia la clase de la cuadrícula === -->
      <!-- 'lg:grid-cols-4' se cambia por 'lg:grid-cols-2' -->
      <!-- 'max-w-5xl mx-auto' centra la cuadrícula cuando hay espacio -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 text-left max-w-5xl mx-auto">
        
        <!-- Característica 1: Landing Page -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-cyan-100 text-cyan-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ translations.feature1_title }}</h4>
          <p class="text-gray-600">{{ translations.feature1_desc }}</p>
        </div>

        <!-- Característica 2: Embudo -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L16 11.414V17l-4 4v-9.586L3.293 6.707A1 1 0 013 6V4z" /></svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ translations.feature2_title }}</h4>
          <p class="text-gray-600">{{ translations.feature2_desc }}</p>
        </div>

        <!-- Característica 3: Copywriting -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-yellow-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ translations.feature3_title }}</h4>
          <p class="text-gray-600">{{ translations.feature3_desc }}</p>
        </div>

        <!-- Característica 4: Integración -->
        <div class="bg-white p-6 rounded-lg shadow-lg">
          <div class="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 text-red-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
          </div>
          <h4 class="text-xl font-semibold text-gray-900 mb-2">{{ translations.feature4_title }}</h4>
          <p class="text-gray-600">{{ translations.feature4_desc }}</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>