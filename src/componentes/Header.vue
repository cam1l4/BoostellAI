<template>
  <section id="testimonios" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4 overflow-hidden">
      <h2 class="section-heading text-gradient leading-normal">
        {{ translations.testimonials_title }}
      </h2>

      <!-- Contenedor con overflow oculto -->
      <div class="testimonials-carousel-container mt-12">
        <!-- Carrusel que se mueve en horizontal -->
        <div class="testimonials-carousel">
          <!-- Primer bucle -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
          >
            <div>
              <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
              <div class="mt-4">
                <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">
                  {{ testimonial.position }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
          </div>

          <!-- Segundo bucle (clonado para loop infinito) -->
          <div
            v-for="(testimonial, index) in testimonials"
            :key="`clone-${index}`"
            class="testimonial-card"
            aria-hidden="true"
          >
            <div>
              <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
              <div class="mt-4">
                <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">
                  {{ testimonial.position }}, {{ testimonial.company }}
                </p>
              </div>
            </div>
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
  {
    text: translations.value.testimonial1_text,
    name: translations.value.testimonial1_name,
    position: translations.value.testimonial1_position,
    company: translations.value.testimonial1_company,
  },
  {
    text: translations.value.testimonial2_text,
    name: translations.value.testimonial2_name,
    position: translations.value.testimonial2_position,
    company: translations.value.testimonial2_company,
  },
  {
    text: translations.value.testimonial3_text,
    name: translations.value.testimonial3_name,
    position: translations.value.testimonial3_position,
    company: translations.value.testimonial3_company,
  },
]);
</script>
