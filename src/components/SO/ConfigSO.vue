<template>
  <div data-app>
    <div style="width: 50%">
      <v-autocomplete v-model="name" :items="soNameOptions"> </v-autocomplete>
      <v-textarea v-model="description"></v-textarea>
    </div>
    <v-btn @click="createSO">submit</v-btn>
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
.data-app {
}
</style>
