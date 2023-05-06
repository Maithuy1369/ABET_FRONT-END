<template>
  <div class="information">
    <div class="row">
      <div class="col-xl-4">
        <div class="card mb-4 mb-xl-0">
          <div class="card-header text-center">Ảnh đại diện</div>
          <div class="card-body text-center">
            <img
              class="img-account-profile rounded-circle mb-3"
              src="@/assets/image/logo_haui.jpg"
              alt="avatar"
              style="width: 150px"
            />
            <div class="input-group">
              <input
                type="file"
                class="form-control form-control-sm"
                id="inputGroupFile04"
                aria-describedby="inputGroupFileAddon04"
              />
              <v-btn @click="profile">Tải ảnh lên</v-btn>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="card mb-4">
          <div class="card-header text-center">Thông tin</div>
          <div class="card-body">
            <form>
              <div class="row gx-3 mb-3">
                <div class="col-md-6">
                  <label class="small mb-1" for="inputFullname">Họ tên</label>
                  <input class="form-control" id="inputFullname" type="text" />
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputBirthday"
                    >Ngày sinh</label
                  >
                  <input class="form-control" id="inputBirthday" type="date" />
                </div>
              </div>
              <div class="row gx-0 mb-3">
                <label class="small mb-1" for="inputAddress">Địa chỉ</label>
                <input class="form-control" id="inputAddress" type="text" />
              </div>
              <div class="row gx-3 mb-0">
                <div class="col-md-6">
                  <label class="small mb-1" for="inputEmail">Email</label>
                  <input class="form-control" id="inputEmail" type="email" />
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputNumber"
                    >Số điện thoại</label
                  >
                  <input class="form-control" id="inputNumber" type="number" />
                </div>
              </div>
              <div class="row gx-3 mb-3">
                <div class="col-md-6">
                  <label class="small mb-1" for="inputOrgName">Chức vụ</label>
                  <input class="form-control" id="inputOrgName" type="text" />
                </div>
                <div class="col-md-6">
                  <label class="small mb-1" for="inputLocation"
                    >Nơi công tác</label
                  >
                  <input class="form-control" id="inputLocation" type="text" />
                </div>
              </div>
              <div class="d-grid gap-2 d-flex justify-content-center">
                <input class="btn btn-primary" type="submit" value="Xác nhận" />
                <input class="btn btn-danger" type="reset" value="Huỷ" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style>
.information {
  margin: 0px;
  padding: 30px 20px;
}
</style>
