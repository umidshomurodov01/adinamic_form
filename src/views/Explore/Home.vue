<script setup>
import {reactive} from "vue"
const types = reactive([{checkbox:"",text:"", select:"",date:"",radio:""}])

const  addItem= () =>  {
    types.push({...types,text:""})
    console.log(types);
}
</script>
<template>
  <div>
    <h4 class="text-[18px] text-gray-400 font-bold text-center mb-5">Dinamik Forms </h4>
  <div v-for="type in types" :key="type" class="grid grid-cols-3 gap-4 bg-gray-100 p-6 rounded shadow-md">
    <div class="mb-2">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Text</label
        >
   <div class="flex">
    <input v-model="type.text" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="text">
    <button @click="addItem" class="bg-green-500 w-[55px] hover:bg-green-600 font-semibold text-white rounded">+</button>
    <button  class="bg-red-500 w-[55px] hover:bg-red-600 font-semibold text-white rounded">x</button>

  </div>
    </div>
    <div class="mb-2">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Select</label
        >
   <div class="flex">
    <select v-model="type.select" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="text">
      <option value="1">Buxoro</option>
      <option value="1">Samarqand</option>
      <option value="1">Navoiy</option>

    </select>
    <button class="bg-green-500 w-[55px] hover:bg-green-600 font-semibold text-white rounded">+</button>
    <button class="bg-red-500 w-[55px] hover:bg-red-600 font-semibold text-white rounded">x</button>
  </div>
    </div>
    <div class="mb-2">
    <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Date</label
        >
   <div class="flex">
    <input v-model="type.date" type="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="text">
    <button class="bg-green-500 w-[55px] hover:bg-green-600 font-semibold text-white rounded">+</button>
    <button class="bg-red-500 w-[55px] hover:bg-red-600 font-semibold text-white rounded">x</button>
  </div>
    </div>
    
  </div>
</div>
</template>


<style>

</style>