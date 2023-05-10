<script>
import api from "@/helpers/api"
export default {
props : {
  questions:String,score:Number,quizCompleted:Boolean
},
if(quizCompleted){
  setTestOneResualt()
},
data(){
  return{
    
  }
},

methods: {
  reloadTest(){
    setTimeout(()=>{
      window.location.reload();
    },1000)
  },
  
  async  setTestOneResualt(){
    const result = await api.post("/test/resualt", {resultOne : `${parseInt((this.score/(this.questions.length)) * 100 )}`})
  }
},

mounted() {
    this.setTestOneResualt()
  }

}

</script>
<template>
  <div>
 
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="flex justify-between my-4 px-2">
  <h2 class="font-bold">2- bosqich yakunlandi !</h2>
			<p v-if="(score/questions.length < 0.6)" class="text-red-500">Afsuski siz 2- bosqichdan o'taolmadiz!</p>
			<p v-else class="text-[#2cce7d] ">Tabriklaymiz siz testni muvofaqiyatli yakunladiz!</p>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Fullname
                </th>
                <th scope="col" class="px-6 py-3">
                    Count (L2)
                </th>
                <th scope="col" class="px-6 py-3">
                    count (L4)
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Protsent
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  {{ score }}
                </td>
                <td class="px-6 py-4">
                   {{ score }}
                </td>
                <td class="px-6 py-4">
                    {{ questions.length}}
                </td>
                <td :class="` ${(score/(questions.length)) * 100 < 60 } text-green-500  `" class="px-6 py-4">
                   {{parseInt((score/(questions.length)) * 100 )}}%
                </td>
              
            </tr>
            
        </tbody>
        <div class="flex justify-between space-x-10 px-5 mb-2 mt-2">
     <router-link   to="/explore" class="mt-4 text-white bg-red-600  hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Asosiyga qaytish </router-link>
		</div>
    </table>
</div>
</div>

</template>



<style>

</style>