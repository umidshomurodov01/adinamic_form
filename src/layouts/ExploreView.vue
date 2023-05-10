<script setup>
import { ref } from 'vue';
// import Cookies from "js-cookie";


const showSiteBar = ref(true)
// const infoRole = JSON.parse(Cookies.get("account")).role
// console.log(infoRole);
const toggleSideBar = ()=> {
  showSiteBar.value = !showSiteBar.value
}
// const logOut = () => {
//   Cookies.remove("token");
//   Cookies.remove("account");
//   window.location.reload();
// };
</script>

<template>
  <div class="  w-screen h-screen flex">
    <!-- Side  bare -->
    <div class="w-[300px] h-full bg-gray-200 text-white" v-show="showSiteBar">
      <div class="h-[65px] bg-gray-800 flex justify-between items-center text-white">
        <div class=" px-[20px] flex justify-between items-center">
          <img class="w-[50px] cursor-pointer h-[50px]" src="../assets/img/restaurant-icon-png-4895.png" alt="">
          <h4 class="font-bold text-xl pl-3 text-[#fff]">The Meals</h4>
        </div>
      </div>
      <div class="h-[calc(100vh-50px)] text-white bg-gray-600 py-[10px]">
        <div class=" flex flex-col justify-between h-full">
        <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
          <div class="router-link h-[100vh-50px] ">
        <router-link  to="/" class="text-white inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#2cce7d] hover:text-white">
          <svg class="mr-2  fill-current text-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Home</router-link>
        </div>
        <div class="router-link h-[100vh-50px] ">
        <router-link  :to="{name : 'byLetter'}" class="text-white inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#2cce7d] hover:text-white">
          <svg class="mr-2  fill-current text-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Dinamic Form</router-link>
        </div>
        <div class="router-link h-[100vh-50px] ">
        <router-link  :to="{name : 'byIngredient'}" class="text-white inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-[#2cce7d] hover:text-white">
          <svg class="mr-2  fill-current text-white" width="25px" height="25px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        Dinamic Form Tool</router-link>
        </div>
        </div>
      </div>
        </div>
        </div>
     
      
    
    <div class="w-full h-full bg-white">
      <div class="w-full bg-gray-100 ">
    <div class="flex justify-between items-center h-[50px]">
      <div class=" px-4 cursor-pointer w-[30] " @click="toggleSideBar">
          <svg fill="#000000" width="23px" height="23px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"></path></g></svg>
        </div>
      <div class="py-2">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" class="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search...">
        </div>
      </div>
      <div class="flex space-x-3 items-center justify-center px-6">
        <div class="text-md"></div>
        <router-link to="/" class="text-white inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-white hover:text-gray-900">
          <svg class="mr-2  fill-current text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="#000" width="28px" height="28px" viewBox="0 0 24 24" stroke="#000" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g></svg>
         </router-link>

      </div>
    </div>
    </div>
      <div class="overflow-auto w-full h-[calc(100vh-50px)] p-[10px]">
        <div class=" p-[15px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
    </div>

</template>



<style scoped>
.router-link a.router-link-exact-active {
background: #2cce7d;
}

</style>
