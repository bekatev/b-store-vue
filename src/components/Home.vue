<template>
  <div>
    <Navbar />
    <main class="mx-auto mb-16">
      <!-- Section 1: Hero -->
      <section
        class="hero text-white pt-32 pb-8 md:flex md:items-center md:justify-center relative px-4"
      >
        <!-- For smaller screens (mobile), image on top -->
        <div class="md:hidden text-center mb-8">
          <img
            :src="heroImage"
            alt="Hero Image"
            class="mx-auto mb-8 rounded-lg"
          />
          <h1 class="text-4xl font-semibold mb-4 primary">
            Welcome to my Online Store
          </h1>
          <p class="text-lg mb-8 primary">Sign Up and sell your products!</p>
          <router-link to="/products">
            <button
              class="bttn text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Explore Products
            </button>
          </router-link>
        </div>
        <!-- For larger screens (desktop), text aligned to the left and image on the right -->
        <div class="hidden md:flex items-center justify-between w-full px-16">
          <div class="max-w-lg text-left">
            <h1 class="text-5xl font-semibold mb-4 primary">
              Welcome to my Online Store
            </h1>
            <p class="text-lg mb-8 primary">Sign Up and sell your products!</p>
            <router-link to="/products">
              <button
                class="bttn text-white font-bold py-3 px-6 rounded-full transition duration-300"
              >
                Explore Products
              </button>
            </router-link>
          </div>
          <div class="ml-8">
            <img :src="heroImage" alt="Product Image" class="rounded-lg" />
          </div>
        </div>
      </section>

      <!-- Key Features section -->
      <section class="features py-16 px-4">
        <div class="container mx-auto">
          <h2 class="text-3xl font-semibold mb-8 primary">Key Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="feature bg-primary rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold mb-3 primary">
                Explore Exciting New Products
              </h3>
              <p class="primary text-sm">
                Find the latest and greatest products in our ever-expanding
                catalog. From trending items to unique finds, there's always
                something new to discover.
              </p>
            </div>
            <div class="feature bg-primary rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold mb-3 primary">
                Showcase Your Products
              </h3>
              <p class="primary text-sm">
                Join our platform and showcase your products to a global
                audience. Whether you're a small business or a large retailer,
                our platform provides the tools you need to reach more customers
                and grow your business.
              </p>
            </div>
            <div class="feature bg-primary rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold mb-3 primary">
                Boost Your Sales
              </h3>
              <p class="primary text-sm">
                Accelerate your sales and increase your revenue with our
                streamlined selling process. Our platform offers seamless
                integration, powerful analytics, and dedicated support to help
                you become a fast seller in no time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import heroImage from "@/assets/images/1.png";
import bgImage from "@/assets/images/bg.jpeg";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      heroImage,
      bgImage,
    };
  },
};
</script>

<style scoped>
.hero {
  background-color: #1d1d1f;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.prod {
  background-image: url("@/assets/images/1.png");
}

@media (min-width: 768px) {
  .hero .max-w-lg {
    text-align: left;
  }
}

.feature {
  transition: transform 0.3s ease-in-out;
}

.feature:hover {
  transform: translateY(-5px);
}
</style>
