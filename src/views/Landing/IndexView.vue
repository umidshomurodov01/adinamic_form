<template>
  <div
    class="landing min-h-screen w-400 flex flex-col justify-center items-center"
  >
    <div class="bg-white min-w-[400px] text-center border-2 rounded p-5">
      <h1 class="landing-title font-bold text-[#2cce7d] text-3xl">
        Quiz testga xush kelibsiz!
      </h1>
      <p class="landing-desc mt-4 opacity-70">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quos
        tenetur maxime quo. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quos
        
      </p>
      <div class="landing-links mt-8 space-x-4">
        <router-link
          to="/register"
          class="button bg-[#2cce7d] transition border border-[#36d887] text-white rounded p-2 px-4 hover:bg-[#36d887] hover:border-[#36d887] disabled:bg-gray-200 disabled:cursor-default disabled:border-none"
          >Ro'yxatdan o'tish</router-link
        >
        <router-link
          to="/login"
          class="bg-white border transition rounded p-2 px-4 hover:bg-gray-100"
          >Kirish</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style></style>
