<template>
  <div>
    <div class="container mx-auto py-8 px-8 max-w-2xl mt-16">
      <div v-if="!loading">
        <form
          @submit.prevent="submitForm"
          class="bg-white rounded-lg shadow-md p-6 mb-16"
        >
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700"
              >Product name</label
            >
            <input type="text" v-model="name" id="name" class="input-field" />
          </div>
          <div class="mb-4">
            <label
              for="description"
              class="block text-sm font-medium text-gray-700"
              >Product description</label
            >
            <textarea
              v-model="description"
              id="description"
              class="input-field textarea-field"
            ></textarea>
          </div>
          <div class="mb-4">
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Product price</label
            >
            <input
              type="number"
              v-model.number="price"
              id="price"
              class="input-field"
            />
          </div>
          <div class="mb-4">
            <label for="mob" class="block text-sm font-medium text-gray-700"
              >Your Phone Number</label
            >
            <input type="text" v-model="mob" id="mob" class="input-field" />
          </div>
          <div class="mb-4">
            <label for="image1" class="block text-sm font-medium text-gray-700"
              >Product Image 1</label
            >
            <input
              type="file"
              @change="onFileChange($event, 'image1')"
              id="image1"
              class="input-field"
            />
            <img
              v-if="imagePreviews.image1"
              :src="imagePreviews.image1"
              alt="Image Preview"
              class="image-preview"
            />
          </div>
          <div class="mb-4">
            <label for="image2" class="block text-sm font-medium text-gray-700"
              >Product Image 2</label
            >
            <input
              type="file"
              @change="onFileChange($event, 'image2')"
              id="image2"
              class="input-field"
            />
            <img
              v-if="imagePreviews.image2"
              :src="imagePreviews.image2"
              alt="Image Preview"
              class="image-preview"
            />
          </div>
          <div class="mb-4">
            <label for="image3" class="block text-sm font-medium text-gray-700"
              >Product Image 3</label
            >
            <input
              type="file"
              @change="onFileChange($event, 'image3')"
              id="image3"
              class="input-field"
            />
            <img
              v-if="imagePreviews.image3"
              :src="imagePreviews.image3"
              alt="Image Preview"
              class="image-preview"
            />
          </div>
          <button type="submit" class="submit-button bttn">Add Product</button>
        </form>
      </div>
      <div v-else class="flex justify-center items-center">
        <semipolar-spinner
          :animation-duration="2000"
          :size="65"
          color="#1F547F"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { addDoc, collection } from "firebase/firestore";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "@/firebase/init";
import Footer from "@/components/Footer.vue";
import { SemipolarSpinner } from "epic-spinners";

export default {
  name: "ProductForm",
  components: {
    Footer,
    SemipolarSpinner,
  },
  setup() {
    const router = useRouter();
    const name = ref("");
    const description = ref("");
    const price = ref(null);
    const mob = ref("");
    const images = ref({
      image1: null,
      image2: null,
      image3: null,
    });
    const imagePreviews = ref({
      image1: null,
      image2: null,
      image3: null,
    });
    const loading = ref(false);

    const onFileChange = (event, imageKey) => {
      const file = event.target.files[0];
      if (file) {
        images.value[imageKey] = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          imagePreviews.value[imageKey] = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const uploadImage = async (file) => {
      const fileRef = storageRef(storage, `products/${file.name}`);
      await uploadBytes(fileRef, file);
      return getDownloadURL(fileRef);
    };

    const submitForm = async () => {
      try {
        loading.value = true;
        const imageUrls = {};
        for (const [key, file] of Object.entries(images.value)) {
          if (file) {
            imageUrls[key] = await uploadImage(file);
          }
        }

        const productData = {
          name: name.value,
          description: description.value,
          price: price.value,
          mob: mob.value,
          image1: imageUrls.image1 || "",
          image2: imageUrls.image2 || "",
          image3: imageUrls.image3 || "",
        };

        await addDoc(collection(db, "products"), productData);
        console.log("Product added successfully:", productData);

        name.value = "";
        description.value = "";
        price.value = null;
        mob.value = "";
        images.value = { image1: null, image2: null, image3: null };
        imagePreviews.value = { image1: null, image2: null, image3: null };

        loading.value = false; // Reset loading state

        setTimeout(() => {
          router.push({ name: "Products" });
        }, 2000);
      } catch (error) {
        console.error("Error adding product:", error);
        loading.value = false; // Reset loading state in case of error
      }
    };

    return {
      name,
      description,
      price,
      mob,
      images,
      imagePreviews,
      onFileChange,
      submitForm,
      loading,
    };
  },
};
</script>

<style scoped>
.input-field {
  width: 100%;
  height: 40px;
  border: 1px solid #d1d5db;
  padding: 0.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease-in-out;
  box-sizing: border-box;
}
.input-field:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
}
.textarea-field {
  resize: none;
  height: auto;
  min-height: 80px;
}
.image-preview {
  margin-top: 0.5rem;
  max-width: 100%;
  max-height: 150px;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
.submit-button {
  width: 100%;
  padding: 0.5rem 1rem;
  color: #ffffff;
  background-color: #6366f1;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}
.submit-button:hover {
  background-color: #4f46e5;
}
</style>
