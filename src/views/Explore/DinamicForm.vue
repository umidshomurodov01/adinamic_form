
<script setup>
import { reactive } from 'vue';
const dataFile = reactive([
  {
    fullname: "",
    username : "",
    email : "",
    selectRegion:'',
    selectDistrict:'',
    checkboxData: false,
    birthdayData: "",
    gender: "Male",
  }
])
const  addRow = () =>  {
    dataFile.push({
    fullname: "",
    username : "",
    email : "",
    selectRegion:"",
    selectDistrict:"",
    checkboxData: false,
    birthdayData: "",
    gender: "",})
}
const saveData = ()=>{
  if(Array.isArray(dataFile)){
  console.log(dataFile);
}
}
const removeRow = (index)=> {
  if(Array.isArray(dataFile) && dataFile.length>1){
  dataFile.splice(index,1)
  console.log(index);
}
}
const selectRegions = reactive([
  "Andijon",
  "Fargona",
  "Namangan",
  "Toshkent",
  "Sirdaryo",
  "Jizzax",
  "Qashqadaryo",
  "Surxandaryo",
  "Samarqand",
  "Navoiy",
  "Buxoro",
  "Xorazim",
  "Qoraqalpoq",
  "Toshkent shahar",
]);
const selectDistrictsBuxoro = reactive([
  "Buxoro shahri",
  "	Buxoro tumani",
  "G'ijduvon tumani",
  "Jondor tumani",
  "Kogon shahri",
  "Kogon tumani",
  "Olot tumani",
  "Peshku tumani",
  "Qorako'l tumani",
  "Qorovulbozor tumani",
  "Romitan tumani",
  "Shofirkon tumani",
  "Vobkent tumani",
]);

const selectDistrictsXorazim = reactive([
  "Bog'ot tumani",
  "Gurlan tumani",
  "Qo'shko'pir tumani",
  "Shovot tumani",
  "Urganch shahri",
  "Urganch tumani",
  "Xazorasp tumani",
  "Xiva tumani",
  "Xonqa tumani",
  "Yangiariq tumani",
  "Yangibozor tumani",
]);

const selectDistrictsQoraqolpoq = reactive([
  "Amudaryo tumani",
  "Beruniy tumani",
  "Chimboy tumani",
  "Ellikqala tumani",
  "Kegeyli tumani",
  "Mo'ynoq tumani",
  "Nukus shahri",
  "Nukus tumani",
  "Qonliko'l tumani",
  "Qorauzaq tumani",
  "Qung'irot tumani",
  "Shumanay tumani",
  "Taxiatosh shahri",
  "To'rtko'l tumani",
  "Xo'jayli tumani",
]);

const selectDistrictsNavoiy = reactive([
  "Karmana tumani",
  "Konimex tumani",
  "Navbahor tumani",
  "Navoiy shahri",
  "Nurota tumani",
  "	Qiziltepa tumani",
  "	Tomdi tumani",
  "Uchquduq tumani",
  "Xatirchi tumani",
  "Zarafshon shahri",
]);
const selectDistrictsSamarqand = reactive([
  "Bulung'ur tumani",
  "Ishtixon tumani",
  "Jomboy tumani",
  "Kattaqo'rg'on shahri",
  "Kattaqo'rg'on tumani",
  "	Narpay tumani",
  "Nurobod tumani",
  "Oqdaryo tumani",
  "Past darg'om tumani",
  "Paxtachi tumani",
  "Poyariq tumani",
  "Qo'shrabot tumani",
  "Samarqand shahri",
  "Samarqand tumani",
  "Toyloq tumani",
  "Urgut tumani",
]);

const selectDistrictsJizzax = reactive([
  "Arnasoy tumani",
  "Baxmal tumani",
  "Do'stlik tumani",
  "Forish tumani",
  "G'allaorol tumani",
  "Jizzax shahri",
  "Jizzax tumani",
  "Olot",
  "Mirzacho'l tumani",
  "Paxtakor tumani",
  "Yangiobod tumani",
  "Zafarobod tumani",
  "Zarband tumani",
  "Zomin tumani",
]);

const selectDistrictsSirdaryo = reactive([
  "Boyovut tumani",
  "Guliston shahri",
  "Guliston tumani",
  "Oqoltin tumani",
  "Sardoba tumani",
  "Sayxunobod tumani",
  "Shirin shahri",
  "Sirdaryo tumani",
  "Xovos tumani",
  "Yangiyer shahri",
]);

const selectDistrictsToshkent = reactive([
  "Angren shahri",
  "Bekobod shahri",
  "Bekobod tumani",
  "	Bo'ka tumani",
  "Bo'stonliq tumani",
  "Chinoz tumani",
  "Chirchiq shahri",
  "O'rta chirchiq tumani",
  "Ohangaron tumani",
  "Olmaliq shahri",
  "Oqqo'rg'on tumani",
  "Parkent tumani",
  "Piskent tumani",
  "Qibray tumani",
  "Quyi chirchiq tumani",
  "Yangiyo'l tumani",
  "Yuqori chirchiq tumani",
  "Zangiota tumani",
]);

const selectDistrictsFargona = reactive([
  "Beshariq tumani",
  "Bog'dod tumani",
  "Buvayda tumani",
  "Dang'ara tumani",
  "Farg'ona shahri",
  "Farg'ona tumani",
  "Furqat tumani",
  "Marg'ilon shahri",
  "O'zbekiston tumani",
  "	Oltiariq tumani",
  "Qo'qon shahri",
  "Qo'shtepa tumani",
  "Quva tumani",
  "Quvasoy shahri",
  "Rishton tumani",
  "So'x tumani",
  "Toshloq tumani",
  "Uchko'prik tumani",
  "Yozyovon tumani",
]);

const selectDistrictsNamangan = reactive([
  "Chortoq tumani",
  "Chust tumani",
  "Kosonsoy tumani",
  "Mingbuloq tumani",
  "	Namangan shahri",
  "Namangan tumani",
  "Norin tumani",
  "Pop tumani",
  "To'raqo'rg'on tumani",
  "Uchqo'rg'on tumani",
  "Uychi tumani",
  "Yangiqo'rgon tumani",
]);

const selectDistrictsAndijon = reactive([
  "Andijon shahri",
  "Andijon tumani",
  "Asaka tumani",
  "	Baliqchi tumani",
  "Bo'z tumani",
  "Buloqboshi tumani",
  "Izboskan tumani",
  "Jalolquduq tumani",
  "Marhamat tumani",
  "Oltinko'l tumani",
  "Paxtaobod tumani",
  "Qo'rg'ontepa tumani",
  "Shahrixon tumani",
  "Ulug'nor tumani",
  "Xo'jaobod tumani",
  "Xonobod shahri",
]);

const selectDistrictsSurxondaryo = reactive([
  "Angor tumani",
  "Bandixon tumani",
  "Boysun tumani",
  "Denov tumani",
  "Jarqo'rg'on tumani",
  "Muzrobot tumani",
  "Oltinsoy tumani",
  "Qiziriq tumani",
  "Qumqo'rg'on tumani",
  "Sariosiyo tumani",
  "Sherobod tumani",
  "Sho'rchi tumani",
  "Termiz shahri",
  "Termiz tumani",
  "Uzun tumani",
]);

const selectDistrictsQashqadaryo = reactive([
  "Chiroqchi tumani",
  "Dehqonobod tumani",
  "G'uzor tumani",
  "	Kasbi tumani",
  "Kitob tumani",
  "Koson tumani",
  "Mirishkor tumani",
  "Muborak tumani",
  "Nishon tumani",
  "Qamashi tumani",
  "Qarshi shahri",
  "Qarshi tumani",
  "Shahrisabz shahri",
  "Yakkabog' tumani",
]);

const selectDistrictsToshkentSh = reactive([
  "Bektemir tumani",
  "Chilonzor tumani",
  "Mirobod tumani",
  "Mirzo Ulug'bek tumani",
  "Olmazor tumani",
  "Sergeli tumani",
  "Shayhontohur tumani",
  "Uchtepa tumani",
  "Yakkasaroy tumani",
  "Yashnaobod tumani",
  "Yunusobod tumanir",
]);
</script>

<template>
  <div>
    <h4 class="text-[18px] text-gray-400 font-bold text-center mb-5">Dinamik Forms </h4>

    <div class="" v-for="(item,i) in dataFile" :key="i"  >
      <form class="mb-6" @submit.prevent="saveData" >
    <div class="grid grid-cols-3 gap-4 bg-gray-100 p-6 rounded shadow-md">
      <div class="mb-4">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Fullname</label
        >
        <input
          v-model="item.fullname"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe..."
          required
        />
      </div>
      <div class="mb-4">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Username</label
        >
        <input
          v-model="item.username"
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John12..."
          required
        />
      </div>
      <div class="mb-4">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Email</label
        >
        <input
          v-model="item.email"
          type="email"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Johndoe@gmail.com"
          required
        />
      </div>

      <div class="mb-4 region">
        <label
          name="region"
          for=""
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Region</label
        >
        <select
          v-model="item.selectRegion"
          required
          id="region"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Qaysi viloyatdansiz</option>
          <option v-for="(region, i) in selectRegions" :key="i" :value="region">
            {{ region }}
          </option>
        </select>
      </div>

      <div class="mb-4 district">
        <label
          name="district"
          for=""
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >District</label
        >
        <select
          v-model="item.selectDistrict"
          id="district"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Qaysi tumandansiz</option>
          <option
            v-show="item.selectRegion === 'Buxoro'"
            v-for="(district, i) in selectDistrictsBuxoro"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Navoiy'"
            v-for="(district, i) in selectDistrictsNavoiy"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Xorazim'"
            v-for="(district, i) in selectDistrictsXorazim"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Qoraqalpoq'"
            v-for="(district, i) in selectDistrictsQoraqolpoq"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Samarqand'"
            v-for="(district, i) in selectDistrictsSamarqand"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Jizzax'"
            v-for="(district, i) in selectDistrictsJizzax"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Sirdaryo'"
            v-for="(district, i) in selectDistrictsSirdaryo"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Fargona'"
            v-for="(district, i) in selectDistrictsFargona"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Namangan'"
            v-for="(district, i) in selectDistrictsNamangan"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Andijon'"
            v-for="(district, i) in selectDistrictsAndijon"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Qashqadaryo'"
            v-for="(district, i) in selectDistrictsQashqadaryo"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Surxandaryo'"
            v-for="(district, i) in selectDistrictsSurxondaryo"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Toshkent shahar'"
            v-for="(district, i) in selectDistrictsToshkentSh"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
          <option
            v-show="item.selectRegion === 'Toshkent'"
            v-for="(district, i) in selectDistrictsToshkent"
            :key="i"
            :value="district"
          >
            {{ district }}
          </option>
        </select>
      </div>
      <div class="h-2">
        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
        <input
          v-model="item.birthdayData"
          type="date"
          id="birthday"
          name="birthday"
          required
          placeholder="Select date"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div
        class="w-full flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <input
            v-model="item.gender"
            id="bordered-radio-1"
            type="radio"
            :value="Male"
            required
            name="bordered-radio"
            class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 p-2.5 dark:bg-gray-700 dark:border-gray-600"

          />
          <label
            for="bordered-radio-1"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Male</label
          >
        </div>
        <div
          class="w-full flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <input
            v-model="item.gender"
            id="bordered-radio-2"
            type="radio"
            :value="Female"
            required
            name="bordered-radio"
            class="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Female</label
          >
        </div>
      </div>
      <div class="">
        <label class="relative inline-flex items-center cursor-pointer">
       <input v-model="item.checkboxData" type="checkbox" required value="" class="sr-only peer">
       <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
       <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Student</span>
      </label>
      </div>
      <div class="grid grid-cols-3 gap-4 ">
        <button @click="addRow" class="bg-green-500 hover:bg-green-600 font-semibold text-white rounded">Add</button>
        <button @click="removeRow(i)" class="bg-red-500 hover:bg-red-600 font-semibold text-white rounded">Remove</button>
        <button type="submit" class="bg-blue-500 hover:bg-blue-600 font-semibold text-white rounded">Save</button>

      </div>
    </div>
      </form>
    </div>
  </div>
</template>

<style>
body{
  margin : 0;
  padding: 0;
}
</style>
