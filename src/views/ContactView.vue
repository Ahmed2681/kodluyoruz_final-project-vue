<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main class="w-full bg-cyan-50 flex justify-center items-center text-center pt-[15%] pb-[15%] flex-col lg:flex-row md:pr-0 md:pl-0 pr-[10%] pl-[10%]">
      <section class="flex flex-row lg:w-[40%] w-[100%] justify-center lg:justify-start lg:mb-[0%] mb-[10%]">
        <img src="../img/gym-saloon.webp" class="rounded-lg lg:min-w-[500px] md:min-w-[420px]" alt="gym-saloon" />
      </section>
      <article
        class="border-dashed border-[2px] lg:ml-[15%] m-0 lg:max-w-[380px] rounded-lg border-cyan-300 justify-end flex flex-col items-center p-[2%]"
      >
        <div>
          <p class="text-lg font-[600]">Telefon</p>
          <hr
            class="border-[2px] border-b-transparent border-l-transparent border-r-transparent w-full border-dotted border-green-500"
          />
          <a href="tel:+90 (010) 101 01 10" class="italic hover:text-[#B99B6B]">+90 (010) 101 01 10</a>
        </div>
        <div class="pt-[4%]">
          <p class="text-lg font-[600]">E-Mail</p>
          <hr
            class="border-[2px] border-b-transparent border-l-transparent border-r-transparent w-full border-dotted border-green-500"
          />
          <a href="mailto: lorem@ipsum.com" class="italic hover:text-[#B99B6B]">lorem@ipsum.com</a>
        </div>
        <div class="pt-[4%]">
          <p class="text-lg font-[600]">Adres</p>
          <hr
            class="border-[2px] border-b-transparent border-l-transparent border-r-transparent w-full border-dotted border-green-500"
          />
          <a href="https://www.google.com/maps" target="_blank">
            <address class="hover:text-[#B99B6B]">
              Lorem Mah. Ipsum Dolor Cad. Sit Amet Sokak No: 4 Consectetur/ADİPİSİCİNG
            </address>
          </a>
        </div>
      </article>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
