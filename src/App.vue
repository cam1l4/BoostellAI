<template>
  <div id="app" class="antialiased">
    <Header />
    <main>
      <Hero />
      <Nosotros />
      <Transformacion />
      <Testimonios />
      <Contacto />
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineComponent, ref, computed, provide } from 'vue';
import Header from './componentes/Header.vue';
import Hero from './componentes/Hero.vue';
import Nosotros from './componentes/Nosotros.vue';
import Transformacion from './componentes/Transformacion.vue';
import Testimonios from './componentes/Testimonios.vue';
import Contacto from './componentes/Contacto.vue';
import Footer from './componentes/Footer.vue';
import esTranslations from './es.json';
import enTranslations from './en.json';
import huTranslations from './hu.json';

export default defineComponent({
  name: 'App',
  components: { Header, Hero, Nosotros, Transformacion, Testimonios, Contacto, Footer },
  setup() {
    const allTranslations = ref({
      es: esTranslations,
      en: enTranslations,
      hu: huTranslations,
    });
    const currentLanguage = ref('es');
    const translations = computed(() => {
      return allTranslations.value[currentLanguage.value] || allTranslations.value['es'];
    });
    provide('translations', translations);
    provide('currentLanguage', currentLanguage);
    return {};
  },
});
</script>
