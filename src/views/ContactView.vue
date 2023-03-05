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
      <section>
        <div class="pt-[15%]">
          <img src="../img/gym-saloon.webp" width="300" alt="gym-saloon" />
        </div>
      </section>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
