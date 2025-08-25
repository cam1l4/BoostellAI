<template>
  <section id="gestion-redes" class="py-20 bg-gray-50">
    <div class="container-box max-w-4xl mx-auto px-4">
      
      <!-- Título de la sección -->
      <!-- ¡OJO! Asegúrate de que la clave 'service1_title' exista en tus archivos JSON -->
      <h2 class="text-3xl font-bold text-center mb-6 text-gray-800">
        {{ translations.service1_title || 'Landing & Embudo Inteligente' }}
      </h2>

      <!-- Descripción -->
      <p class="text-center text-gray-600 mb-8">
        {{ translations.service1_description_expanded || 'Descripción del servicio no encontrada.' }}
      </p>

      <!-- Lista de características -->
      <ul class="list-disc list-inside space-y-3 text-gray-700 mx-auto max-w-2xl">
        <li>{{ translations.service1_point1_expanded }}</li>
        <li>{{ translations.service1_point2_expanded }}</li>
        <li>{{ translations.service1_point3_expanded }}</li>
        <li>{{ translations.service1_point4_expanded }}</li>
      </ul>

    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';

// Inyectamos el objeto de traducciones reactivo desde App.vue
const translations = inject('translations');
</script>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>
