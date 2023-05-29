<template>
  <div id="UserComponent">
    <img
      @click="openMenu = !openMenu"
      data-tooltip-target="tooltip-no-arrow-user"
      data-tooltip-placement="bottom"
      class="w-8 rounded-full cursor-pointer"
      src="https://via.placeholder.com/40"
      alt="user img"
    />
    <!--user account tooltip-->
    <div
     v-show="!openMenu"
      id="tooltip-no-arrow-user"
      role="tooltip"
      class="inline-block absolute left-2 invisible text-xs z-10 py-1 px-2 text-white rounded-sm shadow-sm opacity-0 tooltip dark:bg-gray-600 delay-1000`"
    >
      <div>Google Account</div>
      <div class="text-gray-300">John Doe</div>
      <div class="text-gray-300">john.doe@gmail.com</div>
    </div>

    <!--user info and sign out modal-->
    <div
    v-show="openMenu"
      class="absolute z-10 w-80 right-2 bg-white shadow-md top-16 rounded-xl"
    >
      <div class="w-full flex justify-center">
        <img
          class="w-20 rounded-full mt-4"
          src="https://via.placeholder.com/70"
          alt="user img"
        />
      </div>
      <div class="w-full flex justify-center text-gray-700 mt-2 text-lg">
        John Doe
      </div>
      <div
        class="w-full flex justify-center text-gray-700 mt-2 text-sm pb-4 border-b"
      >
        john.doe@gmail.com
      </div>
      <div class="flex justify-center my-5">
        <button
          class="bg-transparent text-xs hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded"
        >
          Sign out from Gmail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let openMenu = ref(false);
</script>

<style lang="scss" scoped></style>
