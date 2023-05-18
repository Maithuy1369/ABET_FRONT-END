<template>
    <div id="app">
        <div class="v-main flex">
            <div class="part1">
                <HeaderBar v-if="includeMenu" />
            </div>
            <!-- <div class="part2"> -->
            <div class="part21">
                <NavBar v-if="includeMenu" />
            </div>
            <div class="part22">
                <router-view />
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
// import Content from "@/components/home/Content.vue";
import HeaderBar from "@/components/home/HeaderBar.vue";
import NavBar from "@/components/home/NavBar.vue";
import { userAPI } from "./api/user";
export default {
    components: {
        HeaderBar,
        NavBar,
    },

    created() {
        if (!window.passWaitingRoom && this.includeMenu) {
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
    computed: {
        includeMenu() {
            if (
                this.$route.name == "waitingRoom" ||
                this.$route.name == "login" ||
                this.$route.name == "repass"
            ) {
                return false;
            }
            return true;
        },
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
    color: #161c22;
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
