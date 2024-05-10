<template>
  <AppSectionBox>
    <el-card class="flex flex-col items-center max-w-lg mx-auto py-2 pb-4">
      <AppHeadline :headlineType="HeadlinesTypes.H2" class="text-center">Contact</AppHeadline>
      <form @submit.prevent="handleSubmitSendMessage" class="flex flex-col gap-2 md:w-80">
        <el-form-item label=" Name:" class="form-input-box">
          <el-input v-model="contactFormData.name" required />
        </el-form-item>
        <el-form-item label="E-mail:" class="form-input-box">
          <el-input v-model="contactFormData.email" type="e-mail" required />
        </el-form-item>
        <el-form-item label="Phone:" class="form-input-box">
          <el-input v-model="contactFormData.phone" type="tel" />
        </el-form-item>
        <el-form-item label="Message:" class="form-input-box">
          <el-input v-model="contactFormData.message" type="textarea" />
        </el-form-item>
        <el-button native-type="submit" type="success" class="mt-4">Send</el-button>
      </form>
    </el-card>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import type { MessageFormData, UserData } from '@/types/types';

const config = useRuntimeConfig();

const contactFormData = reactive<MessageFormData>({
  name: '',
  email: '',
  phone: '',
  message: ''
})

async function handleSubmitSendMessage() {
  try {
    const { name, email, phone, message } = contactFormData;

    const res = await useFetch(`${config.public.baseURL}/messages`, {
      method: "POST",
      body: {
        data: {
          name: name,
          email: email,
          phone: phone,
          message: message,
        }
      },
      headers: {
        Authorization: `bearer ${config.public.apiKey}`,
      }
    });

    if (!!res.error.value) {
      throw new Error(res.error.value.data.error.message);
    }

    ElNotification({
      title: "Thanks!",
      message: "Thank you for message!",
      type: "success",
    });

    for (let key in contactFormData) {
      contactFormData[key as keyof typeof contactFormData] = '';
    }
  } catch (err) {
    ElNotification({
      title: "Error",
      message: err as string,
      type: "error",
    });
  }
}

function loadUserData() {
  const LoggedUserJSONData = window.localStorage.getItem("userData");

  if (LoggedUserJSONData) {
    const loggedUserData = JSON.parse(LoggedUserJSONData) as UserData;
    contactFormData.name = loggedUserData.name;
    contactFormData.email = loggedUserData.email;
  }
}

loadUserData();
</script>