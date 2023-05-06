<template>
  <div class="password">
    <div class="mb-3">
      <div class="text-center text-primary">
        <h5>Thay đổi mật khẩu</h5>
      </div>
      <hr />
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
        <input class="btn btn-primary" type="submit" value="Xác nhận" />
        <input class="btn btn-danger" type="reset" value="Huỷ" />
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
  border: 1px solid rgb(68, 68, 73);
  padding: 30px 10px;
  width: 50%;
  margin: 10% 25%;
  justify-content: center;
}
</style>
