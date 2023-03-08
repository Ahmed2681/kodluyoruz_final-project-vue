<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const video = document.getElementById('main-video')

  video.scrollIntoView({ behavior: 'smooth' })
})

const goMain = () => {
  const main = document.getElementById('main')

  main.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main class="bg-cyan-50">
      <div>
        <section class="w-full">
          <div>
            <div class="absolute min-h-[100%] min-w-[100%]">
              <video id="main-video" muted loop playsinline autoplay class="h-[100%] w-[100%]">
                <source src="../video/clapping-hand.webm" type="video/webm" />
              </video>
            </div>
            <div
              class="absolute flex w-full flex-col items-center justify-center pt-[30%] text-center md:pt-[35%]"
            >
              <div class="flex h-full w-full flex-col items-center justify-center text-center">
                <p
                  class="w-[100%] text-center text-lg text-green-500 antialiased md:text-xl lg:text-4xl"
                >
                  FİT BİR YAZILIMCI !
                </p>
                <p
                  class="mobile-s:text-[15px] w-[100%] text-center text-green-500 antialiased md:text-xl lg:text-4xl"
                >
                  Üzerinde çalışacağın en iyi proje sensin.
                </p>
              </div>
            </div>

            <div
              class="mobile-m:pt-[42%] absolute flex w-full flex-col items-center justify-center pt-[44%] text-center"
            >
              <p
                @click="goMain()"
                class="mobile-m:text-[40px] mobile-s:text-[30px] cursor-pointer text-green-500 hover:text-cyan-300 md:text-[50px] lg:text-[100px]"
              >
                ꜜ
              </p>
            </div>
          </div>
        </section>
        <article class="pt-[52%]">
          <div id="main">
            <div class="h-32 w-32 bg-cyan-300"></div>
          </div>
          <div class="h-32 w-full bg-green-500 bg-opacity-20 rounded-full"></div>
        </article>
        <article>
          <div class="bg-cyan-50">
            <div class="h-32 w-32 bg-cyan-300"></div>
          </div>
          <div class="h-32 w-full bg-brown bg-opacity-60 rounded-full"></div>
        </article>
        <article>
          <div class="bg-cyan-50">
            <div class="h-32 w-32 bg-cyan-300"></div>
          </div>
          <div class="h-32 w-full bg-cyan-300 bg-opacity-60 rounded-full"></div>
        </article>
      </div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
