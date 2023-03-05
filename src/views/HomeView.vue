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

    <main>
      <div class="w-full bg-cyan-50">
        <section class="static">
          <div>
            <div class="absolute min-h-[100%] min-w-[100%]">
              <video id="main-video" muted loop playsinline autoplay class="h-[100%] w-[100%]">
                <source src="../video/clapping-hand.webm" type="video/webm" />
              </video>
            </div>
            <div
              class="absolute flex w-full flex-col items-center justify-center pt-[35%] text-center"
            >
              <div class="flex h-full w-full flex-col items-center justify-center text-center">
                <p class="w-[100%] text-center text-xl text-green-500 antialiased md:text-4xl">
                  FİT BİR YAZILIMCI !
                </p>
                <p
                  class="w-[100%] text-center text-green-500 antialiased mobile-s:text-[15px] mobile-m:text-xl md:text-4xl"
                >
                  Üzerinde çalışacağın en iyi proje sensin.
                </p>
              </div>
            </div>

            <div
              class="absolute flex w-full flex-col items-center justify-center text-center mobile-s:pt-[50%] md:pt-[40%]"
            >
              <p
                @click="goMain()"
                class="text-green-500 hover:text-cyan-300 mobile-s:text-[50] md:text-[100px] cursor-pointer"
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
        </article>
      </div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
