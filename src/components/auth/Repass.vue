<template>
  <div class="container">
    <div class="panel-default">
      <div class="panel-heading text-center mx-auto">
        <img
          :src="require('@/assets/image/logo_haui.jpg')"
          alt="logo haui"
          class="logo-img mb-3"
          width="70"
          height="70"
        />
        <span class="splash-description">
          <h5 style="font-weight: bold">Trường Đại học Công nghiệp Hà Nội</h5>
          <h6>Chương trình kiểm định theo chuẩn ABET</h6>
        </span>
      </div>
      <hr />
      <div class="panel-body">
        <form @submit.prevent="login">
          <div class="row">
            <label for="email">
              <input
                v-model="Email"
                class="form-control"
                type="text"
                name="email"
                placeholder="Email"
                autocomplete="email"
              />
            </label>
          </div>

          <div class="alternative-option mt-4">
            <!-- You don't have an account? <span @click="moveToRegister">Register</span> -->
          </div>
          <div class="row">
            <button
              type="submit"
              class="mt-1 btn-per text-white front-bold"
              id="repass_button"
            >
              Khôi phục mật khẩu
            </button>
          </div>

          <div class="row">
            <div class="splash-footer mx-auto text-center">
              <span> Quay về! </span>
              <span class="ml-1">
                <router-link
                  :to="{ name: 'login', params: {} }"
                  class="text-primary font-bold"
                >
                  Đăng nhập
                </router-link>
              </span>
            </div>
          </div>
          <div
            class="alert alert-warning alert-dismissible fade show mt-5 d-none"
            role="alert"
            id="alert_1"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//   import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userAPI } from "@/api/user";

export default {
  name: "repass-vue",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async login(submitEvent) {
      console.log(submitEvent);
      console.log(this.email, this.password);
      let res = await userAPI.login(this.userName, this.password);
      if (res.status == 200) {
        this.$store.commit("user/setShowUser", res);
        localStorage.feeUserInfo = JSON.stringify(res);
        this.$router.push("/");
      } else {
        console.log("unAuthentication");
      }

      console.log(res);
    },
    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 28rem !important;
  height: 32rem !important;
  padding: 3rem !important;
  box-sizing: border-box;
  border: 1px solid #2e4f8f;
  -webkit-border-radius: 8px;
  border-radius: 15px;
  background-color: #f0fddb;
}
.container .panel-default {
  margin-bottom: 20px;
}
.container .panel-default .panel-heading {
  margin-bottom: 25px !important;
  border-color: #ddd;
  justify-content: center;
}
.container .splash-description {
  margin-top: 50px !important;
  margin-bottom: 25px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  text-align: center;
  font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif;
}
.container .row {
  position: relative;
}
.container .row input {
  padding: 10px;
  margin-bottom: 15px;
  margin-top: 20px;
  font-size: 1rem;
  letter-spacing: 0.062rem;
  border: 1px solid #ccc;
  background: transparent;
  border-radius: 4px;
  background-color: #ffffff;
}
.container .input label {
  position: absolute;
  top: 0;
  left: 10px;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: grey;
  pointer-events: none;
  transition: 0.5s;
}
.container .row .splash-footer {
  float: center;
  font-weight: bold;
  color: #0f0f0f;
  margin-bottom: 10px;
  margin-top: 20px;
  justify-content: center;
}
form button {
  float: left;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 20px;
  border: none;
  border-radius: 5px;

  justify-content: center;
}

form button:hover {
  background-color: #acacf2;

  /* background-color: #e7f0f6; */
}
</style>
