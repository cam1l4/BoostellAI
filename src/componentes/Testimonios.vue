<template>
  <section id="testimonios" class="py-20">
    <div class="container mx-auto text-center px-4">
      <h2 class="section-heading text-gradient">{{ translations.testimonials_title }}</h2>
      <div class="testimonials-carousel-container mt-12">
        <div class="testimonials-carousel">
          <div v-for="testimonial in testimonials" :key="testimonial" class="testimonial-card">
            <p class="text-gray-600 italic">"{{ testimonial }}"</p>
          </div>
          <div v-for="testimonial in testimonials" :key="testimonial + '-clone'" class="testimonial-card" aria-hidden="true">
            <p class="text-gray-600 italic">"{{ testimonial }}"</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, computed } from 'vue';
const translations = inject('translations');

const testimonials = computed(() => [
  translations.value.testimonial_1,
  translations.value.testimonial_2,
  translations.value.testimonial_3,
]);
</script>