<template>
  <section id="testimonios" class="py-20 bg-gray-50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="section-heading text-gradient leading-normal">
        {{ translations.testimonials_title }}
      </h2>

    <div class="testimonials-carousel-container mt-12 overflow-hidden">
        <div class="testimonials-carousel flex space-x-6 justify-center">
          <!-- Tarjetas principales -->
          <div
            v-for="testimonial in testimonials"
            :key="testimonial"
            class="testimonial-card bg-white shadow-lg rounded-xl p-6 flex items-center justify-center text-center max-w-md w-80"
          >
            <p class="text-gray-600 italic">"{{ testimonial }}"</p>
          </div>

          <!-- Duplicado para efecto infinito -->
          <div
            v-for="testimonial in testimonials"
            :key="testimonial + '-clone'"
            class="testimonial-card bg-white shadow-lg rounded-xl p-6 flex items-center justify-center text-center max-w-md w-80"
            aria-hidden="true"
          >
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