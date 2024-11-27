<template>
  <Navbar />
  <div class="container mx-auto py-8 mt-16">
    <h1 class="text-3xl font-semibold mb-4 primary">Add Product</h1>
    <ProductForm />
  </div>
  <Footer />
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "AdminPanel",
  components: {
    ProductForm,
    Navbar,
    Footer,
  },
};
</script>
