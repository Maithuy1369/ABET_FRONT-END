<template>
  <div class="v-app-bar theme--light">
    <v-header class="d-flex">
      <v-list-item>
        <v-img
          src="@/assets/image/logo_haui.jpg"
          max-width="50"
          alt="logoHAUI"
        />
        <v-spacer class="text-center justify-space-around text-white pt-1">
          <h5><strong>Khoa Điện tử - HaUI</strong></h5>
          <h6>Chương trình kiểm định theo chuẩn ABET</h6>
        </v-spacer>
      </v-list-item>
    </v-header>
  </div>
</template>

<script>
export default {
  name: "HeaderBar",
};
</script>

<style>
.v-app-bar {
  background-color: #130686;
}
</style>
