<template>
  <header
    :class="{
      'bg-secondary': isScrolled || !isHomePage,
      'bg-transparent': !isScrolled && isHomePage,
    }"
    class="sm:px-0 sm:py-6 px-6 py-3 fixed top-0 w-full z-50"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="home-link">
        <img :src="logoImage" alt="logo" class="w-44" />
      </router-link>

      <div class="hidden md:flex space-x-4 text-white primary">
        <!-- Display "Admin Panel" link only if user is logged in -->
        <router-link
          to="/admin"
          v-if="user"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
          >Admin Panel</router-link
        >
        <!-- Other navigation links -->
        <router-link
          to="/"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
          >Home</router-link
        >
        <router-link
          to="/products"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
          >Products</router-link
        >
        <router-link
          v-if="!user"
          to="/login"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
          >Login</router-link
        >
        <router-link
          v-if="!user"
          to="/signup"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
          >Sign Up</router-link
        >
        <button
          v-if="user"
          @click="logout"
          class="text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"
        >
          Log Out
        </button>
      </div>
      <!-- Mobile menu button and responsive menu -->
      <div class="md:hidden text-white">
        <button @click="toggleMenu" class="focus:outline-none primary">
          <svg
            v-if="!isMenuOpen"
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
    <!-- Responsive menu -->
    <div v-if="isMenuOpen" class="md:hidden">
      <div
        class="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-10"
        @click="toggleMenu"
      >
        <div class="flex flex-col items-center pt-20">
          <router-link
            v-if="user"
            to="/admin"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
          >
            Admin Panel
          </router-link>
          <router-link
            to="/"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
            @click="toggleMenu"
            >Home</router-link
          >
          <router-link
            to="/products"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
            @click="toggleMenu"
            >Products</router-link
          >
          <router-link
            v-if="!user"
            to="/login"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
            @click="toggleMenu"
            >Login</router-link
          >
          <router-link
            v-if="!user"
            to="/signup"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
            @click="toggleMenu"
            >Sign Up</router-link
          >
          <button
            v-if="user"
            @click="logout"
            class="text-lg text-white hover:text-gray-200 mb-4 primary"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { userState, auth } from "@/firebase/init";
import { signOut } from "firebase/auth";
import { useRouter, useRoute } from "vue-router";
import { useWindowScroll } from "@vueuse/core";
import logoImage from "@/assets/images/logo.png";

export default {
  name: "Navbar",
  setup() {
    const isMenuOpen = ref(false);
    const router = useRouter();
    const route = useRoute();

    const user = computed(() => userState.user);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const logout = async () => {
      try {
        await signOut(auth);
        router.push("/");
        console.log("Logout successful");
      } catch (error) {
        console.error("Logout error", error);
      }
    };

    const isScrolled = ref(false);
    const { y } = useWindowScroll();

    onMounted(() => {
      y.value > 0 ? (isScrolled.value = true) : (isScrolled.value = false);
    });

    window.addEventListener("scroll", () => {
      y.value > 0 ? (isScrolled.value = true) : (isScrolled.value = false);
    });

    const isHomePage = computed(() => route.path === "/");

    return {
      isMenuOpen,
      toggleMenu,
      user,
      logout,
      isScrolled,
      isHomePage,
      logoImage,
    };
  },
};
</script>

<style scoped>
nav > * {
  animation: fadeInDown 0.5s ease-in-out;
}

.md\:hidden > div {
  z-index: 5;
}

.md\:hidden button,
.md\:hidden a {
  position: relative;
  z-index: 15;
}

.md\:hidden button svg {
  color: white;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
