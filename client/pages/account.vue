<template>
  <AppSectionBox class="flex flex-col md:flex-row gap-4 lg:gap-8 xl:gap-16">
    <AppAccountSideNav />
    <div class="w-full max-w-screen-md">
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
      <section v-if="userOrders.length" class="mt-8">
        <AppHeadline :headlineType="HeadlinesTypes.H3">Orders</AppHeadline>
        <el-table :data="userOrders" stripe>
          <el-table-column label="Date" width="180">
            <template #default="scope">
              <span>{{
                getFormattedDate(scope.row.attributes.createdAt)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="Total" width="180">
            <template #default="scope">
              <span>{{
                getOrderTotalCost(scope.row.attributes.products)
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="Status">
            <template #default="scope">
              <span>{{ getOrderStatus(scope.row.attributes.status) }}</span>
            </template>
          </el-table-column>
        </el-table>
      </section>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes, OrderStatus, OrderStatusText } from "@/enums/enums";
import type { UserData } from "@/types/types";

const { $authUser, $currency } = useNuxtApp();

const router = useRouter();

const userOrders = ref([]);
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
      const [userDataFromAPI, userOrdersData] = await Promise.all([
        await useAPIFetch(`/users/${loggedUserData.id}`),
        await useAPIFetch(`/orders?user=${loggedUserData.id}`),
      ]);

      console.log(userDataFromAPI);
      for (const [key, value] of Object.entries(userDataFromAPI)) {
        userData[key] = value;
      }

      console.log(userOrdersData);
      userOrders.value = userOrdersData;
    }
  } catch (err) {
    ElNotification({
      title: "Error",
      message: err as string,
      type: "error",
    });
  }
}

function getFormattedDate(isoString: string) {
  const date = new Date(isoString);

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth();

  return `${day}-${month}-${date.getFullYear()}`;
}

function getOrderTotalCost(products: []) {
  let totalCost = 0;

  products.forEach(({ discount, quantity, price }) => {
    if (discount) {
      totalCost += discount * quantity;
    } else {
      totalCost += price * quantity;
    }
  });

  return $currency(totalCost);
}

function getOrderStatus(orderStatus: OrderStatus) {
  const statusObject = OrderStatusText.find(
    (item) => item.name === orderStatus
  );
  return statusObject ? statusObject.text : "Unknown status";
}

$authUser();
await loadUserData();
</script>
