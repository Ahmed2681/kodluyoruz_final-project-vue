<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main
      class="flex w-full items-center justify-center bg-cyan-50 text-center"
    >
      <section
        class="mt-[10%] mb-[15%] flex flex-col items-center justify-center text-center"
      >
        <div
          class="mb-[5%] flex min-w-[25%] max-w-[80%] items-center justify-center rounded-tl-full rounded-br-full bg-[#A27B5C] text-center hover:bg-[#BF9270]"
        >
          <p class="pl-12 pr-12 pt-6 pb-6 text-3xl text-white antialiased">
            Neyi Amaçlıyoruz?
          </p>
        </div>

        <div
          class="flex w-[80%] flex-row items-center justify-center text-center"
        >
          <div class="invisible absolute mr-24 md:visible md:static">
            <img class="rounded-full" src="../img/coffee.jpeg" alt="coffee" />
          </div>
          <div class="w-[100%]">
            <p
              class="bg-gradient-to-b from-[#562B08] to-[#B99B6B] bg-clip-text font-mono text-2xl font-semibold italic text-transparent antialiased"
            >
              Amacımız, gündelik hayatlarında işleri gereği fazla hareketsiz
              kalan yazılımcılara hitap edecek temalarla tasarlanan
              salonlarımızla, değerli yazılımcılarımızı biraz harekete teşvik
              etmek, onlara sağlıklı bir hayat sunabilmektir. Çünkü
              yazılımcılarımız geleceğimizi kodluyorlar. Onlara iyi bakmamız
              lazım diyerek çıktığımız bu yolda amacımıza ulaşabileceğimize
              inanıyoruz. Sınırsız kahve rahatlığıyla hata kodlarınızı
              birbirinize danışabileceğiniz bu fırsatı kaçırmanızı hiç
              istemeyiz. Sağlıklı, kahveli ve hatasız kodlar yazmanız
              dilekleriyle, sağlıkla kalın :)
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
