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
                  class="w-[100%] text-center text-green-500 antialiased mobile-s:text-[15px] md:text-xl lg:text-4xl"
                >
                  Üzerinde çalışacağın en iyi proje sensin.
                </p>
              </div>
            </div>

            <div
              class="absolute flex w-full flex-col items-center justify-center pt-[44%] text-center mobile-m:pt-[42%]"
            >
              <p
                @click="goMain()"
                class="cursor-pointer text-green-500 hover:text-cyan-300 mobile-s:text-[30px] mobile-m:text-[40px] md:text-[50px] lg:text-[100px]"
              >
                ꜜ
              </p>
            </div>
          </div>
        </section>
        <article class="pt-[60%]">
          <div id="main" class="flex flex-col items-center justify-center">
            <div>
              <p
                class="bg-gradient-to-r from-cyan-300 to-green-300 bg-clip-text text-4xl font-[300] italic text-transparent antialiased"
              >
                Neden Spor Yapmalıyım?
              </p>
            </div>
            <div class="w-[70%] pt-[2%] text-center">
              <p class="font-mono text-xl font-semibold italic text-gray-700 antialiased">
                Rekabet gücünü artırmak, boş zamanları geçirmek, günlük aktiviteleri desteklemek,
                vücuttaki kas deformasyonları ve kas gücü kayıplarını önlemek, felç ve bazı
                eksiklikleri olan insanların, nörolojik hastaların rehabilitasyonu, eksikliklerini
                kompanse etmek ve önemlisi sağlık için spor yapılabilir. Özet geçecek olursak spor
                yapmak hem bedeni hem de zihin yapısını değiştiren bir eylemdir. Düzenli egzersiz,
                hastalıklara yakalanma riskini azaltarak yaşam kalitenizi artırır. Ayrıca sizi
                psikolojik olarak rahatlatır.
              </p>
            </div>
          </div>
          <div
            class="mt-[5%] mb-[5%] flex h-32 w-full items-center justify-center rounded-full bg-green-400 bg-opacity-60 text-center shadow-3xl"
          >
            <p class="font-serif text-2xl italic text-cyan-50 antialiased">
              Fitness birinden iyi olman değil, öncekinden iyi olmandır.
            </p>
          </div>
        </article>
        <article>
          <div class="flex flex-col items-center justify-center">
            <div>
              <p
                class="bg-gradient-to-r from-d-brown to-brown bg-clip-text text-4xl font-[300] italic text-transparent antialiased"
              >
                Bir Sporcu Nelere Dikkat Etmeli?
              </p>
            </div>
            <div class="w-[70%] pt-[2%] text-center">
              <p class="font-mono text-xl font-semibold italic text-gray-700 antialiased">
                Eğer gerçekten düzenli bir şekilde spor yapmaya başladıysanız elbette hayatınızda
                daha hassas davranmanız gereken noktalar oluşacaktır. Bunlardan en kritik olanlarını
                sizin için derledik:
              </p>
              <ol
                class="flex list-decimal flex-col items-center justify-center pt-[2%] text-center font-mono text-xl font-semibold italic text-gray-700 antialiased"
              >
                <li>
                  Öncelikle bir sporcu beslenme alışkanlıklarına çok dikkat etmelidir. Bunu en
                  önemlileri arasına bile alabiliriz. Hatta öyle ki "Spor mutfakta başlar.", gibi
                  sözler duymuşsunuzdur. Bu da beslenmenin önemini gösterir. Peki ne tür besinler
                  almamız gerekir? Aşağıda belirtilen türden besinler spocular için biçilmiş
                  kaftandır.
                </li>
                <ul
                  class="items-left flex list-disc flex-col justify-start pt-[2%] text-left font-mono text-xl font-semibold italic text-gray-700 antialiased"
                >
                  <li>Protein,</li>
                  <li>Karbonhidrat</li>
                  <li>Yağ -sağlıklı olan türdeki- ve</li>
                  <li>Lif açısından zengin besinler;</li>
                  <li>İşlenmiş şeker,</li>
                  <li>İşlenmiş yağ vb. içermeyen ve</li>
                  <li>Hamur İşi olmayan besinleri genel olarak sayabiliriz.</li>
                </ul>
                <li class="pt-[2%]">
                  Bir diğer önemli husus ise uykudur. Bir sporcu, ortalama 8 saat ideal uyku
                  süresini muhafaza etmelidir.
                </li>
                <li class="pt-[2%]">
                  Su tüketimini de atlayamayacağımız gerçek. Su tüketimi de çok önemli bir husustur.
                  Bir sporcunun bol bol su içmesi ona fazlasıyla artı sağlayacaktır.
                </li>
                <li class="pt-[2%]">
                  Ayrıca bir sporcunun mental sağlığını da iyi tutması gerekir. Aksi halde yaptığı
                  spordan alacağı verim düşebilir.
                </li>
                <li class="pt-[2%]">
                  Bir başka önemli husus ise DİSİPLİN! Sporcu, ilk önce kafasında disiplini sağlamalı ve
                  kararlı ve planlı bir şekilde hareket etmeli. Bu yapılmadığı takdirde başarı da sağlayamaz.
                </li>
                <li class="pt-[2%]">
                  Tabii ki antrenman yapmak; antrenmanın türü, uzunluğu, zorluğu gibi etkenler de
                  spor hayatınızı etkileyecektir.
                </li>
              </ol>
            </div>
          </div>
          <div
            class="mt-[5%] mb-[5%] flex h-32 w-full items-center justify-center rounded-full bg-brown bg-opacity-60 text-center shadow-3xl"
          >
            <p class="font-serif text-2xl italic text-cyan-50 antialiased">
              Tek kötü antrenman gerçekleşmeyen antrenmandır.
            </p>
          </div>
        </article>
        <article>
          <div class="flex flex-col items-center justify-center">
            <div>
              <p
                class="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-4xl font-[300] italic text-transparent antialiased"
              >
                Neden Spor Yapmalıyım?
              </p>
            </div>
            <div class="w-[70%] pt-[2%] text-center">
              <p class="font-mono text-xl font-semibold italic text-gray-700 antialiased">
                Rekabet gücünü artırmak, boş zamanları geçirmek, günlük aktiviteleri desteklemek,
                vücuttaki kas deformasyonları ve kas gücü kayıplarını önlemek, felç ve bazı
                eksiklikleri olan insanların, nörolojik hastaların rehabilitasyonu, eksikliklerini
                kompanse etmek ve önemlisi sağlık için spor yapılabilir. Özet geçecek olursak spor
                yapmak hem bedeni hem de zihin yapısını değiştiren bir eylemdir. Düzenli egzersiz,
                hastalıklara yakalanma riskini azaltarak yaşam kalitenizi artırır. Ayrıca sizi
                psikolojik olarak rahatlatır.
              </p>
            </div>
          </div>
          <div
            class="mt-[5%] mb-[5%] flex h-32 w-full items-center justify-center rounded-full bg-cyan-300 bg-opacity-60 text-center shadow-3xl"
          >
            <p class="font-serif text-2xl italic text-cyan-50 antialiased">
              Ya bir gün ya da birinci gün... Karar senin.
            </p>
          </div>
        </article>
      </div>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
