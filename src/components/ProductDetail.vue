<template>
  <div>
    <Navbar />
    <div class="p-5 md:p-32 my-16 md:my-0">
      <div v-if="product">
        <h1 class="text-4xl font-bold mb-6 primary">{{ product.name }}</h1>
        <div class="flex flex-col md:flex-row">
          <div
            class="relative mb-6 md:mb-0 text-center md:text-left md:pr-12 pr-0 md:pb-0 pb-12"
          >
            <div
              class="relative max-w-[600px] md:w-96 max-h-full overflow-hidden rounded-lg shadow-sm text-left"
            >
              <img
                :src="product.images[currentImage]"
                :alt="product.name"
                class="w-full h-full object-cover object-center"
              />
              <!-- Left Arrow Button -->
              <button
                class="absolute top-1-2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full bg-opacity-20 hover:bg-opacity-90"
                @click="prevImage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <!-- Right Arrow Button -->
              <button
                class="absolute top-1-2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full bg-opacity-20 hover:bg-opacity-90"
                @click="nextImage"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="text-lg text-gray-700">
            <div class="text-2xl primary font-semibold mb-8">
              {{ product.price }} $
            </div>
            <p class="mb-4 primary text-base">
              {{ product.description }}
            </p>
            <p class="mb-4 primary text-base">
              Phone Number: {{ product.mob }}
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { db } from "@/firebase/init";
import { doc, getDoc } from "firebase/firestore";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      product: null,
      currentImage: 0,
    };
  },
  async mounted() {
    const productId = this.$route.params.id;
    await this.fetchProduct(productId);
  },
  methods: {
    async fetchProduct(id) {
      const productDoc = await getDoc(doc(db, "products", id));
      if (productDoc.exists()) {
        const productData = productDoc.data();
        const images = [
          productData.image1,
          productData.image2,
          productData.image3,
        ].filter(Boolean);
        this.product = { id: productDoc.id, ...productData, images };
      } else {
        console.error("No such product!");
      }
    },
    nextImage() {
      if (this.product) {
        this.currentImage =
          (this.currentImage + 1) % this.product.images.length;
      }
    },
    prevImage() {
      if (this.product) {
        this.currentImage =
          (this.currentImage - 1 + this.product.images.length) %
          this.product.images.length;
      }
    },
  },
};
</script>

<style scoped>
.top-1-2 {
  top: 50%;
}

.md\:flex {
  display: flex;
}

.md\:items-start {
  align-items: flex-start;
}

.md\:space-x-6 {
  margin-right: 1.5rem;
}

.md\:mb-0 {
  margin-bottom: 0;
}

.md\:w-80 {
  width: 20rem;
}

.md\:flex-1 {
  flex: 1;
}
</style>
