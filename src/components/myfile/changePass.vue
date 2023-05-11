<template>
  <div class="part22-card card fluid">
    <div class="title">
      <span> THAY ĐỔI MẬT KHẨU</span>
    </div>
    <div class="password">
      <div class="mb-3">
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Mật khẩu cũ</label
          >
          <div class="col-sm-8">
            <input type="password" class="form-control" v-model="password" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Mật khẩu mới</label
          >
          <div class="col-sm-8">
            <input type="password" class="form-control" v-model="password" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="inputPassword" class="col-sm-4 col-form-label"
            >Nhập lại mật khẩu</label
          >
          <div class="col-sm-8">
            <input type="password" class="form-control" v-model="password" />
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
          <v-btn
            class="btn text-white"
            type="reset"
            color="#e44110"
            @click="submit"
            size="large"
            >HỦY</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "changePass",
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
