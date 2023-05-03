<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
import { userAPI } from "./api/user";
export default {
    created() {
        if (!window.passWaitingRoom) {
            this.$router.push("/waiting-room");
        }
        if (localStorage.feeUserInfo) {
            this.$store.commit("user/setStoredUserInfo");
        } else {
            this.$router.push("/login");
        }
        // this.getAllUser();
        // console.log(allUser);
    },
    methods: {
        getAllUser() {
            let allUserRes = userAPI.getAllUserInfo().then((a) => {
                console.log(a);
            });

            if (allUserRes.status == 200) {
                this.$store.commit("user/setAllUserInfo", allUserRes.data);
            }
        },
    },
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    width: 100vw;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
<style lang="scss">
@import "~ag-grid-community/styles/ag-grid.css";
@import "~ag-grid-community/styles/ag-theme-alpine.css";
</style>
