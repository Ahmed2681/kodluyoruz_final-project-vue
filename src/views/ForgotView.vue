<script setup></script>

<template>
  <body class="bg-black">
    <main class="flex justify-center p-[60px] md:p-0">
      <div
        class="mt-[9%] flex h-auto w-auto flex-col items-center rounded-[40px] bg-white p-5 mobile-m:p-12 mobile-l:p-16 md:pt-[20px] md:pr-[80px] md:pl-[80px] md:pb-6"
      >
        <div class="mt-[30%] w-56">
          <img src="../img/logo.png" alt="logo.png" />
        </div>
        <div class="mt-[28%] flex flex-col">
          <label class="pl-[5%] pb-1">E-Mail Adresiniz</label>
          <input
            type="email"
            class="rounded-full border border-green-500 pl-4 pr-4 pb-1 pt-1 focus:border-cyan-300 focus:outline-none"
          />
        </div>
        <div class="flex flex-col pt-[10%]">
          <label class="pl-[5%] pb-1">Yeni Şifreniz</label>
          <input
            type="password"
            class="rounded-full border border-green-500 pl-4 pr-4 pb-1 pt-1 focus:border-cyan-300 focus:outline-none"
          />
        </div>
        <div class="flex flex-col pt-[10%]">
          <label class="pl-[5%] pb-1">Şifre Tekrar</label>
          <input
            type="password"
            class="rounded-full border border-green-500 pl-4 pr-4 pb-1 pt-1 focus:border-cyan-300 focus:outline-none"
          />
        </div>

        <div class="flex flex-col pt-[10%]">
          <a href="./login">
            <input
              type="submit"
              value="Onayla"
              class="w-32 rounded-full border bg-green-500 pl-4 pr-4 pb-1 pt-1 text-white hover:bg-cyan-300"
            />
          </a>
        </div>
      </div>
    </main>
  </body>
</template>
