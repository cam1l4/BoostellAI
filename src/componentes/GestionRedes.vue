<template>
  <section id="gestion-redes" class="py-20">
    <div class="container-box max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-6">{{ translations.service1_title }}</h2>
      <p class="text-center text-gray-600 mb-8">{{ translations.service1_description_expanded }}</p>
      <ul class="list-disc list-inside space-y-3">
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
const translations = inject('translations');
</script>
