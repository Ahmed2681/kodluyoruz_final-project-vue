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
      <section class="mt-[3%] flex flex-row items-center justify-center text-center">
        <p class="text-[60px] font-[550]">&lt;</p>
        <p
          class="mt-[2%] text-[20px] font-bold italic text-gray-500 antialiased md:absolute md:mt-0 md:mb-[12%] md:text-[60px] md:font-extralight md:text-black lg:mb-[9%]"
        >
          Naim Süleymanoğlu
        </p>
        <hr
          class="invisible absolute mt-[0.8%] rounded-full border-[6px] border-gray-500 md:visible md:static md:min-w-[70%] lg:mt-[0.6%] lg:min-w-[50%] 2xl:mt-[0.4%]"
        />
        <p class="text-[60px] font-[550]">></p>
      </section>

      <div></div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
