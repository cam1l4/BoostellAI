<!-- src/componentes/Testimonios.vue (CORREGIDO Y SIMPLIFICADO) -->
<template>
  <section id="testimonios" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4 overflow-hidden">
      <h2 class="section-heading text-gradient leading-normal">{{ translations.testimonials_title }}</h2>
      
      <div class="testimonials-carousel-container mt-12">
        <div class="testimonials-carousel">
          
          <!-- Bucle Original de Testimonios -->
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card">
            
            <!-- === MODIFICACIÓN: TODO DENTRO DE UN SOLO DIV === -->
            <div>
              <!-- La cita -->
              <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
              
              <!-- El autor, con un margen superior para separarlo de la cita -->
              <!-- Puedes ajustar 'mt-4' a 'mt-2' (menos espacio) o 'mt-6' (más espacio) -->
              <div class="mt-4">
                <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.position }}, {{ testimonial.company }}</p>
              </div>
            </div>
            <!-- ============================================= -->

          </div>

          <!-- Bucle Duplicado (con la misma estructura) -->
          <div v-for="(testimonial, index) in testimonials" :key="`clone-${index}`" class="testimonial-card" aria-hidden="true">
            <div>
              <p class="text-gray-600 italic">"{{ testimonial.text }}"</p>
              <div class="mt-4">
                <p class="font-bold text-gray-800">{{ testimonial.name }}</p>
                <p class="text-sm text-gray-500">{{ testimonial.position }}, {{ testimonial.company }}</p>
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
  { text: translations.value.testimonial1_text, name: translations.value.testimonial1_name, position: translations.value.testimonial1_position, company: translations.value.testimonial1_company },
  { text: translations.value.testimonial2_text, name: translations.value.testimonial2_name, position: translations.value.testimonial2_position, company: translations.value.testimonial2_company },
  { text: translations.value.testimonial3_text, name: translations.value.testimonial3_name, position: translations.value.testimonial3_position, company: translations.value.testimonial3_company },
]);
</script>