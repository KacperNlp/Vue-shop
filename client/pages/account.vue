<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <div>
      <AppHeadline :headlineType="HeadlinesTypes.H2"
        >Hi {{ userData.name }}!</AppHeadline
      >
      <section class="flex flex-col gap-2">
        <AppHeadline :headlineType="HeadlinesTypes.H3">
          Inforamcję o koncie:
        </AppHeadline>
        <span>Imię: {{ userData.name }}</span>
        <span>Nazwisko: {{ userData.surname }}</span>
        <span>Nick: {{ userData.username }}</span>
        <span>email: {{ userData.email }}</span>
      </section>
      <section class="mt-8">
        <AppHeadline :headlineType="HeadlinesTypes.H3"> Orders </AppHeadline>
      </section>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import type { UserData } from "@/types/types";

const { $authUser } = useNuxtApp();

const router = useRouter();

const userData = reactive<UserData>({
  blocked: false,
  confirmed: false,
  createdAt: "",
  email: "",
  id: "",
  name: "",
  surname: "",
  username: "",
});

async function loadUserData() {
  try {
    const loggedUserJSONData = window.localStorage.getItem("userData");
    const userJWT = window.localStorage.getItem("jwt");

    if (!userJWT) {
      router.push({ path: "/login" });
    }

    if (loggedUserJSONData) {
      const loggedUserData = JSON.parse(loggedUserJSONData);
      const [userDataFromAPI, userOrders] = Promise.all([
        await useAPIFetch(`/users/${loggedUserData.id}`),
        await useAPIFetch(`/orders?user=${loggedUserData.id}`),
      ]);

      for (const [key, value] of Object.entries(userDataFromAPI)) {
        userData[key] = value;
      }

      console.log(userOrders);
    }
  } catch (err) {
    ElNotification({
      title: "Error",
      message: err as string,
      type: "error",
    });
  }
}

$authUser();
await loadUserData();
</script>
