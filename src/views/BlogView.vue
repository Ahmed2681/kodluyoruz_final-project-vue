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
        <p class="text-[60px] font-[550] text-gray-500">- &nbsp;</p>
        <p class="text-[60px] font-extralight italic text-gray-500 antialiased">Naim Süleymanoğlu</p>
        <p class="text-[60px] font-[550] text-gray-500">&nbsp; -</p>
        <p class="text-[60px] font-[550]">></p>
      </section>

      <div></div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
