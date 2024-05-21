<template>
  <AppSectionBox
    v-if="cart.numberOfProductsAddedToCart"
    class="flex flex-col gap-4 md:grid md:grid-cols-[2fr_1fr]"
  >
    <div>
      <AppHeadline :headlineType="HeadlinesTypes.H1">Checkout</AppHeadline>
      <span v-if="!isLoggedIn" class="text-sm text-gray-600"
        >Already have an account? <NuxtLink to="/login">Log in</NuxtLink>.
      </span>
      <form action="POST" class="max-w-2xl mt-4">
        <section class="my-6">
          <AppHeadline :headlineType="HeadlinesTypes.H3"
            >Your data:</AppHeadline
          >
          <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
            <el-form-item label="First Name:" class="form-input-box">
              <el-input v-model="orderData.firstName" required />
            </el-form-item>
            <el-form-item label="Last Name:" class="form-input-box">
              <el-input v-model="orderData.lastName" required />
            </el-form-item>
            <el-form-item label="E-mail:" class="form-input-box">
              <el-input v-model="orderData.email" type="email" required />
            </el-form-item>
            <el-form-item label="Phone:" class="form-input-box">
              <el-input v-model="orderData.phone" type="tel" required />
            </el-form-item>
          </div>
        </section>
        <section class="my-6 md:my-12">
          <AppHeadline :headlineType="HeadlinesTypes.H3">Address:</AppHeadline>
          <div class="flex flex-col gap-4 md:grid md:grid-cols-2">
            <el-form-item label="Street Address:" class="form-input-box">
              <el-input v-model="orderData.address" required />
            </el-form-item>
            <el-form-item label="City:" class="form-input-box">
              <el-input v-model="orderData.city" required />
            </el-form-item>
            <el-form-item label="ZIP code:" class="form-input-box">
              <el-input v-model="orderData.zip" required />
            </el-form-item>
          </div>
        </section>
        <section class="my-6 md:my-12">
          <AppHeadline :headlineType="HeadlinesTypes.H3"
            >Select Shipping Method</AppHeadline
          >
          <el-radio-group v-model="orderData.shipping">
            <el-radio :value="10" size="large" class="bg-white" border
              >Standard Shipping 10zł</el-radio
            >
            <el-radio :value="25" size="large" class="bg-white" border
              >Express Shipping 25zł</el-radio
            >
          </el-radio-group>
        </section>
        <section class="my-6 md:my-12">
          <AppHeadline :headlineType="HeadlinesTypes.H3"
            >Payment Options</AppHeadline
          >
          <el-radio-group v-model="orderData.paymentOption">
            <el-radio value="card" size="large" class="bg-white" border>
              <Icon
                name="solar:card-bold"
                width="24"
                height="24"
                class="text-gray-600 mr-2"
              />Credit Card
            </el-radio>
            <el-radio value="pay-pal" size="large" class="bg-white" border>
              <Icon
                name="ic:baseline-paypal"
                width="24"
                height="24"
                class="text-gray-600 mr-2"
              />PayPal</el-radio
            >
            <el-radio value="cash" size="large" class="bg-white" border>
              <Icon
                name="vaadin:cash"
                width="24"
                height="24"
                class="text-gray-600 mr-2"
              />Cash</el-radio
            >
          </el-radio-group>
        </section>
        <section class="my-6 md:my-12">
          <AppHeadline :headlineType="HeadlinesTypes.H3"
            >Order Note (Optional)</AppHeadline
          >
          <el-input
            v-model="orderData.orderNote"
            maxlength="150"
            placeholder="Your note..."
            show-word-limit
            type="textarea"
          />
        </section>
      </form>
    </div>
    <div>
      <AppCartOrderSummary
        :shipping="orderData.shipping"
        :total="orderData.total"
        @submitOrder="handleSubmitFinishOrder"
      />
    </div>
  </AppSectionBox>
  <AppSectionBox v-else class="text-center">
    <AppHeadline :headlineType="HeadlinesTypes.H2">
      Your cart is empty
      <Icon name="mdi:cart-remove" width="32" height="32" class="ml-2" />
    </AppHeadline>
  </AppSectionBox>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";
import { loadStripe } from "@stripe/stripe-js/pure";

loadStripe.setLoadParameters({ advancedFraudSignals: false });

const cart = useCart();
const config = useRuntimeConfig();
const router = useRouter();

const stripe = await loadStripe(config.public.stripeKey);

const orderData = reactive({
  user: null,
  email: null,
  firstName: null,
  lastName: null,
  city: null,
  zip: null,
  address: null,
  phone: null,
  shipping: 10,
  paymentOption: "card",
  orderNote: "",
  total: 0,
  products: cart.addedProducts,
});

const isLoggedIn = computed(() => {
  const isLoggedIn = window.localStorage.getItem("jwt");
  return isLoggedIn;
});

async function handleSubmitFinishOrder() {
  try {
    const headers = {
      Authorization: `bearer ${config.public.apiKey}`,
    };

    const res = await useFetch(`${config.public.baseURL}/orders`, {
      method: "POST",
      headers,
      body: {
        data: {
          ...orderData,
        },
      },
    });

    await stripe.redirectToCheckout({
      sessionId: res.data.value.stripeSession.id,
    });

    ElNotification({
      title: "Success",
      message: "Thank you! Your ordred is just send to us!",
      type: "success",
    });

    cart.clearWholeCart();

    router.push({ path: "thank-you" });
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "We cannot send your order, please try later!",
      type: "error",
    });
  }
}

async function fetchUserData() {
  try {
    if (!isLoggedIn) return;

    const loggedUserJSONData = window.localStorage.getItem("userData");

    if (loggedUserJSONData) {
      const loggedUserData = JSON.parse(loggedUserJSONData);
      const data = await useAPIFetch(`/users/${loggedUserData.id}`);

      orderData.user = loggedUserData.id;
      orderData.email = data.email;
      orderData.firstName = data.name;
      orderData.lastName = data.surname;
    }
  } catch (err) {
    ElNotification({
      title: "Error",
      message: "We cannot fetch user data!",
      type: "error",
    });
  }
}

function setTotalCartAmount() {
  orderData.total = cart.getCartTotalAmount + orderData.shipping;
}

watch(cart.addedProducts, setTotalCartAmount);

watch(() => orderData.shipping, setTotalCartAmount);

await fetchUserData();
setTotalCartAmount();
</script>
