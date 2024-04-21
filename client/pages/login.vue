<template>
    <AppSectionBox>
        <el-card class="flex flex-col items-center max-w-lg mx-auto py-2 pb-4">
            <AppHeadline :headlineType="HeadlinesTypes.H2">Login</AppHeadline>
            <form @submit.prevent="handleSubmitLoginForm" class="flex flex-col gap-2">
                <el-form-item label=" Login:">
                    <el-input v-model="userLoginData.userName" required />
                </el-form-item>
                <el-form-item label="Password:">
                    <el-input v-model="userLoginData.password" type="password" required />
                </el-form-item>
                <el-button type="success" class="mt-4">Primary</el-button>
            </form>
            <div class="mt-4 text-sm">
                <span>You don't have account? Then <NuxtLink to="/register" class="text-green-500 hover:text-green-400">
                        Register
                    </NuxtLink></span>
            </div>
        </el-card>
    </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from '@/enums/enums';
import type { UserLogin } from '@/types/types';

const userLoginData = reactive<UserLogin>({
    userName: '',
    password: ''
})

function handleSubmitLoginForm() {
    console.log('Login!');
}
</script>