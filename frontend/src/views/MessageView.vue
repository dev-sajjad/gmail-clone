<template>
  <div class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm">
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <div class="flex">
          <RouterLink to="/email">
          <IconComponent
            iconString="back"
            iconColor="#636363"
            :iconSize= "22"
            hoverColor="hover:bg-gray-300"
            text="Back to inbox"
          />
        </RouterLink>
        <IconComponent
            @click="deleteEmail(email.id)"
            class="ml-3"
            iconString="trash"
            iconColor="#636363"
            :iconSize= "22"
            hoverColor="hover:bg-gray-300"
            text="Delete"
          />
        </div>
        <div class="text-xs text-gray-500">1-50 of 153</div>
      </div>
    </div>

  <div class="overflow-x-hidden h-[656px] overscroll-y-auto">
    <h3 class="w-full text-xl ml-20 font-light pt-5">{{ email.subject }}</h3>

    <div class="w-full flex">
      <img class="rounded-full mt-8 mx-5 w-10 h-10" :src="email.picture" alt="img">
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm mt-4 mb-4">
          <div class="w-full flex justify-between items-center">
            <h4>{{ email.fromEmail }}</h4>
            <p>{{ email.createdAt }}</p>
          </div>
          <span class="text-xs font-normal text-gray-500">to me</span>
        </div>
        <p class="">{{ email.body }}</p>
      </div>
    </div>
  </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import IconComponent from "../components/IconComponent.vue";
import { useUserStore } from "../stores/user-store";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();

let email = ref({})

onMounted(async() => {
  const res = await userStore.getEmailById(route.params.id)

  await userStore.emailHasBeenViewed(res.id)

  email.value = {
    id: res.id,
    body: res.body,
    firstName: res.firstName,
    lastName: res.lastName,
    fromEmail: res.fromEmail,
    subject: res.subject,
    picture: res.picture,
    hasViewed: res.hasViewed,
    toEmail: res.toEmail,
    createdAt: res.createdAt

  }
})
 
const deleteEmail = async (id) => {
  let res = confirm("Are you sure you want to delete this email?");

  if (res) {
   await userStore.deleteEmail(id);
    setTimeout(() => {
      router.push('/email')
    }, 200);
  }
}

</script>
