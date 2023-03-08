<script setup></script>

<template>
  <router-view />
  <div
    id="header"
    class="flex min-h-[100px] w-[100%] md:flex-row flex-col items-center justify-center bg-green-100 text-center"
  >
    <!-- logo -->
    <div
      class="w-full md:ml-[3%] md:mt-0 md:mb-0 mb-[3%] mt-[3%] flex md:items-start md:justify-start items-center justify-center"
    >
      <a href="/">
        <img class="w-[200px]" src="../img/logo.png" alt="logo.png" />
      </a>
    </div>

    <!-- navbar -->
    <nav class="flex w-full max-w-[190px] items-center justify-center">
      <ul class="flex flex-row">
        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./about"><li class="italic">Hakkımızda</li></a>
        </div>

        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./blog"><li class="italic">Blog</li></a>
        </div>

        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./contact"><li class="italic">İletişim</li></a>
        </div>
      </ul>
    </nav>
    <!-- log in -->
    <div class="md:mr-[3%] md:mt-0 mt-[3%] md:mb-0 mb-[3%] flex w-full md:items-end md:justify-end items-center justify-center">
      <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-cyan-300 hover:text-white">
        <a href="./login">Giriş Yap</a>
      </div>
    </div>
  </div>
</template>
