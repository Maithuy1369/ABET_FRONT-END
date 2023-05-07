<template>
  <div class="part22-card card container-fluid">
    <div>
      <div class="title">
        <span> DANH SÁCH CÁC MẪU PHIẾU</span>
      </div>
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
    <div class="btn" v-if="isSuperUser">
      <v-btn @click="toConfigDocument">Thêm mẫu phiếu</v-btn>
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
<style>
.part22-card {
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 100px;
  margin-bottom: 20px;
  padding-top: 30px;
  padding-left: 25px;
  padding-right: 50px;
  padding-bottom: 25px;
  box-sizing: border-box;
  display: block;
  border-top-color: blue;
  border-top: 3px solid #2980e4;
  border-width: 2;
}
.title {
  margin: 0 20px 8px;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  color: #0355b3;
}
.btn {
  margin-left: 50px;
  font-family: "Times New Roman", Times, serif;
}
</style>
