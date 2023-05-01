<template>
  <div class="password">
    <form class="mb-3">
      <div class="text-center text-primary">
        <h5>Thay đổi mật khẩu</h5>
      </div>
      <hr />
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-4 col-form-label"
          >Mật khẩu cũ</label
        >
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-4 col-form-label"
          >Mật khẩu mới</label
        >
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-4 col-form-label"
          >Nhập lại mật khẩu</label
        >
        <div class="col-sm-8">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>
      <div class="d-grid gap-2 d-flex justify-content-center">
        <input class="btn btn-primary" type="submit" value="Xác nhận" />
        <input class="btn btn-danger" type="reset" value="Huỷ" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "changePass",
};
</script>

<style>
.password {
  border: 1px solid blue;
  padding: 30px 10px;
  width: 50%;
  margin: 10% 25%;
  justify-content: center;
}
</style>
