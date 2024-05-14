<template>
  <el-card class="md:sticky md:top-20">
    <AppHeadline :headlineType="HeadlinesTypes.H2">Order summary</AppHeadline>
    <div class="my-4">
      <ul class="flex flex-col gap-2">
        <li
          v-for="{
            id,
            name,
            price,
            discount,
            thumbnail,
            reviews,
            quantity,
          } in cart.addedProducts"
          :key="id"
        >
          <AppCartProductSidebar
            :id="id"
            :name="name"
            :price="price"
            :discount="discount"
            :thumbnail="thumbnail"
            :quantity="quantity"
            :reviews="reviews"
          />
        </li>
      </ul>
    </div>
    <div class="my-8">
      <form @submit.prevent="handleSubmitApplyCoupon" class="flex gap-1">
        <el-form-item class="form-input-box w-full">
          <el-input v-model="coupon" required placeholder="Coupon Code" />
        </el-form-item>
        <el-button native-type="submit" type="success">Apply</el-button>
      </form>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex justify-between border-b py-2">
        <span>Subtotal</span>
        <span>{{ $currency(cart.getCartTotalAmount) }}</span>
      </div>
      <div class="flex justify-between border-b py-2">
        <span>Shipping</span>
        <span>+{{ $currency(shipping) }}</span>
      </div>
      <div class="flex justify-between py-2">
        <strong>Total</strong>
        <strong>{{ $currency(total) }}</strong>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

interface Props {
  shipping: number;
  total: number;
}

defineProps<Props>();

const cart = useCart();

const coupon = ref("");

function handleSubmitApplyCoupon() {
  console.log("Dodaj kupon");
}
</script>
