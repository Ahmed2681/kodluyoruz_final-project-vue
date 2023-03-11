<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main class="w-full bg-cyan-50 pt-[5%] pb-[5%]">
      <section class="flex flex-row items-center justify-center text-center">
        <p class="text-[60px] font-[550]">&lt;</p>
        <p class="absolute text-[60px] font-extralight italic antialiased mb-[4.9%]">
          Naim Süleymanoğlu
        </p>
        <hr class="mt-[0.6%] min-w-[40%] rounded-lg border-[6px] border-gray-500" />
        <p class="text-[60px] font-[550]">></p>
      </section>

      <div></div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
