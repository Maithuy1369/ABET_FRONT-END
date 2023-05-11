<template>
  <div class="part22-card card fluid">
    <div class="information">
      <div class="title">
        <span> THÔNG TIN THÀNH VIÊN</span>
      </div>
      <div class="row">
        <div class="col-xl-3">
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
                <!-- <v-btn @click="profile">Tải ảnh lên</v-btn> -->
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card mb-4">
            <div class="card-header text-center">Thông tin</div>
            <div class="card-body">
              <div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputFullname">Họ tên</label>
                    <input
                      class="form-control"
                      v-model="fullName"
                      type="text"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputBirthday"
                      >Ngày sinh</label
                    >
                    <input
                      class="form-control"
                      v-model="birthDay"
                      type="date"
                    />
                  </div>
                </div>
                <div class="row gx-0 mb-3">
                  <label class="small mb-1" for="inputAddress">Địa chỉ</label>
                  <input class="form-control" v-model="address" type="text" />
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputEmail">Email</label>
                    <input class="form-control" v-model="email" type="email" />
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputNumber"
                      >Số điện thoại</label
                    >
                    <input class="form-control" v-model="numBer" type="text" />
                  </div>
                </div>
                <div class="row gx-3 mb-3">
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputOrgName">Chức vụ</label>
                    <input
                      class="form-control"
                      v-model="position"
                      type="text"
                    />
                  </div>
                  <div class="col-md-6">
                    <label class="small mb-1" for="inputLocation"
                      >Nơi công tác</label
                    >
                    <input
                      class="form-control"
                      v-model="workPlace"
                      type="text"
                    />
                  </div>
                </div>
                <div class="d-grid gap-2 d-flex justify-content-center">
                  <v-btn
                    class="btn text-white"
                    type="submit"
                    color="#2980e4"
                    @click="submit"
                    size="x-large"
                    >CẬP NHẬT</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { userAPI } from "@/api/user";

export default {
  name: "profile",
  created() {
    let profile = this.$store.state.user.user.profile;
    console.log(profile);
    this.fullName = profile.lastName + " " + profile.firstName;
    let customField = JSON.parse(profile.customField);
    this.birthDay = customField.birthDay;
    this.email = profile.email;
    this.address = customField.address;
    this.numBer = customField.numBer;
    this.position = customField.position;
    this.workPlace = customField.workPlace;
  },
  data() {
    return {
      fullName: "",
      birthDay: "",
      email: "",
      address: "",
      numBer: "",
      position: "",
      workPlace: "",
    };
  },
  methods: {
    submit() {
      let name = this.fullName.split(" ");
      let firstName = name[name.length - 1];
      let lastName = name.slice(0, name.length - 1).join(" ");
      let customField = JSON.stringify({
        birthDay: this.birthDay,
        address: this.address,
        number: this.numBer,
        position: this.position,
        workPlace: this.workPlace,
      });
      let data = {
        email: this.email,
        firstName: firstName,
        lastName: lastName,
        customField: customField,
      };
      userAPI.updateUserInfo(data);
    },
  },
};
</script>

<style>
.part22-card {
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 30px;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 25px;
  box-sizing: border-box;
  display: block;
  border-top-color: blue;
  border-top: 3px solid #2980e4;
  border-width: 2;
  width: -webkit-fill-available;
}
.information {
  margin: 0px;
  padding-top: 0px;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
}
.title {
  margin: 0 10px 30px;
  border-bottom: 1px solid #d9d9d9;
  font-weight: 400;
  color: #0355b3;
}
.card-header {
  background-color: #dfeaf7;
}
</style>
