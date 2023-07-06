<template>
  <div id="HomeView" class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
          @click="deleteSelected"
          class="-m-2 -ml-2.5"
          iconString="trash"
          iconColor="#636363"
          :iconSize="22"
          hoverColor="hover:bg-gray-300"
          text="Delete selected"
        />
        <h4 class="text-xs text-gray-500">1-50 of 153</h4>
      </div>
    </div>

    <!-- message rows -->
    <div v-for="email in userStore.emails" :key="email.id">
      <MessageRow
        :id="email.id"
        :from="email.firstName + ' ' + email.lastName"
        :subject="email.subject"
        :body="email.body"
        :time="email.createdAt"
        :hasViewed="email.hasViewed"
        @selectedId="selectedId"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import IconComponent from "../components/IconComponent.vue";
import MessageRow from "../components/MessageRow.vue";
import { useUserStore } from "../stores/user-store";

const userStore = useUserStore();

let emailsToDelete = [];

onMounted(() => {
  userStore.getEmailByEmailAddress();
});

const selectedId = (e) => {
  if (!emailsToDelete.length) {
    emailsToDelete.push(e.id);
  } else if (e.bool && !emailsToDelete.includes(e.id)) {
    emailsToDelete.push(e.id);
  } else if (!e.bool && emailsToDelete.includes(e.id)) {
    const index = emailsToDelete.indexOf(e.id);
    if (index > -1) {
      emailsToDelete.splice(index, 1);
    }
  }
};

const deleteSelected = () => {
  if (!emailsToDelete.length) return;

  let res = confirm('Are you sure you want to delete the selected emails?')
  if (res) {
    emailsToDelete.forEach(async (id) => {
      await userStore.deleteEmail(id)
    })
  } 

  emailsToDelete = [];

}
</script>
