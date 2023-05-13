<template>
  <div class="part22-card card fluid">
    <div class="title">
      <span><strong>THAY ĐỔI MẬT KHẨU </strong> </span>
    </div>
    <div class="password">
      <div class="mb-3">
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Mật khẩu cũ*</label
          >
          <div class="col-sm-8">
            <input type="password" class="form-control" v-model="password" />
          </div>
        </div>
        <p v-if="loginError" class="error-message text-center">
          *Sai mật khẩu!
        </p>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Mật khẩu mới*</label
          >
          <div class="col-sm-8">
            <input type="password" class="form-control" v-model="newpassword" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Nhập lại mật khẩu*</label
          >
          <div class="col-sm-8">
            <input
              type="password"
              class="form-control"
              v-model="newpasswordConfirm"
            />
          </div>
        </div>

        <div class="d-grid gap-2 d-flex justify-content-center">
          <v-btn
            class="btn text-white"
            type="submit"
            color="#2980e4"
            @click="submit"
            size="large"
            >XÁC NHẬN</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userAPI } from "@/api/user";

export default {
  name: "changePass",
  methods: {
    async submit() {
      if (this.newpassword == this.newpasswordConfirm) {
        let userName = this.$store.state.user.user.profile.userName;
        let res = await userAPI.login(userName, this.password);
        if (res.status == 200) {
          // localStorage.feeUserInfo = JSON.stringify(res.data);
          alert("Thay đổi mật khẩu thành công!");
          let resC = await userAPI.updateUserInfo({
            password: this.newpassword,
          });
          console.log(resC);
          this.loginError = false;
        } else {
          console.log("unAuthentication");
          this.loginError = true;
        }
      }
    },
  },
  data() {
    return {
      password: "",
      newpassword: "",
      loginError: false,
    };
  },
};
</script>

<style>
.password {
  border: 1px solid rgb(19, 19, 134);
  border-radius: 8px;
  padding: 15px 10px;
  width: 50%;
  margin: 5% 25%;
  justify-content: center;
}
.title {
  /* color: black; */
  margin: 0 10px 30px;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-weight: 500;
  color: #0355b3;
}
.part22-card {
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 30px;
  margin-bottom: 20px;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 25px;
  box-sizing: border-box;
  display: block;
  border-top-color: blue;
  border-top: 3px solid #2980e4;
  border-width: 2;
}
</style>
