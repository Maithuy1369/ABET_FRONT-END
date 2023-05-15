<template>
  <div class="part22-card card container-fluid">
    <div data-app>
      <div class="title">
        <span><strong>DANH SÁCH CÁC SO</strong> </span>
      </div>
      <div class="title-1" style="width: 50%">
        <v-autocomplete
          label="Lựa chọn SO"
          v-model="name"
          :items="soNameOptions"
        >
        </v-autocomplete>
         <v-textarea label="Mô tả" v-model="description"></v-textarea> 
      </div>
      <div classId="d-grid justify-space-center ">
        <v-btn
          class="btn text-white"
          type="submit"
          color="#2980e4"
          @click="createSO"
          size="x-large"
          >XÁC NHẬN</v-btn
        >
      </div>
    </div>
  </div>
</template>
<script>
import { sODocumentAPI } from "@/api/sODocument";
import dayjs from "dayjs";
export default {
  methods: {
    async createSO() {
      if (this.name == null || this.description == "") {
        return;
      }
      let currentYear = dayjs().year();
      let a = sODocumentAPI.createSODocument(
        this.name,
        this.description,
        currentYear
      );
      console.log(a);
      alert("Đã gửi xác nhận!");
      this.$router.push("/waiting-room");
    },
  },
  data() {
    return {
      description: "",
      soNameOptions: [
        "Đánh giá SO1",
        "Đánh giá SO2",
        "Đánh giá SO3",
        "Đánh giá SO4",
        "Đánh giá SO5",
      ],
      name: null,
    };
  },
};
</script>
<style>
.title {
  margin: 0 20px 8px;
  border-bottom: 1px solid #d9d9d9;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  font-weight: 400;
  color: #0355b3;
}
.title-1 {
  margin: 0 20px 15px;
  padding: 30px;
}
.part22-card {
  position: relative;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: auto;
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
</style>
