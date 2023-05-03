<template>
    <div class="container">
        <form @submit.prevent="login">
            <div class="row">
                <label for="email">
                    <input
                        v-model="userName"
                        class="form-control"
                        type="text"
                        name="email"
                        placeholder="Tên đăng nhập"
                        autocomplete="email"
                    />
                </label>
            </div>
            <div class="row">
                <label for="password">
                    <input
                        v-model="password"
                        class="form-control"
                        type="password"
                        name="password"
                        placeholder="Mật khẩu"
                        autocomplete="current-password"
                    />
                </label>
            </div>
            <div class="row">
                <div class="splash-footer text-center mx-auto">
                    <span style="color: red"> Bạn quên mật khẩu? </span>
                    <span class="ml-1">
                        <router-link
                            :to="{ name: 'repass', params: {} }"
                            class="text-primary font-bold text-red"
                        >
                            Quên mật khẩu
                        </router-link>
                    </span>
                </div>
            </div>
            <div class="alternative-option mt-4">
                <!-- You don't have an account? <span @click="moveToRegister">Register</span> -->
            </div>
            <div class="row">
                <button
                    type="submit"
                    class="mt-1 btn-per text-white front-bold"
                    id="login_button"
                >
                    Đăng nhập
                </button>
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
</template>

<script>
//   import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { userAPI } from "@/api/user";

export default {
    name: "login-vue",
    data() {
        return {
            userName: "",
            password: "",
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
    color: #ec323b;
    margin-bottom: 10px;
    margin-top: 20px;
}
form button {
    float: center;
    padding: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    justify-content: center;
}

form button:hover {
    background-color: #acacf2;

    /* background-color: #e7f0f6; */
}
</style>
