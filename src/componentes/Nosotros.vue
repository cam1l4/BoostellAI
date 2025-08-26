<template>
  <section id="nosotros" class="py-20 bg-gray-50">
    <!-- 👇 Igualamos a la sección transformación -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 class="section-heading text-gradient leading-normal">
        {{ translations.problem_solution_heading }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Problema -->
        <div class="p-8 rounded-xl bg-red-50 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
          <h3 class="text-2xl font-bold text-red-600 mb-6 flex items-center">
            <span class="text-3xl mr-2">⚠️</span>
            {{ translations.problem_title }}
          </h3>
          <ul class="space-y-3 text-gray-700">
            <li v-for="(item, index) in translations.problem_list" :key="index" class="flex items-start">
              <span class="text-red-500 mr-2">❌</span> {{ item }}
            </li>
          </ul>
        </div>

        <!-- Solución -->
        <div class="p-8 rounded-xl bg-green-50 shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
          <h3 class="text-2xl font-bold text-green-600 mb-6 flex items-center">
            <span class="text-3xl mr-2">🚀</span>
            {{ translations.solution_title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ translations.solution_description }}</p>
          <ul class="space-y-3 text-gray-700">
            <li v-for="(item, index) in translations.solution_list" :key="index" class="flex items-start">
              <span class="text-green-500 mr-2">✅</span> {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>


