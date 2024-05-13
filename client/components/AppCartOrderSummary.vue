<template>
  <el-card class="md:sticky md:top-20">
    <AppHeadline :headlineType="HeadlinesTypes.H2">Order summary</AppHeadline>
    <div>
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
          {{ name }}
        </li>
      </ul>
    </div>
    <div>
      <form @submit.prevent="handleSubmitApplyCoupon" class="flex gap-1">
        <el-form-item class="form-input-box w-full">
          <el-input v-model="coupon" required placeholder="Coupon Code" />
        </el-form-item>
        <el-button native-type="submit" type="success">Apply</el-button>
      </form>
    </div>
    <div>
      <div>
        <span>Subtotal</span>
        <span>90 zł</span>
      </div>
      <div>
        <span>Shipping</span>
        <span>+0 zł</span>
      </div>
      <div>
        <span>Total</span>
        <span>30 zł</span>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { HeadlinesTypes } from "@/enums/enums";

const cart = useCart();

const coupon = ref("");

function handleSubmitApplyCoupon() {
  console.log("Dodaj kupon");
}
</script>
