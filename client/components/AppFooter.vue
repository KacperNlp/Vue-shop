<template>
  <footer class="bg-white py-4">
    <AppSectionBox class="flex flex-col justify-between gap-16 xl:flex-row">
      <div class="max-w-md">
        <h3 class="lg:text-md font-bold text-gray-700 mb-2">ScriptCommerce</h3>
        <p class="text-sm text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          optio iste exercitationem quis eaque fugit nam distinctio? Quidem
          quasi voluptatibus deserunt aspernatur maiores exercitationem animi
          praesentium qui soluta culpa provident.
        </p>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap gap-16 2xl:gap-24"
      >
        <div v-for="{ id, columnHeadline, links } in footerNav" :key="id">
          <AppHeadline :headlineType="HeadlinesTypes.H4" class="mb-2">{{
            columnHeadline
          }}</AppHeadline>
          <ul class="flex flex-col gap-2">
            <li v-for="link in links" :key="link.id">
              <a class="text-sm hover:underline" :href="link.url">{{
                link.name
              }}</a>
            </li>
          </ul>
        </div>
      </div>
    </AppSectionBox>
    <section
      class="flex justify-between w-11/12 max-w-screen-xl mx-auto text-xs border-t pt-4"
    >
      <span>ScriptCommerce - by Kacper Nalepa</span>
      <div>
        <ul class="flex gap-4">
          <li v-for="{ id, icon, url } in socialMedia" :key="id">
            <a
              :href="url"
              class="w-4 h-4 inline-block bg-black/50 hover:bg-black duration-200"
            ></a>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script setup lng="ts">
import { HeadlinesTypes } from "@/enums/enums";

const socialMedia = [
  {
    id: 1,
    icon: "",
    url: "#",
  },
  {
    id: 2,
    icon: "",
    url: "#",
  },
  {
    id: 3,
    icon: "",
    url: "#",
  },
];

const footerNav = [
  {
    id: 1,
    columnHeadline: "Information",
    links: [
      {
        name: "About",
        url: "#",
        id: 1,
      },
      {
        name: "Careers",
        url: "#",
        id: 2,
      },
      {
        name: "About",
        url: "#",
        id: 3,
      },
    ],
  },
  {
    id: 2,
    columnHeadline: "Products",
    links: [
      {
        name: "New Arrivals",
        url: "#",
        id: 1,
      },
      {
        name: "On sale",
        url: "#",
        id: 2,
      },
      {
        name: "Top rated",
        url: "#",
        id: 3,
      },
      {
        name: "Gift Cards",
        url: "#",
        id: 4,
      },
    ],
  },
  {
    id: 3,
    columnHeadline: "Customer Service",
    links: [
      {
        name: "Contact Us",
        url: "#",
        id: 1,
      },
      {
        name: "Shipping & Returns",
        url: "#",
        id: 2,
      },
      {
        name: "Privacy Policy",
        url: "#",
        id: 3,
      },
      {
        name: "Terms & Conditions",
        url: "#",
        id: 4,
      },
    ],
  },
  {
    id: 4,
    columnHeadline: "My Account",
    links: [
      {
        name: "My Account",
        url: "#",
        id: 1,
      },
      {
        name: "Order History",
        url: "#",
        id: 2,
      },
      {
        name: "Wishlist",
        url: "#",
        id: 3,
      },
      {
        name: "Newsletter",
        url: "#",
        id: 4,
      },
    ],
  },
];
</script>
