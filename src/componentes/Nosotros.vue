<template>
  <section id="nosotros" class="py-20 bg-gray-50">
    <div class="container mx-auto text-center px-4">
      <h2 class="section-heading text-gradient">{{ translations.problem_solution_heading }}</h2>
      <div class="flex flex-wrap justify-center mt-12 gap-8">
        <div class="container-box w-full lg:w-2/5">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ translations.problem_title }}</h3>
          <ul class="text-left list-disc list-inside space-y-3 text-gray-600">
            <li v-for="(item, index) in translations.problem_list" :key="index">{{ item }}</li>
          </ul>
        </div>
        <div class="container-box w-full lg:w-2/5">
          <h3 class="text-2xl font-bold mb-4 text-gray-800">{{ translations.solution_title }}</h3>
          <p class="max-w-3xl mx-auto mt-4">{{ translations.solution_description }}</p>
          <ul class="text-left list-disc list-inside space-y-3 text-gray-600">
            <li v-for="(item, index) in translations.solution_list" :key="index">{{ item }}</li>
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


