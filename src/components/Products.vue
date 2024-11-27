<template>
  <div>
    <Navbar />
    <div class="sm:px-12 sm:py-6 px-6 pt-3 mb-32 mt-20">
      <h1 class="text-3xl font-semibold mb-6 primary">Products</h1>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'ProductDetail', params: { id: product.id } }"
          class="bg-white rounded-lg overflow-hidden shadow-md flex flex-col py-2"
        >
          <div class="flex justify-center">
            <img
              :src="product.image1"
              :alt="product.name"
              class="w-56 h-56 object-cover object-center"
            />
          </div>

          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-800 mt-2 font-semibold">${{ product.price }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { db } from "@/firebase/init";
import { collection, getDocs } from "firebase/firestore";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      products: [],
    };
  },
  async mounted() {
    await this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        this.products.push({
          id: doc.id,
          ...doc.data(),
        });
      });
    },
  },
};
</script>

<style scoped></style>
