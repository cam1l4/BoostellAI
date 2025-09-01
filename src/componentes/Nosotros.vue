<template>
  <section id="nosotros" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4">
      <!-- Título principal -->
      <h2 class="text-4xl font-extrabold mb-12 text-gradient leading-normal">
        {{ translations.problem_solution_heading }}
      </h2>

      <!-- Contenedor de comparación -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        <!-- Lado negativo -->
        <div class="bg-white shadow-lg rounded-xl p-8 border-t-4 border-red-500 transform hover:scale-105 transition duration-300">
          <div class="flex items-center justify-center mb-6">
            <span class="text-5xl">⚠️</span>
          </div>
          <h3 class="text-2xl font-bold text-red-600 mb-6">
            {{ translations.problem_title }}
          </h3>
          <ul class="text-left space-y-4 text-gray-700">
            <li v-for="(item, index) in translations.problem_list" :key="index" class="flex items-start">
              <span class="text-red-500 text-xl mr-3">✘</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Lado positivo -->
        <div class="bg-white shadow-lg rounded-xl p-8 border-t-4 border-green-500 transform hover:scale-105 transition duration-300">
          <div class="flex items-center justify-center mb-6">
            <span class="text-5xl">🚀</span>
          </div>
          <h3 class="text-2xl font-bold text-green-600 mb-6">
            {{ translations.solution_title }}
          </h3>
          <ul class="text-left space-y-4 text-gray-700">
            <li v-for="(item, index) in translations.solution_list" :key="index" class="flex items-start">
              <span class="text-green-500 text-xl mr-3">✔</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from 'vue'
const translations = inject('translations')
</script>

