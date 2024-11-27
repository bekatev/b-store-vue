<template>
  <div>
    <Navbar />
    <div v-if="loading" class="my-16 text-center mt-16">
      <div class="container mx-auto py-8 px-8 max-w-2xl">
        <h1 class="text-3xl font-semibold mb-4 primary">
          Successfully Signed Up!
        </h1>
        <div class="flex justify-center items-center">
          <semipolar-spinner
            :animation-duration="2000"
            :size="65"
            color="#1F547F"
          />
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto py-8 px-8 max-w-2xl mt-16">
      <h1 class="text-3xl font-semibold mb-4 primary">Sign Up</h1>
      <form @submit.prevent="signUp" class="bg-white rounded-lg shadow-md p-6">
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
          <p
            v-if="password.length > 0 && password.length < 6"
            class="text-red-500 text-sm mt-2"
          >
            Password must be at least 6 characters long.
          </p>
        </div>
        <button
          type="submit"
          class="w-full py-2 px-4 text-white rounded-md bttn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/init";
import { useRouter } from "vue-router";
import { SemipolarSpinner } from "epic-spinners";

export default {
  name: "SignUp",
  components: {
    Navbar,
    Footer,
    SemipolarSpinner,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter();
    const loading = ref(false);

    const signUp = async () => {
      if (password.value.length < 6) {
        console.error("Password must be at least 6 characters long");
        return;
      }
      try {
        loading.value = true;
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log("Sign up successful");
        setTimeout(() => {
          loading.value = false;
          router.push("/products");
        }, 2000);
      } catch (error) {
        console.error("Sign up error", error);
        loading.value = false;
      }
    };

    return { email, password, signUp, loading };
  },
};
</script>
