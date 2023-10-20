<template>
  <div>
    <h1>Hello there!</h1>
    <ul>
      <li v-for="product in getPromotedProducts" :key="product.id">
        <p>{{ product.name }}</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'IndexPage',

  computed: {
    ...mapGetters({
      getPromotedProducts: 'shop/getPromotedProducts'
    }),
  }
})
</script>
