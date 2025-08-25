<template>
  <section id="contacto" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4">
      
      <!-- === MODIFICACIÓN: Se añade 'leading-normal' directamente aquí === -->
      <h2 class="section-heading text-gradient leading-normal">
        {{ translations.cta_heading }}
      </h2>
      
      <p class="mt-4 max-w-2xl mx-auto">{{ translations.cta_description }}</p>
      
      <div class="container-box max-w-lg mx-auto mt-10">
        <h3 class="text-2xl font-bold mb-4">{{ translations.contact_title }}</h3>
        <p class="mb-6">{{ translations.contact_text }}</p>
        
        <!-- Nota: He corregido un pequeño error tipográfico en 'target="_blank"' -->
        <a href="mailto:boostellAI@outlook.com" target="_blank" class="btn-primary">
          {{ translations.contact_button }}
        </a>
        
        <p class="mt-6 text-sm text-gray-500">{{ translations.contact_social }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>

