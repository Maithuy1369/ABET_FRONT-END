<template>
  <div class="part22-card card container-fluid">
    <div>
      <div class="title">
        <span> <strong>DANH SÁCH CÁC MẪU PHIẾU </strong></span>
      </div>
      <!-- Them mau phieu -->
      <div class="btn text-xs-center" v-if="isSuperUser">
        <v-btn
          class="btn text-white"
          color="#2980e4"
          @click="toConfigDocument"
          size="x-large"
        >
          <v-icon medium dark left>mdi-plus</v-icon>Thêm mẫu phiếu</v-btn
        >
        <!-- XOA SO -->
        <v-btn
          @click="showDialog"
          color="#d41111"
          class="btn text-white"
          size="x-large"
        >
          <v-icon medium dark left>mdi-close-box-outline</v-icon>
          Xóa SO này?</v-btn
        >
        <v-dialog
          v-model="dialog"
          width="500px"
          :style="{
            display: dialog ? 'block' : 'none',
          }"
          style="z-index: 9999"
          color="#e0f8d0"
        >
          <v-card>
            <v-card-title>
              <span class="text-h5">XÁC NHẬN XÓA SO?</span>
            </v-card-title>
            <v-card-text>
              <span class="text-h5 text-black"
                >Bạn có chắc chắn muốn xóa SO này?</span
              >
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="btn text-white"
                color="#03741b"
                variant="elevated"
                @click="deleteSODocument"
              >
                Xác nhận
              </v-btn>
              <v-btn
                class="btn text-white"
                color="#cf0d0d"
                variant="elevated"
                @click="dialog = false"
              >
                Hủy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--  -->
      </div>
      <!-- Danh sach cac phieu PI -->
      <div>
        <div v-for="pi in allPIBySO" :key="pi.id">
          <div class="phieu">
            Phiếu đánh giá {{ pi.evaluteField }}

            <!-- CHINH SUA PI -->
            <v-icon
              class="btn1"
              color="#000000"
              style="margin-left: 40px"
              large
              @click="
                () => {
                  toDetailDocument(pi.id);
                }
              "
              >mdi-clipboard-edit-outline</v-icon
            >
            <!-- XOA PI -->

            <v-icon
              class="btn1 btn1-hover"
              large
              color="#cf0d0d"
              style="margin-left: 40px"
              @click="() => deleteDocument(pi.id)"
              >mdi-trash-can-outline
            </v-icon>
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
      dialog: false,
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
      this.$router.push("/waiting-room");
      documentAPI.deleteDocument(id);
    },
    deleteSODocument() {
      let id = this.$route.params.id;
      sODocumentAPI.deleteDocument(id);
      this.$router.push("/waiting-room");
    },
    toDetailDocument(id) {
      this.$router.push("/document/" + id + "/workspace");
    },
    toConfigDocument() {
      this.$router.push(
        "/document/" + this.$route.params.id + "/create-document"
      );
    },
    showDialog() {
      this.dialog = true;
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
  margin-bottom: 15px;
  color: #0355b3;
}
.btn {
  font-family: "Times New Roman", Times, serif;
  font-size: 25px;
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
.phieu {
  box-sizing: border-box;
  display: block;
  border-width: 2;
  margin-left: 20px;
}
.phieu:hover {
  color: #0355b3;
}
</style>
