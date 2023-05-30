<template>
    <div class="grid h-screen place-items-center">
        <div>
            <img width="280" src="../assets/img/GmailLogin.png" alt="">
            <div class="flex justify-center">
                <GoogleLogin :callback="callback" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { GoogleLogin } from 'vue3-google-login';
import { useUserStore } from '../stores/user-store';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter();

const callback = async (response) => {
    await userStore.getUserDetailsFromGoogle(response);
    setTimeout(() => {router.push('/email')}, 200);
}

</script> 