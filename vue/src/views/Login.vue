<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
const username = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  const apiUrl = "http://localhost:5000/api/v1/login";

  try {
    const response = await axios.post(apiUrl, {
      username: username.value,
      password: password.value,
    });

    console.log("data user:", response.data);
    router.push("/");
  } catch (error) {
    console.error("Login error:", error);
  }
};
</script>

<template>
  <section class="vh-100" style="background-color: #eee">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div
                  class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-2 order-lg-1"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid"
                    alt="Sample image"
                  />
                </div>
                <div class="col-md-10 col-lg-6 col-xl-5 order-1 order-lg-2">
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Log In
                  </p>

                  <form class="mx-1 mx-md-4">
                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="username"
                          >Your Username</label
                        >
                        <input
                          v-model="username"
                          type="text"
                          id="username"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                        <label class="form-label" for="password"
                          >Your Password</label
                        >
                        <input
                          v-model="password"
                          type="password"
                          id="password"
                          class="form-control"
                        />
                      </div>
                    </div>

                    <div
                      class="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                    >
                      <button
                        @click="login"
                        type="button"
                        class="btn btn-primary btn-lg"
                      >
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <router-link to="/signup">Sign Up</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
