<script setup></script>

<template>
  <div class="h-auto w-full bg-green-100">
    <div class="flex flex-row items-center justify-center pl-[5%] pt-[5%] pb-[5%]">
      <!-- pages -->
      <div class="flex w-[25%] items-center justify-center">
        <ul class="pr-[10%]">
          <li class="p-0 text-lg font-[600]">Sayfalar</li>
          <hr class="mb-[15%] w-32 border-green-500" />
          <li class="mb-[5%]">
            <a href="./aboutUs.html">
              <div
                class="rounded-full pr-2 pt-1 pb-1 hover:ml-[5%] hover:w-auto hover:bg-green-500 hover:pl-3 hover:text-center hover:text-white"
              >
                Hakkımızda
              </div>
            </a>
          </li>
          <li class="mb-[5%]">
            <a href="./blog.html">
              <div
                class="rounded-full pr-3 pt-1 pb-1 hover:ml-[5%] hover:w-auto hover:bg-green-500 hover:pl-3 hover:text-center hover:text-white"
              >
                Blog
              </div>
            </a>
          </li>
          <li class="mb-[5%]">
            <a href="./contactUs.html">
              <div
                class="rounded-full pr-3 pt-1 pb-1 hover:ml-[5%] hover:w-full hover:bg-green-500 hover:pl-3 hover:text-center hover:text-white"
              >
                İletişim
              </div>
            </a>
          </li>
        </ul>
      </div>
      <!-- logo -->
      <div class="flex justify-center mobile-l:w-[30%] md:w-[40%]">
        <a href="./index.html"><img width="400" src="./img/logo.png" alt="logo.png" /></a>
      </div>
      <!-- address -->
      <div class="flex flex-col items-center mobile-l:w-[45%] md:w-[35%]">
        <div class="mr-[10%] text-right mobile-l:w-[100%] md:w-[65%]">
          <p class="text-lg font-[600]">Adres</p>
          <hr class="mb-[10%] w-auto border-green-500" />
          <a href="https://www.google.com/maps" target="_blank">
            <address>
              Lorem Mah. Ipsum Dolor Cad. Sit Amet Sokak No: 4 Consectetur/ADİPİSİCİNG
            </address>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
