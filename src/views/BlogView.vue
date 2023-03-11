<script setup>
import HeaderPage from '@/components/HeaderPages.vue'
import FooterPage from '@/components/FooterPages.vue'
</script>

<template>
  <body class="h-full w-full">
    <header>
      <header-page />
    </header>

    <main class="flex w-full flex-col items-center justify-center bg-cyan-50 text-center">
      <nav class="mb-[5%] mt-[3%]">
        <ul class="flex flex-row items-center justify-center text-center">
          <div class="min-w-[30%] rounded-full pl-4 pr-4 pt-1 pb-1 hover:bg-brown hover:text-white">
            <a href="#Naim"><li>Naim Süleymanoğlu</li></a>
          </div>
          <li class="mr-2 ml-2">|</li>
          <div class="min-w-[30%] rounded-full pl-4 pr-4 pt-1 pb-1 hover:bg-brown hover:text-white">
            <a href="#Ali"><li>Muhammed Ali</li></a>
          </div>
        </ul>
      </nav>

      <article id="Naim" class="mb-[4%] flex items-center justify-center text-center">
        <img src="../img/Naim.webp" class="w-[40%] rounded-3xl" alt="Naim-Suleymanoglu" />
      </article>
      <section class="mt-[3%] flex flex-row items-center justify-center text-center">
        <p class="text-[60px] font-[550]">&lt;</p>
        <p
          class="mt-[2%] text-[20px] font-bold italic text-gray-500 antialiased md:absolute md:mt-0 md:mb-[12%] md:text-[60px] md:font-extralight md:text-black lg:mb-[9%]"
        >
          Naim Süleymanoğlu
        </p>
        <hr
          class="invisible absolute mt-[0.8%] rounded-full border-[6px] border-gray-500 md:visible md:static md:min-w-[520px] lg:mt-[0.6%] lg:min-w-[600px] 2xl:mt-[0.4%]"
        />
        <p class="text-[60px] font-[550]">></p>
      </section>

      <article
        class="mt-[4%] flex w-[60%] items-center justify-center text-center font-mono text-2xl antialiased"
      >
        Naim Süleymanoğlu (23 Ocak 1967, Kırcaali - 18 Kasım 2017, İstanbul), Türk haltercidir.
        Birçok otoriteye göre tüm zamanların en iyi haltercisi olarak kabul edilir. Yapıca ufak
        tefek ancak çok güçlü olması nedeniyle Cep Herkül'ü olarak anılan Naim Süleymanoğlu, Türk
        Süpermen adıyla da anılır.
      </article>

      <br />

      <article
        class="flex w-[60%] items-center justify-center text-center font-mono text-2xl antialiased"
      >
        Haltere 1977'de, 10 yaşındayken başladı. 15 yaşındayken Brezilya'da düzenlenen Dünya Gençler
        Halter Şampiyonası'nda iki altın madalya alarak şampiyon oldu. 16 yaşında rekor kırarak yine
        şampiyon oldu. Böylece halter tarihinde en genç dünya rekortmeni unvanını aldı. Kariyeri
        boyunca 3 altın olimpiyat madalyası, 7 dünya şampiyonluğu ve 6 Avrupa şampiyonluğu vardır.
        Tam 46 kere dünya rekoru kırmıştır. 1984 yılında (16 yaşındayken), silkme kategorisinde
        vücut ağırlığının üç katını kaldıran ikinci halterci olarak tarihe geçti. 1983-1986 arasında
        gençlerde 13, büyüklerde 50 olmak üzere tam 63 rekor kırarken yine bu dönemde dünya ve
        Avrupa şampiyonalarında 52, 56 ve 60 kilolarda şampiyonluklar yaşadı. 1984, 1985 ve 1986'da
        dünyada yılın haltercisi seçildi. <br />
        <br />
        1984 Los Angeles Olimpiyatları'na Bulgaristan'ın da Sovyetlerle boykotta yer alması
        nedeniyle katılamadı. Bu dönemde Bulgar Hükûmetinin Soya Dönüş Operasyonu kapsamında Türk
        isimlerini yasaklaması nedeniyle adı Naum Şalamanov olarak değiştirildi. Bulgaristan'daki bu
        baskılardan kurtulmak ve Türkiye adına müsabakalara katılmak için 1986'da Melbourne'de
        düzenlenen Dünya Halter Şampiyonası'nda Türkiye büyükelçiliğine sığınarak Türkiye'ye iltica
        etti. Türkiye'ye ilticasında ve getirilmesinde bizzat Turgut Özal devreye girdi. Naim
        Süleymanoğlu 18 Kasım 2017 günü tedavi gördüğü hastanede 50 yaşında hayatını kaybetti.
      </article>

      <hr
        class="mt-[10%] mb-[10%] w-[90%] border-[10px] border-dotted border-black border-b-transparent border-l-transparent border-r-transparent"
      />

      <article id="Ali" class="mb-[4%] flex items-center justify-center text-center">
        <img src="../img/Muhammed-Ali.jpeg" class="w-[40%] rounded-3xl" alt="Muhammed-Ali" />
      </article>

      <section class="flex flex-row items-center justify-center text-center">
        <p class="text-[60px] font-[550]">&lt;</p>
        <p
          class="mt-[2%] text-[20px] font-bold italic text-gray-500 antialiased md:absolute md:mt-0 md:mb-[12%] md:text-[60px] md:font-extralight md:text-black lg:mb-[9%]"
        >
          Muhammed Ali
        </p>
        <hr
          class="invisible absolute mt-[0.8%] rounded-full border-[6px] border-gray-500 md:visible md:static md:min-w-[520px] lg:mt-[0.6%] lg:min-w-[600px] 2xl:mt-[0.4%]"
        />
        <p class="text-[60px] font-[550]">></p>
      </section>

      <article
        class="mt-[4%] flex w-[60%] items-center justify-center text-center font-mono text-2xl antialiased"
      >
        Muhammed Ali, Amerikalı profesyonel boksördür. Tüm zamanların en iyi boksörü olarak kabul
        edilen Muhammed Ali, 20. yüzyılın en önemli spor figürlerinden biridir. "The Greatest" (En
        Büyük) lakaplı Ali, kariyeri boyunca yaptığı 61 maçın yalnızca 5 tanesini kaybetmiştir. 1999
        yılında Sports Illustrated tarafından "Yüzyılın Sporcusu" ve BBC tarafından "Yüzyılın Spor
        Kişiliği" seçilmiştir.
      </article>

      <br />

      <article
        class="flex w-[60%] items-center justify-center text-center font-mono text-2xl antialiased"
      >
        Clay -doğum adıyla Cassius Marcellus Clay Jr.- 12 yaşındayken, bir hırsızın bisikletini
        çalmasının ardından öfkeye kapılması üzerine, bir Louisville polis memuru ve boks koçu olan
        Joe E. Martin tarafından boksa yönlendirildi. Clay, o anki öfkeyle memura hırsızı
        kırbaçlayacağını söyledi. Memur Martin, Clay'e önce boks yapmayı öğrenmesinin daha iyi
        olacağını söyledi. Başlangıçta Clay, Martin'in teklifini kabul etmedi; ancak daha sonra
        Tomorrow's Champions adlı yerel bir televizyon boks programında amatör boksörleri gördükten
        sonra dövüşle ilgilenmeye başladı. <br />
        <br />
        Muhammed Ali, 1978'de boksu şampiyon olarak bıraktı. 1984'te parkinson hastalığına
        yakalanmasına rağmen, bunu gizleyip büyük para karşılığı ile iki maç daha yapıp bunları
        kaybetti. Profesyonel döneminde sadece 5 kez yenilen, Olimpiyat ve Dünya Şampiyonu olan
        Muhammed Ali, 36 yaşına kadar bütün şampiyonlar için tek isim olmayı başardı ve 37'si nakavt
        olmak üzere toplam 56 maç kazandı.
      </article>

      <nav class="mb-[5%] mt-[10%]">
        <ul class="flex flex-row items-center justify-center text-center">
          <div class="min-w-[30%] rounded-full pl-4 pr-4 pt-1 pb-1 hover:bg-brown hover:text-white">
            <a href="#Naim"><li>Naim Süleymanoğlu</li></a>
          </div>
          <li class="mr-2 ml-2">|</li>
          <div class="min-w-[30%] rounded-full pl-4 pr-4 pt-1 pb-1 hover:bg-brown hover:text-white">
            <a href="#Ali"><li>Muhammed Ali</li></a>
          </div>
        </ul>
      </nav>
    </main>

    <footer>
      <footer-page />
    </footer>
  </body>
</template>
