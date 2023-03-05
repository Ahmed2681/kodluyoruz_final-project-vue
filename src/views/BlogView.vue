<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main class="w-full bg-cyan-50">
        <div class="w-32 h-32 bg-black"></div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
