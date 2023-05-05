<template>
    <div>
        <div>
            <p>Danh sách mẫu phiếu:</p>
            <div>
                <div
                    v-for="pi in allPIBySO"
                    :key="pi.id"
                    style="cursor: pointer"
                    @click="
                        () => {
                            toDetailDocument(pi.id);
                        }
                    "
                >
                    <div>Phiếu đánh giá {{ pi.evaluteField }}</div>
                </div>
            </div>
        </div>
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
    data() {
        return {
            allPIBySO: [],
        };
    },
    async created() {
        let id = this.$route.params.id;
        let res = await documentAPI.getAllPIBySOId(id);
        if (res.status == 200) {
            this.allPIBySO = res.data;
        }
        console.log(res);
    },
    methods: {
        toDetailDocument(id) {
            this.$router.push("/document/" + id + "/workspace");
        },
        toConfigDocument() {
            this.$router.push(
                "/document/" + this.$route.params.id + "/create-document"
            );
        },
    },
};
</script>
