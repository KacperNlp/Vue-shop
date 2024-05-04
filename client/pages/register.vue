<template>
    <AppSectionBox>
        <el-card class="flex flex-col items-center max-w-xl mx-auto py-2 pb-4">
            <AppHeadline :headlineType="HeadlinesTypes.H2" class="text-center">Register</AppHeadline>
            <form @submit.prevent="handleSubmitRegisterForm" class="flex flex-col gap-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <el-form-item label=" Login:" class="form-input-box">
                        <el-input v-model="userLoginData.userName" required />
                    </el-form-item>
                    <el-form-item label="E-mail:" class="form-input-box">
                        <el-input v-model="userLoginData.email" type="email" required />
                    </el-form-item>
                    <el-form-item label="Password:" class="form-input-box">
                        <el-input v-model="userLoginData.password" type="password" required />
                    </el-form-item>
                    <el-form-item label="Repeat password:" class="form-input-box">
                        <el-input v-model="userLoginData.passwordRepeat" type="password" required />
                    </el-form-item>
                    <el-form-item label="Name:" class="form-input-box">
                        <el-input v-model="userLoginData.name" required />
                    </el-form-item>
                    <el-form-item label="Surname:" class="form-input-box">
                        <el-input v-model="userLoginData.suername" required />
                    </el-form-item>
                </div>
                <el-button type="success" class="mt-4">Register</el-button>
            </form>
            <div class="mt-4 text-sm text-center">
                <span>
                    You have already account? Then <NuxtLink to="/login" class="text-green-500 hover:text-green-400">
                        Login</NuxtLink>
                </span>
            </div>
        </el-card>
    </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from '@/enums/enums';
import type { UserRegister } from '@/types/types';

const userLoginData = reactive<UserRegister>({
    userName: '',
    password: '',
    passwordRepeat: '',
    name: '',
    surname: '',
    email: ''
})

async function handleSubmitRegisterForm() {
    try {
        await useAPIFetch("/auth/local/register");
    } catch (err) {
        ElNotification({
            title: 'Error',
            message: 'Sorry, we have error with register, please try again later!',
            type: 'error',
        })
    }
}
</script>
