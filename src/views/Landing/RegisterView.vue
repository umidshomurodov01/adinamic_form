<template>
  <div class="register flex justify-center items-center min-h-screen  text-center">
  
    <form  @submit="(e) => register(e)" class="register-box ">
      <h1 class="text-[#2cce7d] text-2xl font-bold mb-4">Registration</h1>
      <div
        class="box shadow bg-white w-80 border-2 space-y-4 flex flex-col p-5"
      >
        <input
          v-model="user.fullname"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Ism familiya"
        />
        <input
          v-model.trim="user.username"
          type="text"
          class="input-field border outline-none px-3 py-2"
          placeholder="Username"
        />
        <input
          v-model.trim="user.password"
          type="password"
          class="input-field border outline-none px-3 py-2"
          placeholder="Password"
        />
        <select v-model="user.gender" class="border outline-none px-3 py-2">
          <option value="Erkak">Erkak</option>
          <option value="Ayol">Ayol</option>
        </select>
        <button
          :disabled="loading"
          class="button bg-[#2cce7d] transition border border-[#2cce7d] text-white rounded p-2 px-4 hover:bg-[#36d887] hover:border-[#36d887] disabled:bg-gray-200 disabled:cursor-default disabled:border-none"
          type="submit"
        >
          Yuborish
        </button>
      </div>
      <p class="text-sm font-semibold mt-4">
        Allaqachon ro'yxatdan o'tkanmisiz?
        <router-link to="/login" class="text-[#2cce7d] underline"
          >Kirish</router-link
        >
      </p>
    </form>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { reactive, computed } from "vue";

const store = useStore();

const user = reactive({
  username: "",
  password: "",
  fullname: "",
  gender: ""
});

const loading = computed(() => {
  return store.state.loading;
});

const register = async (e) => {
  e.preventDefault();

  if (!user.username || !user.password) {
    alert("Hamma qatorlarni to'ldiring");
  } else {
    store.dispatch("auth/register", user);
  }
};
</script>

<style scoped>


</style>
