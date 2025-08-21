<template>
  <footer class="bg-gray-900 text-white text-center p-6">
    <p>&copy; {{ translations.footer_copyright }}</p>
    <p class="text-sm mt-1 text-gray-400">{{ translations.footer_tagline }}</p>
  </footer>
</template>

<script setup>
import { inject } from 'vue';
const translations = inject('translations');
</script>
