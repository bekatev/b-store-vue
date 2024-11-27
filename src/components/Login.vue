<template>
  <div>
    <Navbar />
    <div class="container mx-auto py-8 px-8 max-w-2xl mt-16">
      <!-- Added max-w-md class -->
      <h1 class="text-3xl font-semibold mb-4 primary">Login</h1>
      <form @submit.prevent="login" class="bg-white rounded-lg shadow-md p-6">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            v-model="email"
            id="email"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            v-model="password"
            id="password"
            class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 bttn text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "vue-router";

export default {
  name: "Login",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const login = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        router.push("/");
        console.log("Login successful");
      } catch (error) {
        console.error("Login error", error);
      }
    };

    return { email, password, login };
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}

input:focus-visible {
  outline: none;
}
</style>
