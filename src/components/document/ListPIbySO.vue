<template>
  <div class="part22-card card container-fluid">
    <div>
      <div class="title">
        <span> <strong>DANH SÁCH CÁC MẪU PHIẾU </strong></span>
      </div>
      <!-- Them mau phieu -->
      <div class="btn" v-if="isSuperUser">
        <v-btn
          class="btn text-white"
          type="submit"
          color="#2980e4"
          @click="toConfigDocument"
          size="x-large"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-plus"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          Thêm mẫu phiếu</v-btn
        >
        <!-- xos SO -->
        <v-btn @click="deleteSODocument" color="#d41111" class="btn text-white"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 -2 20 20"
          >
            <path
              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
            />
            <path
              d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          Xóa SO này?</v-btn
        >
      </div>
      <!-- Danh sach cac phieu PI -->
      <div class="col-md4">
        <div v-for="pi in allPIBySO" :key="pi.id" style="cursor: pointer">
          <div
            @click="
              () => {
                toDetailDocument(pi.id);
              }
            "
          >
            Phiếu đánh giá {{ pi.evaluteField }}
            <v-btn class="col-md4" @click="() => deleteDocument(pi.id)"
              >Xóa PI này?</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentAPI } from "@/api/document";
import { sODocumentAPI } from "@/api/sODocument";

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
    deleteDocument(id) {
      documentAPI.deleteDocument(id);
    },
    deleteSODocument() {
      let id = this.$route.params.id;
      sODocumentAPI.deleteDocument(id);
    },
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
  width: -webkit-fill-available;
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
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  padding: 15px;
  margin-right: 20px;
}
.bi {
  color: white;
}
.btn-row {
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  padding: 30px;
}
</style>
