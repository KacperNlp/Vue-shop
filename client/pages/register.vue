<template>
  <AppSectionBox>
    <el-card class="flex flex-col items-center max-w-xl mx-auto py-2 pb-4">
      <AppHeadline :headlineType="HeadlinesTypes.H2" class="text-center"
        >Register</AppHeadline
      >
      <form
        @submit.prevent="handleSubmitRegisterForm"
        class="flex flex-col gap-2"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <el-form-item label=" Login:" class="form-input-box">
            <el-input v-model="userLoginData.userName" required />
          </el-form-item>
          <el-form-item label="E-mail:" class="form-input-box">
            <el-input v-model="userLoginData.email" type="email" required />
          </el-form-item>
          <el-form-item label="Password:" class="form-input-box">
            <el-input
              v-model="userLoginData.password"
              type="password"
              required
            />
          </el-form-item>
          <el-form-item label="Repeat password:" class="form-input-box">
            <el-input
              v-model="userLoginData.passwordRepeat"
              type="password"
              required
            />
          </el-form-item>
          <el-form-item label="Name:" class="form-input-box">
            <el-input v-model="userLoginData.name" required />
          </el-form-item>
          <el-form-item label="Surname:" class="form-input-box">
            <el-input v-model="userLoginData.surname" required />
          </el-form-item>
        </div>
        <el-button native-type="submit" type="success" class="mt-4"
          >Register</el-button
        >
      </form>
      <div class="mt-4 text-sm text-center">
        <span>
          You have already account? Then
          <NuxtLink to="/login" class="text-green-500 hover:text-green-400">
            Login</NuxtLink
          >
        </span>
      </div>
    </el-card>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import type { UserRegister } from "@/types/types";

const config = useRuntimeConfig();
const router = useRouter();

const userLoginData = reactive<UserRegister>({
  userName: "",
  password: "",
  passwordRepeat: "",
  name: "",
  surname: "",
  email: "",
});

async function handleSubmitRegisterForm() {
  try {
    const { userName, password, name, surname, email } = userLoginData;

    const res = await useFetch(`${config.public.baseURL}/auth/local/register`, {
      method: "POST",
      body: {
        name: name,
        surname: surname,
        password: password,
        email: email,
        username: userName,
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
