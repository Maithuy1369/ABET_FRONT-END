<template>
    <div></div>
</template>
<script>
import { userAPI } from "@/api/user";
import { sODocumentAPI } from "@/api/sODocument";
export default {
    async created() {
        this.lastPath = this.$router.history.router.history._startLocation;
        let stillAliveRes = await userAPI.testHelthToken();
        if (stillAliveRes.message == "invalid or expired jwt") {
            window.location.href = "/login";
        }

        let allUserRes = await userAPI.getAllUserInfo();

        if (allUserRes.status == 200) {
            this.$store.commit("user/setAllUserInfo", allUserRes.data);
        }
        let allSODocumentRes = await sODocumentAPI.getAllSODocument();
        console.log(allSODocumentRes);
        if (allSODocumentRes.status == 200) {
            this.$store.commit(
                "sODocument/setAllSODocument",
                allSODocumentRes.data
            );
        }
        window.passWaitingRoom = true;
        this.directToNextPage();
    },
    data() {
        return {
            lastPath: null,
        };
    },
    methods: {
        directToNextPage() {
            if (this.lastPath == "/waiting-room") {
                this.lastPath = "/";
            }
            this.$router.push(this.lastPath);
        },
        async getAllUser() {
            let allUserRes = await userAPI.getAllUserInfo();

            if (allUserRes.status == 200) {
                this.$store.commit("user/setAllUserInfo", allUserRes.data);
            }
        },
    },
};
</script>
