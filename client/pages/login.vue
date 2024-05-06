<template>
  <AppSectionBox>
    <el-card class="flex flex-col items-center max-w-lg mx-auto py-2 pb-4">
      <AppHeadline :headlineType="HeadlinesTypes.H2" class="text-center"
        >Login</AppHeadline
      >
      <form @submit.prevent="handleSubmitLoginForm" class="flex flex-col gap-2">
        <el-form-item label=" Login:" class="form-input-box">
          <el-input v-model="userLoginData.userName" required />
        </el-form-item>
        <el-form-item label="Password:" class="form-input-box">
          <el-input v-model="userLoginData.password" type="password" required />
        </el-form-item>
        <el-button native-type="submit" type="success" class="mt-4"
          >Login</el-button
        >
      </form>
      <div class="mt-4 text-sm text-center">
        <span
          >You don't have account? Then
          <NuxtLink to="/register" class="text-green-500 hover:text-green-400">
            Register
          </NuxtLink></span
        >
      </div>
    </el-card>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import type { UserLogin } from "@/types/types";

const router = useRouter();
const config = useRuntimeConfig();

const userLoginData = reactive<UserLogin>({
  userName: "",
  password: "",
});

async function handleSubmitLoginForm() {
  try {
    const res = await useFetch(`${config.public.baseURL}/auth/local`, {
      method: "POST",
      body: {
        password: userLoginData.password,
        identifier: userLoginData.userName,
      },
    });

    if (!!res.error.value) {
      throw new Error(res.error.value.data.error.message);
    }

    const { jwt, user } = res.data.value;
    window.localStorage.setItem("jwt", jwt);
    window.localStorage.setItem("userData", JSON.stringify(user));

    router.push({ path: "/account" });
  } catch (err) {
    ElNotification({
      title: "Error",
      message: err as string,
      type: "error",
    });
  }
}
</script>
