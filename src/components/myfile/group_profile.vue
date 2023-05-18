<template>
    <div>
        <div class="part22-card fluid">
            <div class="information">
                <div class="title">
                    <span> <strong>QUẢN LÝ THÀNH VIÊN </strong></span>
                </div>
                <div class="row">
                    <div class="col-xl-12 p-3">
                        <div class="card mb-4">
                            <div class="card-header text-center">
                                Thông tin tài khoản
                            </div>
                            <div class="card-body">
                                <div>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label
                                                class="small mb-1"
                                                for="inputFullname"
                                                >Họ tên</label
                                            >
                                            <input
                                                class="form-control"
                                                v-model="firstName"
                                                type="text"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label
                                                class="small mb-1"
                                                for="inputAddress"
                                                >Email</label
                                            >
                                            <input
                                                class="form-control"
                                                v-model="email"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div class="row gx-3 mb-3">
                                        <div class="col-md-6">
                                            <label
                                                class="small mb-1"
                                                for="inputOrgName"
                                                >Tài khoản</label
                                            >
                                            <input
                                                class="form-control"
                                                v-model="userName"
                                                type="text"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label
                                                class="small mb-1"
                                                for="inputLocation"
                                                >Mật khẩu</label
                                            >
                                            <input
                                                class="form-control"
                                                v-model="password"
                                                type="password"
                                            />
                                        </div>
                                        <!-- <div class="col-md-4">
                      <label class="small mb-1" for="inputLocation"
                        >Nhập lại mật khẩu</label
                      >
                      <input
                        class="form-control"
                        v-model="workPlace"
                        type="password"
                      />
                    </div> -->
                                    </div>
                                </div>
                            </div>
                            <p
                                style="margin: 0 auto; color: green"
                                v-if="isSussess"
                            >
                                Tạo thành công
                            </p>
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-flex justify-content-center">
                        <v-btn
                            class="btn text-white"
                            color="#2980e4"
                            @click="submit"
                            size="x-large"
                        >
                            <v-icon medium dark left>mdi-plus</v-icon>Thêm thành
                            viên</v-btn
                        >
                    </div>
                </div>
            </div>
        </div>
        <div class="part22-card fluid">
            <div class="information">
                <div class="row">
                    <div class="col-xl-12 p-3">
                        <div class="card mb-4">
                            <div class="card-header text-center">
                                Danh sách thành viên
                            </div>
                            <div class="card-body">
                                <div>
                                    <div class="row gx-3 mb-3 text-center">
                                        <div class="col-md-1">
                                            <label class="small mb-1"
                                                >STT</label
                                            >
                                        </div>
                                        <div class="col-md-4">
                                            <label class="small mb-1"
                                                >Họ tên</label
                                            >
                                        </div>
                                        <div class="col-md-4">
                                            <label class="small mb-1"
                                                >Email</label
                                            >
                                        </div>
                                        <!-- <div class="col-md-3">
                                            <label class="small mb-1"
                                                >Chức năng</label
                                            >
                                        </div> -->
                                    </div>
                                    <div
                                        class="row mb-3"
                                        v-for="(u, i) in allUsers"
                                        :key="u.id"
                                    >
                                        <div class="col-md-1 text-center">
                                            {{ i }}
                                        </div>
                                        <div class="col-md-4 text-center">
                                            {{ u.lastName + " " + u.firstName }}
                                        </div>
                                        <div class="col-md-4 text-center">
                                            {{ u.email }}
                                        </div>
                                        <!-- <div class="col-md-3 text-center">
                                            <v-icon
                                                class="btn1"
                                                color="#000000"
                                                style="margin-left: 40px"
                                                large
                                                >mdi-clipboard-edit-outline</v-icon
                                            > -->
                                        <!-- XOA PI -->

                                        <!-- <v-icon
                                                class="btn1 btn1-hover"
                                                large
                                                color="#cf0d0d"
                                                style="margin-left: 40px"
                                                >mdi-trash-can-outline
                                            </v-icon>
                                        </div> -->
                                    </div>
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
    created() {
        this.allUsers = this.$store.state.user.users;
    },
    data() {
        return {
            userName: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            isSussess: false,
            allUsers: [],
        };
    },
    methods: {
        async submit() {
            let res = await userAPI.register(
                this.userName,
                this.password,
                this.firstName,
                this.email
            );
            console.log(res);
            if (res.status == 200) {
                this.isSussess = true;
                setTimeout(() => {
                    this.isSussess = false;
                }, 3000);
            }
        },
    },
};
</script>
<style>
.part22-card {
    position: relative;
    margin-left: 60px;
    margin-top: 20px;
    margin-right: 25px;
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
    width: -webkit-fill-available;
}
.title {
    margin: 0 10px 30px;
    border-bottom: 1px solid #d9d9d9;
    font-weight: 400;
    color: #0355b3;
}
</style>
