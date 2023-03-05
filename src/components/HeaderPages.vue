<script setup></script>

<template>
  <div
    id="header"
    class="flex min-h-[100px] flex-row items-center justify-center bg-green-100 text-center"
  >
    <!-- logo -->
    <div class="w-[28%] pl-[3%]">
      <a href="./index.html">
        <img width="200" src="./img/logo.png" alt="logo.png" />
      </a>
    </div>
    <!-- navbar -->
    <nav class="flex w-[57%] items-center justify-center">
      <ul class="flex flex-row">
        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./aboutUs.html"><li class="italic">Hakkımızda</li></a>
        </div>
        &nbsp;&nbsp;
        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./blog.html"><li class="italic">Blog</li></a>
        </div>
        &nbsp;&nbsp;
        <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-green-500 hover:text-white">
          <a href="./contactUs.html"><li class="italic">İletişim</li></a>
        </div>
      </ul>
    </nav>
    <!-- log in -->
    <div class="mr-[3%] flex w-[15%] items-end justify-end">
      <div class="rounded-full pl-3 pr-3 pt-1 pb-1 hover:bg-cyan-300 hover:text-white">
        <a href="./signIn.html">Giriş Yap</a>
      </div>
    </div>
  </div>
</template>
