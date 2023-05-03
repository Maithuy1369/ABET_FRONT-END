<template>
    <div>
        <div v-if="isSuperUser">
            <v-btn @click="toConfigDocument">Tạo mới</v-btn>
        </div>
    </div>
</template>

<script>
import { documentAPI } from "@/api/document";

export default {
    computed: {
        isSuperUser() {
            let feeUserInfo = JSON.parse(localStorage.getItem("feeUserInfo"));
            return feeUserInfo.profile.userType == 0;
        },
    },
    async created() {
        let id = this.$route.params.id;
        let res = await documentAPI.getAllPIBySOId(id);
        console.log(res);
    },
    methods: {
        toConfigDocument() {
            this.$router.push(
                "/document/" + this.$route.params.id + "/create-document"
            );
        },
    },
    data() {
        return {};
    },
};
</script>
