<template>
  <AppSectionBox class="flex flex-col lg:flex-row gap-16 xl:gap-32">
    <div class="p-4 w-72 bg-gray-200">Filters</div>
    <div class="w-full">
      <ul class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <li v-for="{ id, name, price, discount, img } in products" :ke="id">
          <AppProductBox
            :id="id"
            :name="name"
            :price="price"
            :discount="discount"
            :img="img"
          />
        </li>
      </ul>
    </div>
  </AppSectionBox>
</template>

<script setup lang="ts">
const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 13,
    discount: null,
    img: '/imgs/tshirt.jpg'
  },
  {
    id: '2',
    name: 'Product 2',
    price: 12,
    discount: null,
    img: '/imgs/tshirt.jpg'
  },
  {
    id: '3',
    name: 'Product 3',
    price: 10,
    discount: 7,
    img: '/imgs/tshirt.jpg'
  },
  {
    id: '4',
    name: 'Product 4',
    price: 25,
    discount: 7,
    img: '/imgs/tshirt.jpg'
  }
]
</script>