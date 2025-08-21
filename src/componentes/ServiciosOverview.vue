<!-- src/componentes/ServiciosOverview.vue -->
<template>
  <section id="servicios-overview" class="py-20 text-center">
    <h2 class="section-heading text-gradient">{{ translations.services_heading }}</h2>
    <p class="max-w-3xl mx-auto mt-4">{{ translations.services_description }}</p>
    <p class="mt-8 font-semibold">{{ translations.select_service_prompt }}</p>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>