<template>
  <div id="EmailView" class="bg-[#F6F8FC] h-screen">
    <!--main menu and gmail logo-->
    <div class="flex items-center p-2">
      <div class="flex justify-start items-center p-3.5 min-w-[250px]">
        <IconComponent
          iconString="menu"
          iconColor="#636363"
          iconSize="22"
          hoverColor="hover:bg-gray-200"
          text="Main menu"
          class="-ml-2 mr-2"
        />
        <img width="107" src="@/assets/img/GmailLogo.png" alt="Gmail Logo" />
      </div>

      <!--search field-->
      <div class="flex w-full justify-between">
        <div
          class="w-full max-w-[700px] bg-gray-200 flex items-center p-1 px-1.5 rounded-full"
        >
          <IconComponent
            iconString="magnify"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-300"
            text="Search"
          />
          <input
            placeholder="Search mail"
            class="w-full h-10 bg-gray-200 border-none focus:ring-0 outline-none text-lg placeholder-gray-900"
            type="text"
          />
          <IconComponent
            iconString="tune"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-300"
            text="Show search options"
          />
        </div>

        <!--settings and user info-->
        <div class="flex w-32 justify-between items-center ml-6">
          <IconComponent
            iconString="cog"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-200"
            text="Settings"
          />
          <IconComponent
            iconString="apps"
            iconColor="#636363"
            iconSize="22"
            hoverColor="hover:bg-gray-200"
            text="Google apps"
          />
          <UserComponent />
        </div>
      </div>
    </div>

    <div class="flex w-full justify-between">
      <!--right side menu-->
      <div id="SideMenu" class="w-[300px]">
        <div
          @click="newMessageOpen = !newMessageOpen"
          class="flex items-center justify-center bg-sky-200 w-36 h-8 mt-2 ml-2 p-7 cursor-pointer rounded-2xl"
        >
          <PencilOutlineIcon :size="25" class="mr-4" />
          <span class="text-sm">Compose</span>
        </div>

        <div class="my-5"></div>

        <RouterLink to="/email">
          <div
            class="flex w-[250px] justify-between px-6 py-1.5 bg-blue-100 rounded-r-full"
          >
            <div class="flex items-center">
              <InboxIcon :size="17" />
              <div class="text-sm pl-4 font-semibold">Inbox</div>
            </div>
            <div class="text-xs justify-end font-semibold">{{ userStore.emails.length }}</div>
          </div>
        </RouterLink>

        <div class="flex w-[250px] justify-between px-6 py-1.5">
          <div class="flex items-center">
            <StarOutlineIcon :size="17" />
            <div class="text-sm pl-4">Starred</div>
          </div>
        </div>

        <div class="flex w-[250px] justify-between px-6 py-1.5">
          <div class="flex items-center">
            <ClockOutlineIcon :size="17" />
            <div class="text-sm pl-4">Snoozed</div>
          </div>
        </div>

        <div class="flex w-[250px] justify-between px-6 py-1.5">
          <div class="flex items-center">
            <SendOutlineIcon :size="17" />
            <div class="text-sm pl-4">Sent</div>
          </div>
        </div>

        <div class="flex w-[250px] justify-between px-6 py-1.5">
          <div class="flex items-center">
            <FileOutlineIcon :size="17" />
            <div class="text-sm pl-4">Drafts</div>
          </div>
        </div>
      </div>

      <!-- this is where the page changes -->
      <RouterView />
      <!-- this is where the page changes -->

      <!-- left side bar -->
      <div class="m-4">
        <div class="w-6 h-6 flex justify-center mb-7">
          <img
            class="object-center"
            src="../../assets/img/GoogleCalendar.png"
            alt=""
          />
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img
            class="object-center"
            src="../../assets/img/GoogleKeep.png"
            alt=""
          />
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img
            class="object-center"
            src="../../assets/img/GoogleTasks.png"
            alt=""
          />
        </div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <img
            class="object-center"
            src="../../assets/img/GoogleContacts.png"
            alt=""
          />
        </div>

        <div class="w-6 flex mb-7 border border-gray-300"></div>

        <div class="w-6 h-6 flex justify-center mb-7">
          <PlusIcon />
        </div>
      </div>
    </div>

    <!-- new message popup box -->
    <div
      v-if="newMessageOpen"
      class="w-[560px] h-[570px] absolute bottom-0 right-0 mr-20 rounded-t-lg shadow-2xl bg-white"
    >
      <div
        class="flex items center justify-between rounded-t-lg w-full text-sm px-3.5 py-2.5 bg-gray-200"
      >
        <h4>New Message</h4>
        <CloseIcon
          @click="() => (newMessageOpen = false)"
          class="cursor-pointer flex items-center justify-center hover:bg-gray-300 w-7 h-7 rounded-full"
          :size="19"
        />
      </div>

      <div class="relative flex items-center px-3.5 py-2">
        <h5 class="text-sm text-gray-700">To</h5>
        <input
          v-model="toEmail"
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
          type="email"
        />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
      </div>

      <div class="relative flex items-center px-3.5 py-2">
        <h5 class="text-sm text-gray-700">Subject</h5>
        <input
          v-model="subject"
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
          type="text"
        />
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
      </div>

      <div class="m-3">
        <textarea
        v-model="body"
          style="resize: none"
          class="w-full border-transparent border-none focus:ring-0 outline-none"
          cols="30"
          rows="15"
        ></textarea>
      </div>

      <div class="px-3 pb-4">
        <button
        @click="sendEmail"
          class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Send message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";

import IconComponent from "../../components/IconComponent.vue";
import UserComponent from "../../components/UserComponent.vue";

import PencilOutlineIcon from "vue-material-design-icons/PencilOutline.vue";
import InboxIcon from "vue-material-design-icons/Inbox.vue";
import StarOutlineIcon from "vue-material-design-icons/StarOutline.vue";
import ClockOutlineIcon from "vue-material-design-icons/ClockOutline.vue";
import SendOutlineIcon from "vue-material-design-icons/SendOutline.vue";
import FileOutlineIcon from "vue-material-design-icons/FileOutline.vue";
import PlusIcon from "vue-material-design-icons/Plus.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";

import { useUserStore } from "../../stores/user-store";
const userStore = useUserStore();

let newMessageOpen = ref(false);

let toEmail = ref('');
let subject = ref('');
let body = ref('');

const sendEmail = async () => {
 await userStore.sendEmail({
    toEmail: toEmail.value,
    subject: subject.value,
    body: body.value
 })

  newMessageOpen.value = false;
  toEmail.value = ''
  subject.value = ''
  body.value = ''
 
}

</script>
