<template>
  <header class="main-header">
    <a href="#top" class="logo-container">
      <img src="/logo.png" alt="BoostellAI Logo" class="w-12 h-12 object-contain" />
      <span class="text-xl font-bold text-white font-orbitron ml-2">
        Boostell<span class="text-yellow-300">AI</span>
      </span>
    </a>
    <nav>
      <div class="dropdown" @mouseenter="toggleDropdown = true" @mouseleave="toggleDropdown = false">
        <a href="#servicios-overview">{{ translations.nav_services }}</a>
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <div v-if="toggleDropdown" class="dropdown-content">
            <a href="#gestion-redes">{{ translations.service1_title_short }}</a>
          </div>
        </transition>
      </div>
      <a href="#transformacion">{{ translations.nav_transformation }}</a>
      <a href="#testimonios">{{ translations.nav_testimonials }}</a>
      <a href="#nosotros">{{ translations.nav_about_us }}</a>
      <a href="#contacto">{{ translations.nav_contact }}</a>
      <a href="#servicios-overview">{{ translations.nav_services }}</a>

    </nav>
    <div class="language-switcher">
      <select v-model="currentLanguage">
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="hu">Magyar</option>
      </select>
    </div>
  </header>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
export default defineComponent({
  name: 'Header',
  setup() {
    const translations = inject('translations');
    const currentLanguage = inject('currentLanguage');
    const toggleDropdown = ref(false);
    return { translations, currentLanguage, toggleDropdown };
  },
});
</script>







